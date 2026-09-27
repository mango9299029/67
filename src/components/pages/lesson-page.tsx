import type { ReactNode } from "react";
import { TriangleDiagram } from "@/components/triangle-diagram";
import { Button } from "@/components/ui/button";
import { CHECKLIST } from "@/lib/types";
import { useTrigo } from "@/lib/store";
import { cn } from "@/lib/utils";

function Topic({
  num,
  title,
  children,
}: {
  num: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="mb-[22px] rounded-md border border-line bg-panel p-6 shadow-[var(--shadow-card)]">
      <div className="mb-3 flex items-center gap-3.5">
        <div className="flex size-[38px] shrink-0 items-center justify-center rounded-full bg-gold-soft font-bold text-gold dark:text-navy-2 dark:bg-gold">
          {num}
        </div>
        <h3 className="m-0 text-[1.22rem] text-ink">{title}</h3>
      </div>
      {children}
    </article>
  );
}

function Example({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="my-3.5 rounded-sm border-l-4 border-teal bg-teal-soft px-4 py-3.5">
      <div className="mb-1.5 text-[0.88rem] font-bold text-teal">{label}</div>
      {children}
    </div>
  );
}

export function LessonPage() {
  const checklist = useTrigo((s) => s.checklist);
  const toggleChecklist = useTrigo((s) => s.toggleChecklist);
  const setPage = useTrigo((s) => s.setPage);

  return (
    <div className="mx-auto max-w-[840px] px-5">
      <section className="pt-11 pb-2">
        <h2 className="m-0 mb-1.5 text-[1.55rem] font-bold text-navy">
          บทเรียนตรีโกณมิติ
        </h2>
        <p className="mb-7 max-w-[640px] text-ink-soft">
          อ่านเรียงตามลำดับหัวข้อที่ 1 ถึง 8 ทุกหัวข้อจะอธิบายตั้งแต่ความหมาย สูตร
          ตัวแปร ไปจนถึงตัวอย่างทีละขั้นตอน
        </p>
      </section>

      <Topic num={1} title="ตรีโกณมิติคืออะไร">
        <p className="mb-3.5">
          ตรีโกณมิติ (Trigonometry) คือเรื่องที่ศึกษาความสัมพันธ์ระหว่าง{" "}
          <strong>มุม</strong> กับ <strong>ความยาวของด้าน</strong> ในรูปสามเหลี่ยมมุมฉาก
          พูดง่าย ๆ คือ ถ้าเรารู้มุมและด้านบางส่วนของสามเหลี่ยมมุมฉาก
          เราสามารถคำนวณหาด้านหรือมุมที่เหลือได้ โดยไม่ต้องไปวัดจริง
        </p>
        <Example label="ตัวอย่างสถานการณ์จริง">
          <p className="m-0">
            อยากรู้ความสูงของเสาไฟฟ้าโดยไม่ต้องปีนขึ้นไปวัด เราสามารถยืนห่างจากเสาระยะหนึ่ง
            แล้ววัดมุมเงยที่มองไปยังยอดเสา จากนั้นใช้ตรีโกณมิติคำนวณความสูงของเสาได้ทันที
            เช่นเดียวกับการหาความยาวบันไดที่พาดกำแพง หรือระยะทางที่มองเห็นจากที่สูง
          </p>
        </Example>
      </Topic>

      <Topic num={2} title="ส่วนประกอบของสามเหลี่ยมมุมฉาก">
        <p className="mb-3.5">
          สามเหลี่ยมมุมฉากมีมุมหนึ่งเท่ากับ 90° เสมอ เรียกว่า <strong>มุมฉาก</strong>{" "}
          เมื่อเราเลือก "มุมที่สนใจ" (แทนด้วย θ อ่านว่า ทีตา) ที่ไม่ใช่มุมฉาก
          ด้านทั้งสามของสามเหลี่ยมจะมีชื่อเรียกตามตำแหน่งที่สัมพันธ์กับมุมนั้น:
        </p>
        <TriangleDiagram />
        <ul className="mb-3.5 list-disc ps-5">
          <li className="mb-1.5">
            <strong>ด้านตรงข้ามมุมฉาก (Hypotenuse)</strong> — ด้านที่ยาวที่สุด
            อยู่ตรงข้ามมุมฉากพอดี และไม่เปลี่ยนชื่อไม่ว่าจะสนใจมุมไหน
          </li>
          <li className="mb-1.5">
            <strong>ด้านตรงข้าม (Opposite)</strong> — ด้านที่อยู่ตรงข้ามกับมุม θ
            ที่เราสนใจพอดี
          </li>
          <li className="mb-1.5">
            <strong>ด้านประชิด (Adjacent)</strong> — ด้านที่อยู่ติดกับมุม θ
            แต่ไม่ใช่ด้านตรงข้ามมุมฉาก
          </li>
        </ul>
        <p className="text-[0.92rem] text-ink-soft">
          ข้อสังเกต: ถ้าเปลี่ยนไปสนใจมุมอีกมุมหนึ่ง ด้าน "ตรงข้าม" กับ
          "ประชิด" จะสลับกัน แต่ด้านตรงข้ามมุมฉากยังคงเดิมเสมอ
        </p>
      </Topic>

      <Topic num={3} title="sin cos tan คืออะไร">
        <p className="mb-3.5">
          sin, cos, tan คือ <strong>อัตราส่วน</strong>{" "}
          ระหว่างความยาวของด้านสองด้านในสามเหลี่ยมมุมฉาก โดยเทียบกับมุม θ ที่เราสนใจ:
        </p>
        <div className="formula-box">
          sin θ = ด้านตรงข้าม ÷ ด้านตรงข้ามมุมฉาก
          <span className="sub">sin θ = Opposite / Hypotenuse</span>
        </div>
        <div className="formula-box">
          cos θ = ด้านประชิด ÷ ด้านตรงข้ามมุมฉาก
          <span className="sub">cos θ = Adjacent / Hypotenuse</span>
        </div>
        <div className="formula-box">
          tan θ = ด้านตรงข้าม ÷ ด้านประชิด
          <span className="sub">tan θ = Opposite / Adjacent</span>
        </div>
        <table className="my-3.5 w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-line bg-bg-2 px-3 py-2.5 text-center">
                อัตราส่วน
              </th>
              <th className="border border-line bg-bg-2 px-3 py-2.5 text-center">
                สูตรแบบจำง่าย
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-line px-3 py-2.5 text-center">sin</td>
              <td className="border border-line px-3 py-2.5 text-center">ข้าม / ฉาก</td>
            </tr>
            <tr>
              <td className="border border-line px-3 py-2.5 text-center">cos</td>
              <td className="border border-line px-3 py-2.5 text-center">ชิด / ฉาก</td>
            </tr>
            <tr>
              <td className="border border-line px-3 py-2.5 text-center">tan</td>
              <td className="border border-line px-3 py-2.5 text-center">ข้าม / ชิด</td>
            </tr>
          </tbody>
        </table>
        <div className="my-4 flex flex-wrap gap-2.5">
          {["SOH", "CAH", "TOA"].map((c) => (
            <span
              key={c}
              className="rounded-full bg-gold-soft px-4 py-2 font-bold text-[#5a3e0e] dark:text-gold"
            >
              {c}
            </span>
          ))}
        </div>
        <p className="text-[0.92rem] text-ink-soft">
          SOH = Sin=Opposite/Hypotenuse, CAH = Cos=Adjacent/Hypotenuse, TOA =
          Tan=Opposite/Adjacent — ท่องแค่ 3 คำนี้ก็จำสูตรได้ครบ
        </p>
        <Example label="ตัวอย่างทีละขั้น">
          <p className="mb-2">
            สามเหลี่ยมมุมฉากมีด้านตรงข้ามมุม θ ยาว 3 ซม. ด้านตรงข้ามมุมฉากยาว 5 ซม.
            หา sin θ
          </p>
          <div className="eqline">sin θ = ด้านตรงข้าม / ด้านตรงข้ามมุมฉาก</div>
          <div className="eqline">sin θ = 3 / 5</div>
          <div className="eqline">sin θ = 0.6</div>
        </Example>
      </Topic>

      <Topic num={4} title="การเลือกใช้ sin cos tan">
        <p className="mb-3.5">
          เคล็ดลับ: ดูว่าโจทย์ "รู้" ด้านคู่ไหน แล้วเลือกสูตรที่มีด้านคู่นั้นพอดี
        </p>
        <table className="my-3.5 w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-line bg-bg-2 px-3 py-2.5">สิ่งที่โจทย์ให้มา</th>
              <th className="border border-line bg-bg-2 px-3 py-2.5">สูตรที่ควรใช้</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-line px-3 py-2.5 text-center">ข้าม + ฉาก</td>
              <td className="border border-line px-3 py-2.5 text-center">sin</td>
            </tr>
            <tr>
              <td className="border border-line px-3 py-2.5 text-center">ชิด + ฉาก</td>
              <td className="border border-line px-3 py-2.5 text-center">cos</td>
            </tr>
            <tr>
              <td className="border border-line px-3 py-2.5 text-center">ข้าม + ชิด</td>
              <td className="border border-line px-3 py-2.5 text-center">tan</td>
            </tr>
          </tbody>
        </table>
        <Example label="ตัวอย่างที่ 1">
          <p className="m-0">
            โจทย์ให้ด้านตรงข้ามมุมฉากและด้านประชิด → ใช้ <strong>cos</strong> เพราะ
            cos = ชิด/ฉาก
          </p>
        </Example>
        <Example label="ตัวอย่างที่ 2">
          <p className="m-0">
            โจทย์ให้ด้านตรงข้ามและด้านประชิด → ใช้ <strong>tan</strong> เพราะ tan =
            ข้าม/ชิด
          </p>
        </Example>
      </Topic>

      <Topic num={5} title="การหาความยาวด้าน">
        <p className="mb-3.5">
          เมื่อรู้มุม θ และด้านหนึ่งด้าน สามารถหาด้านที่เหลือได้ด้วยการแทนค่าในสูตร
          sin cos tan แล้วจัดสมการหาด้านที่ยังไม่รู้
        </p>
        <Example label="ตัวอย่างทีละขั้น">
          <p className="mb-2">
            มุม θ = 30° ด้านตรงข้ามมุมฉากยาว 10 ม. หาความยาวด้านตรงข้าม (opposite)
          </p>
          <div className="eqline">
            <strong>ขั้นที่ 1:</strong> เลือกสูตร — โจทย์ให้ "ข้าม" (ที่ต้องการหา)
            และ "ฉาก" → ใช้ sin
          </div>
          <div className="eqline">
            <strong>ขั้นที่ 2:</strong> sin θ = ด้านตรงข้าม / ด้านตรงข้ามมุมฉาก
          </div>
          <div className="eqline">
            <strong>ขั้นที่ 3:</strong> sin 30° = ด้านตรงข้าม / 10
          </div>
          <div className="eqline">
            <strong>ขั้นที่ 4:</strong> 0.5 = ด้านตรงข้าม / 10
          </div>
          <div className="eqline">
            <strong>ขั้นที่ 5:</strong> ด้านตรงข้าม = 0.5 × 10 = <strong>5 เมตร</strong>
          </div>
        </Example>
      </Topic>

      <Topic num={6} title="การหามุม (Inverse Trigonometric Function)">
        <p className="mb-3.5">
          ถ้ารู้ด้านสองด้าน แต่ไม่รู้ขนาดของมุม θ เราจะใช้{" "}
          <strong>ฟังก์ชันผกผัน</strong> ของ sin cos tan ซึ่งเขียนแทนด้วย sin⁻¹, cos⁻¹,
          tan⁻¹ (อ่านว่า อาร์กไซน์ อาร์กคอส อาร์กแทน) เพื่อ "ย้อนกลับ"
          จากอัตราส่วนไปเป็นมุม
        </p>
        <Example label="ตัวอย่างทีละขั้น">
          <p className="mb-2">โจทย์: tan θ = 3/4 หา θ</p>
          <div className="eqline">tan θ = 3/4</div>
          <div className="eqline">θ = tan⁻¹(3/4)</div>
          <div className="eqline">θ ≈ 36.87°</div>
        </Example>
      </Topic>

      <Topic num={7} title="ทฤษฎีบทพีทาโกรัสที่เกี่ยวข้อง">
        <p className="mb-3.5">
          ทฤษฎีบทพีทาโกรัสใช้หาด้านของสามเหลี่ยมมุมฉากได้โดยไม่ต้องใช้มุมเลย หากรู้ด้านสองด้าน:
        </p>
        <div className="formula-box">
          a² + b² = c²
          <span className="sub">a, b = ด้านประกอบมุมฉาก, c = ด้านตรงข้ามมุมฉาก</span>
        </div>
        <Example label="ตัวอย่างทีละขั้น">
          <p className="mb-2">ด้านประกอบมุมฉากยาว 6 ซม. และ 8 ซม. หาด้านตรงข้ามมุมฉาก</p>
          <div className="eqline">c² = a² + b²</div>
          <div className="eqline">c² = 6² + 8² = 36 + 64 = 100</div>
          <div className="eqline">
            c = √100 = <strong>10 ซม.</strong>
          </div>
        </Example>
      </Topic>

      <Topic num={8} title="โจทย์ประยุกต์">
        <p className="mb-3.5">
          โจทย์ประยุกต์มักอยู่ในรูปสถานการณ์จริง เช่น เสา ต้นไม้ บันได อาคาร เงา มุมเงย
          มุมก้ม ขั้นตอนสำคัญที่สุดคือ{" "}
          <strong>วาดรูปสามเหลี่ยมจากโจทย์ก่อนคำนวณเสมอ</strong>
        </p>
        <details className="mt-2.5 rounded-sm border border-line bg-bg-2">
          <summary className="flex cursor-pointer list-none items-center justify-between px-3.5 py-3 font-semibold [&::-webkit-details-marker]:hidden">
            มุมเงย (Angle of Elevation) คืออะไร
            <span className="text-xl text-teal">+</span>
          </summary>
          <div className="px-3.5 pb-3.5">
            <p>
              มุมที่เงยหน้ามองจากแนวระดับสายตาขึ้นไปยังวัตถุที่อยู่สูงกว่า เช่น
              มองจากพื้นขึ้นไปยอดตึก
            </p>
          </div>
        </details>
        <details className="mt-2.5 rounded-sm border border-line bg-bg-2">
          <summary className="flex cursor-pointer list-none items-center justify-between px-3.5 py-3 font-semibold [&::-webkit-details-marker]:hidden">
            มุมก้ม (Angle of Depression) คืออะไร
            <span className="text-xl text-teal">+</span>
          </summary>
          <div className="px-3.5 pb-3.5">
            <p>
              มุมที่ก้มหน้ามองจากแนวระดับสายตาลงไปยังวัตถุที่อยู่ต่ำกว่า เช่น
              มองจากดาดฟ้าตึกลงมายังพื้น
            </p>
          </div>
        </details>
      </Topic>

      <section className="py-6">
        <div className="mx-auto max-w-[560px] rounded-md border-2 border-dashed border-gold bg-panel p-6">
          <h3 className="m-0 mb-1 text-navy">สูตรลัดก่อนทำข้อสอบ</h3>
          <p className="mb-4 text-[0.92rem] text-ink-soft">
            ติ๊กเมื่อทำตามขั้นตอนแต่ละข้อระหว่างทำโจทย์จริง
          </p>
          {CHECKLIST.map((txt, i) => (
            <div
              key={txt}
              className={cn(
                "flex items-start gap-2.5 border-b border-line py-2.5 last:border-b-0",
                checklist[i] && "text-ink-soft line-through",
              )}
            >
              <input
                id={`chk-${i}`}
                type="checkbox"
                className="mt-1 size-[19px] accent-teal"
                checked={!!checklist[i]}
                onChange={(e) => toggleChecklist(i, e.target.checked)}
              />
              <label htmlFor={`chk-${i}`} className="cursor-pointer">
                {txt}
              </label>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-bg-2 py-11">
        <div className="mx-auto max-w-[640px] rounded-md bg-navy px-6 py-7 text-cream">
          <h3 className="mt-0 mb-3.5 text-gold">สรุปตรีโกณมิติ ม.3 ใน 1 หน้า</h3>
          <h4 className="mb-2 text-cream">สูตรหลัก</h4>
          <div className="eqline bg-white/10 text-cream">
            sin θ = ด้านตรงข้าม / ด้านตรงข้ามมุมฉาก
          </div>
          <div className="eqline bg-white/10 text-cream">
            cos θ = ด้านประชิด / ด้านตรงข้ามมุมฉาก
          </div>
          <div className="eqline bg-white/10 text-cream">
            tan θ = ด้านตรงข้าม / ด้านประชิด
          </div>
          <h4 className="mt-5 mb-2 text-cream">พีทาโกรัส</h4>
          <div className="eqline bg-white/10 text-cream">a² + b² = c²</div>
          <h4 className="mt-5 mb-2 text-cream">การหามุม</h4>
          <div className="eqline bg-white/10 text-cream">θ = sin⁻¹( ข้าม / ฉาก )</div>
          <div className="eqline bg-white/10 text-cream">θ = cos⁻¹( ชิด / ฉาก )</div>
          <div className="eqline bg-white/10 text-cream">θ = tan⁻¹( ข้าม / ชิด )</div>
        </div>
      </section>

      <section className="py-10 text-center">
        <Button size="lg" onClick={() => setPage("quiz")}>
          ไปทำแบบทดสอบ 30 ข้อ
        </Button>
      </section>
    </div>
  );
}
