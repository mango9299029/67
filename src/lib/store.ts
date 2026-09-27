import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { Breakdown, ExamConfig, PageId, Question, Submission } from "./types";
import { LEVEL_NAMES } from "./types";
import { DEFAULT_QUESTIONS } from "./questions";
import { DEFAULT_PASS_HASH } from "./hash";

export type AnswerMap = Record<string, number | string>;

type TrigoState = {
  page: PageId;
  name: string;
  studentClass: string;
  studentNo: string;
  answers: AnswerMap;
  submitted: boolean;
  score: number | null;
  breakdown: Breakdown | null;
  deadline: number | null;
  totalAtSubmission: number | null;
  current: number;
  cloudSent: boolean;
  cloudError: string | null;
  localHistory: Submission[];
  checklist: Record<string, boolean>;
  theme: "light" | "dark";

  isAdmin: boolean;
  passHash: string;
  timerMinutes: number;
  quizCount: number;
  customQuestions: Question[] | null;
  cloudSubs: Submission[];
  examSyncedAt: number | null;

  setPage: (page: PageId) => void;
  setProfile: (patch: {
    name?: string;
    studentClass?: string;
    studentNo?: string;
  }) => void;
  setAnswer: (index: number, value: number | string) => void;
  setCurrent: (n: number) => void;
  setDeadline: (n: number | null) => void;
  setTheme: (t: "light" | "dark") => void;
  toggleChecklist: (i: number, checked: boolean) => void;
  applyExam: (exam: ExamConfig) => void;
  setCloudSubs: (items: Submission[]) => void;
  setAdmin: (v: boolean) => void;
  setPassHash: (h: string) => void;
  setExamSettings: (quizCount: number, timerMinutes: number) => void;
  setCustomQuestions: (q: Question[] | null) => void;
  gradeAndSubmit: (cloudOk: boolean, cloudError?: string) => Submission;
  restartQuiz: () => void;
  clearStudent: () => void;
  clearLocalHistory: () => void;
};

export function getPool(state: {
  customQuestions: Question[] | null;
}): Question[] {
  return state.customQuestions && state.customQuestions.length
    ? state.customQuestions
    : DEFAULT_QUESTIONS;
}

export function getActiveQuestions(state: {
  customQuestions: Question[] | null;
  quizCount: number;
  submitted: boolean;
  totalAtSubmission: number | null;
}): Question[] {
  const pool = getPool(state);
  const count = state.submitted && state.totalAtSubmission
    ? Math.min(state.totalAtSubmission, pool.length)
    : Math.max(1, Math.min(state.quizCount || pool.length, pool.length));
  return pool.slice(0, count);
}

export function isAnswerCorrect(
  item: Question,
  userAns: number | string | undefined,
): boolean {
  if (item.type === "written") {
    if (userAns === undefined || userAns === null || String(userAns).trim() === "")
      return false;
    if (item.numeric) {
      const a = parseFloat(String(userAns).replace(/,/g, ""));
      const b = parseFloat(String(item.answer));
      const tol =
        item.tolerance !== undefined &&
        item.tolerance !== null &&
        String(item.tolerance) !== ""
          ? Number(item.tolerance)
          : 0.05;
      if (Number.isNaN(a) || Number.isNaN(b)) return false;
      return Math.abs(a - b) <= tol;
    }
    return (
      String(userAns).trim().toLowerCase() ===
      String(item.answer ?? "").trim().toLowerCase()
    );
  }
  return userAns === item.correct;
}

function levelKeyOf(item: Question) {
  return item.levelLabel ? item.levelLabel : "lv" + (item.level ?? 0);
}

