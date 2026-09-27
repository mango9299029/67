import { Cloud, CloudOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTrigo } from "@/lib/store";
import { toast } from "sonner";

function gradeLabel(pct: number) {
  if (pct >= 90) return { text: "ยอดเยี่ยม", cls: "bg-good-soft text-good" };
  if (pct >= 75) return { text: "ดีมาก", cls: "bg-teal-soft text-teal" };
  if (pct >= 60)
    return { text: "ผ่านเกณฑ์", cls: "bg-gold-soft text-[#8a5e10] dark:text-gold" };
  return { text: "ควรทบทวนพื้นฐานเพิ่มเติม", cls: "bg-bad-soft text-bad" };
}

export function ResultsPage() {
  const store = useTrigo();

  if (!store.submitted) {
    return (
      <div className="mx-auto max-w-[840px] px-5 py-9">
        <h2 className="m-0 mb-1.5 text-[1.55rem] font-bold text-navy">ผลคะแนน</h2>
        <p className="mb-6 text-ink-soft">
          คุณยังไม่ได้ส่งคำตอบแบบทดสอบ กรุณาทำแบบทดสอบและกด "ส่งคำตอบ" ก่อน
        </p>
        <Button onClick={() => store.setPage("quiz")}>ไปทำแบบทดสอบ</Button>
      </div>
    );
  }

  const total = store.totalAtSubmission || 30;
  const score = store.score ?? 0;
  const pct = Math.round((score / total) * 100);
  const g = gradeLabel(pct);
  let nameText = store.name ? `ผู้ทำ: ${store.name}` : "ผู้ทำ: ไม่ระบุชื่อ";
  if (store.studentClass) nameText += ` | ชั้น: ${store.studentClass}`;
  if (store.studentNo) nameText += ` | เลขที่: ${store.studentNo}`;

  return (
    <div className="mx-auto max-w-[840px] px-5 py-9 pb-16">
      <h2 className="m-0 mb-1.5 text-[1.55rem] font-bold text-navy">ผลคะแนน</h2>
      <div className="py-7 text-center">
        <p className="m-0 mb-1.5 text-ink-soft">{nameText}</p>
        <div className="result-ring" style={{ ["--pct" as string]: pct }}>
          <span className="relative z-10 text-3xl font-bold text-navy">{score}</span>
          <span className="relative z-10 text-sm text-ink-soft">/ {total}</span>
        </div>
        <div
          className={`mt-2 inline-block rounded-full px-5 py-2 text-[1.05rem] font-bold ${g.cls}`}
        >
          {g.text} ({score}/{total} — {pct}%)
        </div>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-ink-soft">
          {store.cloudSent ? (
            <>
              <Cloud className="size-4 text-teal" />
              ส่งผลสอบถึงแอดมินบนคลาวด์แล้ว
            </>
          ) : (
            <>
              <CloudOff className="size-4 text-bad" />
              บันทึกบนเครื่องนี้แล้ว
              {store.cloudError ? ` (${store.cloudError})` : " แต่ยังไม่ถึงแอดมิน"}
            </>
          )}
        </div>
      </div>

      <div className="mt-7 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3">
        {Object.values(store.breakdown || {}).map((d) => (
          <div
            key={d.label}
            className="rounded-sm border border-line bg-panel p-3.5 text-center"
          >
            <div className="text-[1.3rem] font-bold text-navy">
              {d.correct}/{d.total}
            </div>
            <div className="mt-0.5 text-[0.82rem] text-ink-soft">{d.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Button onClick={() => store.setPage("answers")}>
          ดูเฉลยละเอียดท้ายบท
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            store.restartQuiz();
            toast.success("เริ่มทำแบบทดสอบใหม่แล้ว");
          }}
        >
          เริ่มใหม่
        </Button>
      </div>
    </div>
  );
}
