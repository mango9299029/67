import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TriangleDiagram } from "@/components/triangle-diagram";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { getActiveQuestions, useTrigo } from "@/lib/store";
import { LEVEL_NAMES } from "@/lib/types";
import { pushSubmission } from "@/lib/firebase";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const LETTERS = ["ก", "ข", "ค", "ง"];

export function QuizPage() {
  const store = useTrigo();
  const questions = useMemo(
    () =>
      getActiveQuestions({
        customQuestions: store.customQuestions,
        quizCount: store.quizCount,
        submitted: store.submitted,
        totalAtSubmission: store.totalAtSubmission,
      }),
    [
      store.customQuestions,
      store.quizCount,
      store.submitted,
      store.totalAtSubmission,
    ],
  );
  const total = questions.length;
  const current = Math.min(store.current, Math.max(0, total - 1));
  const item = questions[current];
  const answeredCount = Object.keys(store.answers).length;
  const pct = total ? Math.round((answeredCount / total) * 100) : 0;
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [now, setNow] = useState(Date.now());
  const [sending, setSending] = useState(false);
  const sendingRef = useRef(false);

  useEffect(() => {
    if (store.submitted) return;
    if (!store.timerMinutes || store.timerMinutes <= 0) {
      if (store.deadline !== null) store.setDeadline(null);
      return;
    }
    if (!store.deadline || store.deadline <= Date.now()) {
      store.setDeadline(Date.now() + store.timerMinutes * 60000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [store.timerMinutes, store.submitted]);

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const remainMs = store.deadline && !store.submitted ? store.deadline - now : null;
  const timedOut = remainMs !== null && remainMs <= 0;

  useEffect(() => {
    if (timedOut && !store.submitted && !sending) {
      toast.message("หมดเวลาทำข้อสอบ ระบบส่งคำตอบให้อัตโนมัติ");
      void doSubmit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timedOut]);

  async function doSubmit() {
    if (sendingRef.current || useTrigo.getState().submitted) return;
    sendingRef.current = true;
    setSending(true);
    const draft = {
      name: store.name || "ไม่ระบุชื่อ",
      studentClass: store.studentClass || "-",
      studentNo: store.studentNo || "-",
      score: 0,
      total,
      percent: 0,
      submittedAt: Date.now(),
    };
    const result = store.gradeAndSubmit(false);
    const payload = {
      ...draft,
      name: result.name,
      studentClass: result.studentClass,
      studentNo: result.studentNo,
      score: result.score,
      total: result.total,
      percent: result.percent,
      submittedAt: result.submittedAt,
      breakdown: result.breakdown,
    };
    const cloud = await pushSubmission(payload);
    if (cloud.ok) {
      useTrigo.setState({ cloudSent: true, cloudError: null });
      toast.success("ส่งผลสอบถึงแอดมินแล้ว");
    } else {
      useTrigo.setState({
        cloudSent: false,
        cloudError: cloud.error ?? "ส่งไม่สำเร็จ",
      });
      toast.error("บันทึกผลบนเครื่องนี้แล้ว แต่ส่งถึงแอดมินไม่สำเร็จ");
    }
    setSending(false);
    sendingRef.current = false;
    setConfirmOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (!item) {
    return (
      <div className="mx-auto max-w-[840px] px-5 py-10">
        <p className="text-ink-soft">ยังไม่มีข้อสอบในคลัง</p>
      </div>
    );
  }

  const remainSec =
    remainMs !== null ? Math.max(0, Math.ceil(remainMs / 1000)) : null;
  const mm = remainSec !== null ? Math.floor(remainSec / 60) : 0;
  const ss = remainSec !== null ? remainSec % 60 : 0;

  return (
    <div className="mx-auto max-w-[840px] px-5 py-9 pb-16">
      <h2 className="m-0 mb-1.5 text-[1.55rem] font-bold text-navy">แบบทดสอบ</h2>
      <p className="mb-7 text-ink-soft">
        ทำให้ครบทุกข้อก่อนกดส่งคำตอบ ระบบจะไม่แสดงถูก/ผิดจนกว่าจะส่งคำตอบทั้งหมด
      </p>

      <div className="rounded-md border border-line bg-panel p-6 shadow-[var(--shadow-card)]">
        <div className="mb-2.5 flex flex-wrap items-baseline justify-between gap-1.5">
          <span className="font-bold text-navy">
            ข้อ {current + 1} / {total}
          </span>
          {store.deadline && !store.submitted ? (
            <span
              className={cn(
                "rounded-full bg-gold-soft px-3 py-1 text-[0.92rem] font-bold text-[#8a5e10] dark:text-gold",
                remainSec !== null && remainSec <= 60 && "bg-bad-soft text-bad",
              )}
            >
              {String(mm).padStart(2, "0")}:{String(ss).padStart(2, "0")}
            </span>
          ) : null}
          <span className="text-[0.9rem] text-ink-soft">ทำไปแล้ว {pct}%</span>
        </div>
        <div className="mb-5 h-2.5 overflow-hidden rounded-full bg-bg-2">
          <div
            className="h-full rounded-full transition-[width] duration-200"
            style={{
              width: `${pct}%`,
              background: "linear-gradient(90deg, var(--teal), var(--gold))",
            }}
          />
        </div>

        <div className="mb-2.5 inline-block rounded-full bg-teal-soft px-2.5 py-1 text-[0.78rem] font-bold text-teal">
          {item.levelLabel || LEVEL_NAMES[item.level ?? 0] || "โจทย์เพิ่มเติม"}
        </div>
        <div className="mt-1.5 mb-4 text-[1.12rem] font-semibold text-ink">
          {current + 1}. {item.q}
        </div>
        {item.tri ? (
          <TriangleDiagram
            opp={item.tri[0] || ""}
            adj={item.tri[1] || ""}
            hyp={item.tri[2] || ""}
          />
        ) : null}

        {item.type === "written" ? (
          <div>
            <Input
              className="mb-2.5"
              placeholder="พิมพ์คำตอบที่ได้จากการคำนวณ"
              value={
                store.answers[current] !== undefined
                  ? String(store.answers[current])
                  : ""
              }
              onChange={(e) => store.setAnswer(current, e.target.value)}
            />
            <p className="mb-3.5 text-[0.88rem] text-ink-soft">
              {item.numeric
                ? "ตอบเป็นตัวเลข"
                : "พิมพ์คำตอบเป็นข้อความให้ตรงกับที่คำนวณได้"}
            </p>
          </div>
        ) : (
          (item.choices ?? []).map((choiceText, idx) => (
            <button
              key={idx}
              type="button"
              className={cn(
                "mb-2.5 flex w-full items-center rounded-sm border-[1.5px] border-line bg-bg-2 px-4 py-3 text-left text-base text-ink transition-colors duration-150 hover:border-teal",
                store.answers[current] === idx &&
                  "border-teal bg-teal-soft font-bold",
              )}
              onClick={() => store.setAnswer(current, idx)}
            >
              <span
                className={cn(
                  "mr-2.5 inline-flex size-[26px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-line bg-panel text-[0.85rem] font-bold",
                  store.answers[current] === idx &&
                    "border-teal bg-teal text-white",
                )}
              >
                {LETTERS[idx]}
              </span>
              {choiceText}
            </button>
          ))
        )}

        <div className="mt-5 flex flex-wrap justify-between gap-2.5">
          <Button
            variant="outline"
            disabled={current === 0}
            onClick={() => store.setCurrent(current - 1)}
          >
            ย้อนกลับ
          </Button>
          <span className="flex-1" />
          {current === total - 1 ? (
            <Button disabled={sending} onClick={() => setConfirmOpen(true)}>
              {sending ? "กำลังส่ง..." : "ส่งคำตอบ"}
            </Button>
          ) : (
            <Button
              variant="quiet"
              onClick={() => store.setCurrent(current + 1)}
            >
              ถัดไป
            </Button>
          )}
        </div>

        <div className="mt-5 grid grid-cols-6 gap-1.5 sm:grid-cols-10">
          {questions.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => store.setCurrent(i)}
              className={cn(
                "aspect-square rounded-sm border border-line bg-bg-2 text-[0.85rem] text-ink-soft",
                store.answers[i] !== undefined &&
                  "border-teal bg-teal-soft font-bold text-teal",
                i === current && "outline-2 outline-offset-1 outline-gold",
              )}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <DialogContent>
          <DialogTitle>ยืนยันการส่งคำตอบ</DialogTitle>
          <DialogDescription>
            {answeredCount < total
              ? `คุณตอบไปแล้ว ${answeredCount} จาก ${total} ข้อ ยังไม่ครบทุกข้อ ต้องการส่งคำตอบเลยหรือไม่?`
              : "คุณต้องการส่งคำตอบหรือไม่? ผลสอบจะถูกส่งถึงแอดมิน"}
          </DialogDescription>
          <div className="flex justify-end gap-2.5">
            <Button variant="outline" onClick={() => setConfirmOpen(false)}>
              ยกเลิก
            </Button>
            <Button disabled={sending} onClick={() => void doSubmit()}>
              ยืนยัน
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