export const useTrigo = create<TrigoState>()(
  persist(
    (set, get) => ({
      page: "cover",
      name: "",
      studentClass: "",
      studentNo: "",
      answers: {},
      submitted: false,
      score: null,
      breakdown: null,
      deadline: null,
      totalAtSubmission: null,
      current: 0,
      cloudSent: false,
      cloudError: null,
      localHistory: [],
      checklist: {},
      theme: "light",

      isAdmin: false,
      passHash: DEFAULT_PASS_HASH,
      timerMinutes: 0,
      quizCount: DEFAULT_QUESTIONS.length,
      customQuestions: null,
      cloudSubs: [],
      examSyncedAt: null,

      setPage: (page) => set({ page }),
      setProfile: (patch) => set(patch),
      setAnswer: (index, value) =>
        set((s) => ({ answers: { ...s.answers, [index]: value } })),
      setCurrent: (n) => set({ current: n }),
      setDeadline: (n) => set({ deadline: n }),
      setTheme: (t) => set({ theme: t }),
      toggleChecklist: (i, checked) =>
        set((s) => ({ checklist: { ...s.checklist, [i]: checked } })),
      applyExam: (exam) =>
        set((s) => ({
          quizCount: exam.quizCount || s.quizCount,
          timerMinutes:
            typeof exam.timerMinutes === "number"
              ? exam.timerMinutes
              : s.timerMinutes,
          customQuestions: Array.isArray(exam.questions)
            ? exam.questions
            : exam.questions === null
              ? null
              : s.customQuestions,
          passHash: exam.passHash || s.passHash,
          examSyncedAt: exam.updatedAt ?? Date.now(),
        })),
      setCloudSubs: (items) => set({ cloudSubs: items }),
      setAdmin: (v) => set({ isAdmin: v }),
      setPassHash: (h) => set({ passHash: h }),
      setExamSettings: (quizCount, timerMinutes) =>
        set((s) => ({
          quizCount,
          timerMinutes,
          deadline:
            s.timerMinutes !== timerMinutes && !s.submitted ? null : s.deadline,
        })),
      setCustomQuestions: (q) =>
        set({
          customQuestions: q,
          quizCount: q ? Math.max(1, Math.min(get().quizCount, q.length)) : DEFAULT_QUESTIONS.length,
        }),
      gradeAndSubmit: (cloudOk, cloudError) => {
        const s = get();
        const Q = getActiveQuestions(s);
        let score = 0;
        const breakdown: Breakdown = {};
        Q.forEach((item, idx) => {
          const key = levelKeyOf(item);
          const label =
            item.levelLabel || LEVEL_NAMES[item.level ?? 0] || "อื่น ๆ";
          if (!breakdown[key])
            breakdown[key] = { correct: 0, total: 0, label };
          breakdown[key].total++;
          if (isAnswerCorrect(item, s.answers[idx])) {
            score++;
            breakdown[key].correct++;
          }
        });
        const submission: Submission = {
          id: "local-" + Date.now(),
          name: s.name || "ไม่ระบุชื่อ",
          studentClass: s.studentClass || "-",
          studentNo: s.studentNo || "-",
          score,
          total: Q.length,
          percent: Math.round((score / Q.length) * 100),
          submittedAt: Date.now(),
          breakdown,
        };
        const history = [submission, ...s.localHistory].slice(0, 50);
        set({
          score,
          submitted: true,
          breakdown,
          deadline: null,
          totalAtSubmission: Q.length,
          cloudSent: cloudOk,
          cloudError: cloudOk ? null : cloudError ?? null,
          localHistory: history,
          page: "results",
        });
        return submission;
      },
      restartQuiz: () =>
        set({
          answers: {},
          submitted: false,
          score: null,
          breakdown: null,
          deadline: null,
          totalAtSubmission: null,
          current: 0,
          cloudSent: false,
          cloudError: null,
          page: "quiz",
        }),
      clearStudent: () =>
        set({
          name: "",
          studentClass: "",
          studentNo: "",
          answers: {},
          submitted: false,
          score: null,
          breakdown: null,
          deadline: null,
          totalAtSubmission: null,
          current: 0,
          cloudSent: false,
          cloudError: null,
          page: "cover",
        }),
      clearLocalHistory: () => set({ localHistory: [] }),
    }),
    {
      name: "trigo_m3_v2",
      storage: createJSONStorage(() =>
        typeof window !== "undefined"
          ? localStorage
          : {
              getItem: () => null,
              setItem: () => {},
              removeItem: () => {},
            },
      ),
      skipHydration: true,
      partialize: (s) => ({
        name: s.name,
        studentClass: s.studentClass,
        studentNo: s.studentNo,
        answers: s.answers,
        submitted: s.submitted,
        score: s.score,
        breakdown: s.breakdown,
        deadline: s.deadline,
        totalAtSubmission: s.totalAtSubmission,
        current: s.current,
        cloudSent: s.cloudSent,
        cloudError: s.cloudError,
        localHistory: s.localHistory,
        checklist: s.checklist,
        theme: s.theme,
        passHash: s.passHash,
        timerMinutes: s.timerMinutes,
        quizCount: s.quizCount,
        customQuestions: s.customQuestions,
      }),
    },
  ),
);
