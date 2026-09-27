import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/input";
import { useTrigo } from "@/lib/store";
import { hashStr } from "@/lib/hash";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { toast } from "sonner";

export function CoverPage() {
  const name = useTrigo((s) => s.name);
  const studentClass = useTrigo((s) => s.studentClass);
  const studentNo = useTrigo((s) => s.studentNo);
  const setProfile = useTrigo((s) => s.setProfile);
  const setPage = useTrigo((s) => s.setPage);
  const passHash = useTrigo((s) => s.passHash);
  const clearStudent = useTrigo((s) => s.clearStudent);
  const [confirmOpen, setConfirmOpen] = useState(false);

  function requestClear() {
    const entered = window.prompt("ยืนยันรหัสผ่านแอดมินเพื่อล้างข้อมูลผู้ใช้");
    if (entered === null) return;
    if (hashStr(entered) !== passHash) {
      toast.error("รหัสผ่านแอดมินไม่ถูกต้อง");
      return;
    }
    setConfirmOpen(true);
  }

  return (
    <section>
      <div className="relative overflow-hidden bg-navy px-5 pt-16 pb-14 text-cream">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 85% 10%, rgba(192,138,46,0.14), transparent 45%)",
          }}
        />
        <svg
          className="absolute right-[-40px] bottom-[-30px] w-[280px] opacity-20"
          viewBox="0 0 200 200"
          aria-hidden="true"
        >
          <polygon points="10,190 190,190 190,20" fill="#F3E3C2" />
        </svg>
        <div className="relative mx-auto max-w-[840px]">
          <p className="mb-2.5 text-[0.95rem] font-semibold text-gold">
            คณิตศาสตร์ ระดับชั้นมัธยมศึกษาปีที่ 3
          </p>
          <h1 className="m-0 text-[clamp(2rem,5vw,3.1rem)] leading-[1.25] font-bold">
            สื่อการเรียนรู้คณิตศาสตร์ ม.3
            <span className="mt-1 block text-[0.68em] text-gold">
              เรื่อง ตรีโกณมิติ
            </span>
          </h1>
          <p className="mt-4 mb-7 max-w-[520px] text-[1.08rem] text-[#dcd2bb]">
            เรียนจากพื้นฐาน 0 → ทำโจทย์ตรีโกณมิติได้ อธิบายทีละขั้นตอน
            พร้อมแบบทดสอบและเฉลยละเอียด เหมาะสำหรับผู้เริ่มต้นที่ไม่เคยเรียนเรื่องนี้มาก่อน
          </p>

          <div className="max-w-[420px] rounded-md border border-[rgba(247,242,228,0.18)] bg-[rgba(23,19,16,0.28)] p-[22px] backdrop-blur-[2px]">
            <Label htmlFor="studentName" className="text-[#eae1cb]">
              ชื่อ-นามสกุล
            </Label>
            <Input
              id="studentName"
              className="mt-1.5 border-white/30 bg-white text-[#241d12]"
              placeholder="พิมพ์ชื่อ-นามสกุลของคุณ"
              value={name}
              onChange={(e) => setProfile({ name: e.target.value })}
            />
            <div className="mt-2.5 flex gap-2.5">
              <div className="flex-1">
                <Label htmlFor="studentClass" className="text-[#eae1cb]">
                  ชั้น
                </Label>
                <Input
                  id="studentClass"
                  className="mt-1.5 border-white/30 bg-white text-[#241d12]"
                  placeholder="เช่น ม.3/1"
                  value={studentClass}
                  onChange={(e) => setProfile({ studentClass: e.target.value })}
                />
              </div>
              <div className="flex-1">
                <Label htmlFor="studentNo" className="text-[#eae1cb]">
                  เลขที่
                </Label>
                <Input
                  id="studentNo"
                  type="number"
                  className="mt-1.5 border-white/30 bg-white text-[#241d12]"
                  placeholder="เช่น 15"
                  value={studentNo}
                  onChange={(e) => setProfile({ studentNo: e.target.value })}
                />
              </div>
            </div>
            <Button
              className="mt-4 w-full"
              onClick={() => setPage("lesson")}
            >
              เริ่มเรียนรู้ / ทำแบบทดสอบ
            </Button>
          </div>

          <div className="mt-7 flex flex-wrap gap-x-[22px] gap-y-2.5">
            {[
              "แบบทดสอบ 30 ข้อ",
              "มีเฉลยละเอียดท้ายบท",
              "ส่งผลคะแนนถึงแอดมินอัตโนมัติ",
            ].map((t) => (
              <span
                key={t}
                className="flex items-center gap-2 text-[0.92rem] text-[#ede4d0]"
              >
                <Check className="size-4 text-gold" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[840px] px-5 py-8 text-center">
        <Button variant="danger" onClick={requestClear}>
          ล้างข้อมูลผู้ใช้ปัจจุบัน
        </Button>
      </div>

      <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <DialogContent>
          <DialogTitle>ยืนยันการล้างข้อมูล</DialogTitle>
          <DialogDescription>
            ต้องการล้างข้อมูลชื่อ ชั้น เลขที่ และคำตอบปัจจุบันหรือไม่?
          </DialogDescription>
          <div className="flex justify-end gap-2.5">
            <Button variant="outline" onClick={() => setConfirmOpen(false)}>
              ยกเลิก
            </Button>
            <Button
              onClick={() => {
                clearStudent();
                setConfirmOpen(false);
                toast.success("ล้างข้อมูลนักเรียนเรียบร้อยแล้ว");
              }}
            >
              ยืนยัน
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
