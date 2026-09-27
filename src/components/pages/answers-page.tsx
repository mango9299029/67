import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TriangleDiagram } from "@/components/triangle-diagram";
import { getActiveQuestions, isAnswerCorrect, useTrigo } from "@/lib/store";
import { useMemo } from "react";

const LETTERS = ["ก", "ข", "ค", "ง"];

export function AnswersPage() {
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

  if (!store.submitted) {
    return (
      <div className="mx-auto max-w-[840px] px-5 py-9">
        <h2 className="m-0 mb-1.5 text-[1.55rem] font-bold text-navy">
          เฉลยแบบละเอียด
        </h2>
        <div className="rounded-md border border-dashed border-line bg-panel px-5 py-12 text-center">
          <Lock className="mx-auto mb-2.5 size-8 text-ink-soft" />
          <p className="mb-3.5">
            กรุณาส่งคำตอบแบบทดสอบให้ครบก่อน จึงจะดูเฉลยได้
          </p>
          <Button onClick={() => store.setPage("quiz")}>ไปทำแบบทดสอบ</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[840px] px-5 py-9 pb-16">
      <h2 className="m-0 mb-1.5 text-[1.55rem] font-bold text-navy">
        เฉลยแบบละเอียด
      </h2>
      <p className="mb-7 text-ink-soft">
        เฉลยทั้ง {questions.length} ข้อ พร้อมวิธีทำทีละขั้นตอนและเหตุผลประกอบ
      </p>
      {questions.map((item, idx) => {
        const userAns = store.answers[idx];
        const correct = isAnswerCorrect(item, userAns);
        const noAnswer =
          userAns === undefined ||
          userAns === null ||
          String(userAns).trim() === "";
        return (
          <article
            key={idx}
            className="mb-4 rounded-md border border-line bg-panel px-[22px] py-5 shadow-[var(--shadow-card)]"
          >
            <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
              <h4 className="m-0 text-navy">ข้อที่ {idx + 1}</h4>
              <span
                className={
                  correct
                    ? "rounded-full bg-good-soft px-3 py-1 text-[0.85rem] font-bold text-good"
                    : "rounded-full bg-bad-soft px-3 py-1 text-[0.85rem] font-bold text-bad"
                }
              >
                {correct ? "ตอบถูก" : noAnswer ? "ไม่ได้ตอบ" : "ตอบผิด"}
              </span>
            </div>
            <p>
              <span className="text-[0.86rem] font-bold text-ink-soft">โจทย์:</span>{" "}
              {item.q}
            </p>
            {item.tri ? (
              <TriangleDiagram
                opp={item.tri[0] || ""}
                adj={item.tri[1] || ""}
                hyp={item.tri[2] || ""}
              />
            ) : null}
            {item.type === "written" ? (
              <>
                <p>
                  <span className="text-[0.86rem] font-bold text-ink-soft">
                    คำตอบที่ถูกต้อง:
                  </span>{" "}
                  {item.answer}
                </p>
                {!noAnswer && !correct ? (
                  <p>
                    <span className="text-[0.86rem] font-bold text-ink-soft">
                      คำตอบที่คุณพิมพ์:
                    </span>{" "}
                    {String(userAns)}
                  </p>
                ) : null}
              </>
            ) : (
              <>
                <p>
                  <span className="text-[0.86rem] font-bold text-ink-soft">
                    คำตอบที่ถูกต้อง:
                  </span>{" "}
                  {LETTERS[item.correct ?? 0]}.{" "}
                  {item.choices?.[item.correct ?? 0]}
                </p>
                {!noAnswer && userAns !== item.correct ? (
                  <p>
                    <span className="text-[0.86rem] font-bold text-ink-soft">
                      คำตอบที่คุณเลือก:
                    </span>{" "}
                    {LETTERS[Number(userAns)]}.{" "}
                    {item.choices?.[Number(userAns)]}
                  </p>
                ) : null}
              </>
            )}
            <p>
              <span className="text-[0.86rem] font-bold text-ink-soft">วิธีทำ:</span>
            </p>
            <ul className="list-disc ps-5">
              {item.steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <p>
              <span className="text-[0.86rem] font-bold text-ink-soft">เหตุผล:</span>{" "}
              {item.why}
            </p>
          </article>
        );
      })}
    </div>
  );
}
