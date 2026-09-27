export type PageId =
  | "cover"
  | "lesson"
  | "quiz"
  | "results"
  | "answers"
  | "admin";

export type QuestionType = "mc" | "written";

export type Question = {
  q: string;
  level?: number;
  levelLabel?: string;
  type?: QuestionType;
  choices?: string[];
  correct?: number;
  answer?: string;
  numeric?: boolean;
  tolerance?: number;
  tri?: string[];
  steps: string[];
  why: string;
};

export type Breakdown = Record<
  string,
  { correct: number; total: number; label: string }
>;

export type Submission = {
  id: string;
  name: string;
  studentClass: string;
  studentNo: string;
  score: number;
  total: number;
  percent: number;
  submittedAt: number;
  breakdown?: Breakdown;
};

export type ExamConfig = {
  quizCount: number;
  timerMinutes: number;
  questions: Question[] | null;
  passHash?: string;
  updatedAt?: number;
};

export const LEVEL_NAMES: Record<number, string> = {
  1: "พื้นฐานตรีโกณมิติ",
  2: "sin cos tan",
  3: "หาความยาวด้าน",
  4: "หามุม",
  5: "พีทาโกรัส + ตรีโกณมิติ",
  6: "โจทย์ประยุกต์",
};

export const CHECKLIST = [
  "1. วาดรูปก่อน",
  "2. หามุมที่โจทย์สนใจ",
  "3. ระบุด้าน ข้าม / ชิด / ฉาก",
  "4. เลือก sin / cos / tan",
  "5. แทนค่าลงสูตร",
  "6. แก้สมการ",
  "7. ตรวจคำตอบและหน่วย",
];
