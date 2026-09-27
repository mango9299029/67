import { useEffect, useState } from "react";
import { Cloud, CloudOff, Lock, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/input";
import { getPool, useTrigo } from "@/lib/store";
import { DEFAULT_QUESTIONS } from "@/lib/questions";
import { LEVEL_NAMES, type Question } from "@/lib/types";
import { hashStr } from "@/lib/hash";
import {
  clearCloudSubmissions,
  saveExamConfig,
  subscribeSubmissions,
} from "@/lib/firebase";
import { toast } from "sonner";

const ADMIN_SESSION_KEY = "trig_admin_session_v2";

function emptyQuestion(): Question {
  return {
    q: "",
    type: "mc",
    level: 1,
    choices: ["", "", "", ""],
    correct: 0,
    steps: [],
    why: "",
    answer: "",
    numeric: false,
    tri: ["", "", ""],
  };
}

export function AdminPage() {
  const store = useTrigo();
  const [pass, setPass] = useState("");
  const [loginError, setLoginError] = useState("");
  const [quizCount, setQuizCount] = useState(store.quizCount);
  const [timerMinutes, setTimerMinutes] = useState(store.timerMinutes);
  const [newPass1, setNewPass1] = useState("");
  const [newPass2, setNewPass2] = useState("");
  const [passError, setPassError] = useState("");
  const [formOpen, setFormOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [form, setForm] = useState<Question>(emptyQuestion());
  const [formError, setFormError] = useState("");
  const [levelCustom, setLevelCustom] = useState("");
  const [levelMode, setLevelMode] = useState("1");
  const [cloudStatus, setCloudStatus] = useState<"live" | "offline">("offline");

  useEffect(() => {
    try {
      if (sessionStorage.getItem(ADMIN_SESSION_KEY) === "1") store.setAdmin(true);
    } catch {
      /* ignore */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setQuizCount(store.quizCount);
    setTimerMinutes(store.timerMinutes);
  }, [store.quizCount, store.timerMinutes]);

  useEffect(() => {
    if (!store.isAdmin) return;
    return subscribeSubmissions((items, err) => {
      if (err) {
        setCloudStatus("offline");
        return;
      }
      setCloudStatus("live");
      store.setCloudSubs(items);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [store.isAdmin]);

  function verifyAdmin(actionLabel: string) {
    const entered = window.prompt("ยืนยันรหัสผ่านแอดมินเพื่อ" + actionLabel);
    if (entered === null) return false;
    if (hashStr(entered) !== store.passHash) {
      toast.error("รหัสผ่านแอดมินไม่ถูกต้อง");
      return false;
    }
    return true;
  }

  function login() {
    if (hashStr(pass) === store.passHash) {
      store.setAdmin(true);
      try {
        sessionStorage.setItem(ADMIN_SESSION_KEY, "1");
      } catch {
        /* ignore */
      }
      setPass("");
      setLoginError("");
    } else {
      setLoginError("รหัสผ่านไม่ถูกต้อง กรุณาลองใหม่");
    }
  }

  const pool = getPool(store);
  const history =
    cloudStatus === "live" && store.cloudSubs.length > 0
      ? store.cloudSubs
      : store.localHistory;

  async function persistExam(patch?: {
    quizCount?: number;
    timerMinutes?: number;
    questions?: Question[] | null;
    passHash?: string;
  }) {
    const next = {
      quizCount: patch?.quizCount ?? store.quizCount,
      timerMinutes: patch?.timerMinutes ?? store.timerMinutes,
      questions:
        patch && "questions" in patch
          ? (patch.questions ?? null)
          : store.customQuestions,
      passHash: patch?.passHash ?? store.passHash,
    };
    const res = await saveExamConfig(next);
    if (res.ok)
      toast.success("บันทึกขึ้นคลาวด์แล้ว นักเรียนทุกคนจะเห็นชุดข้อสอบนี้");
    else
      toast.error(res.error || "บันทึกคลาวด์ไม่สำเร็จ เก็บไว้ในเครื่องนี้ก่อน");
  }

  function openForm(idx: number | null) {
    setEditingIndex(idx);
    setFormError("");
    setFormOpen(true);
    if (idx === null) {
      setForm(emptyQuestion());
      setLevelMode("1");
      setLevelCustom("");
      return;
    }
    const item = pool[idx];
    setForm({
      ...item,
      type: item.type === "written" ? "written" : "mc",
      choices: item.choices ? [...item.choices] : ["", "", "", ""],
      tri: item.tri ? [...item.tri] : ["", "", ""],
    });
    if (item.levelLabel) {
      setLevelMode("custom");
      setLevelCustom(item.levelLabel);
    } else {
      setLevelMode(String(item.level || 1));
      setLevelCustom("");
    }
  }

  function saveQuestion() {
    const qText = form.q.trim();
    if (!qText) {
      setFormError("กรุณาพิมพ์โจทย์คำถาม");
      return;
    }
    const steps = (form.steps || [])
      .map((s) => s.trim())
      .filter(Boolean);
    if (steps.length === 0) {
      setFormError("กรุณาใส่วิธีทำอย่างน้อย 1 ขั้นตอน");
      return;
    }
    const newItem: Question = {
      q: qText,
      steps,
      why: (form.why || "").trim() || "—",
    };
    if (levelMode === "custom") {
      if (!levelCustom.trim()) {
        setFormError("กรุณาใส่ชื่อหมวดหมู่ที่กำหนดเอง");
        return;
      }
      newItem.levelLabel = levelCustom.trim();
      newItem.level = 0;
    } else {
      newItem.level = parseInt(levelMode, 10);
    }
    const opp = form.tri?.[0]?.trim() || "";
    const adj = form.tri?.[1]?.trim() || "";
    const hyp = form.tri?.[2]?.trim() || "";
    if (opp || adj || hyp) newItem.tri = [opp, adj, hyp];

    if (form.type === "written") {
      newItem.type = "written";
      const ans = (form.answer || "").trim();
      if (!ans) {
        setFormError("กรุณาใส่คำตอบที่ถูกต้อง");
        return;
      }
      newItem.answer = ans;
      newItem.numeric = !!form.numeric;
      if (newItem.numeric) {
        newItem.tolerance = form.tolerance ?? 0.05;
        if (Number.isNaN(parseFloat(ans))) {
          setFormError('คำตอบต้องเป็นตัวเลขเมื่อเลือก "เป็นคำตอบตัวเลข"');
          return;
        }
      }
    } else {
      newItem.type = "mc";
      const choices = (form.choices || []).map((c) => c.trim());
      if (choices.length < 4 || choices.some((c) => !c)) {
        setFormError("กรุณากรอกตัวเลือกให้ครบทั้ง 4 ข้อ");
        return;
      }
      if (new Set(choices).size < 4) {
        setFormError("ตัวเลือกทั้ง 4 ข้อต้องไม่ซ้ำกัน");
        return;
      }
      newItem.choices = choices;
      newItem.correct = form.correct ?? 0;
    }

    const next = [...(store.customQuestions ?? DEFAULT_QUESTIONS)];
    if (editingIndex !== null) next[editingIndex] = newItem;
    else next.push(newItem);
    let count = store.quizCount;
    if (editingIndex === null && count === DEFAULT_QUESTIONS.length)
      count = next.length;
    if (count > next.length) count = Math.max(1, next.length);
    store.setCustomQuestions(next);
    store.setExamSettings(count, store.timerMinutes);
    setFormOpen(false);
    setEditingIndex(null);
    toast.success(
      editingIndex !== null ? "บันทึกการแก้ไขโจทย์แล้ว" : "เพิ่มโจทย์ใหม่แล้ว",
    );
    void persistExam({ questions: next, quizCount: count });
  }

  if (!store.isAdmin) {
    return (
      <div className="mx-auto max-w-[840px] px-5 py-9 pb-16">
        <h2 className="m-0 mb-1.5 text-[1.55rem] font-bold text-navy">
          จัดการข้อสอบ (สำหรับแอดมิน)
        </h2>
        <p className="mb-6 text-ink-soft">
          แก้ไขโจทย์ จำนวนข้อ เวลาสอบ และดูผลคะแนนของนักเรียนที่ส่งเข้ามาจากทุกเครื่อง
        </p>
        <div className="mx-auto max-w-[380px] rounded-md border border-line bg-panel p-6 text-center shadow-[var(--shadow-card)]">
          <Lock className="mx-auto mb-2 size-8 text-ink-soft" />
          <p className="m-0">กรุณาใส่รหัสผ่านแอดมินเพื่อเข้าใช้งาน</p>
          <Input
            type="password"
            className="my-3"
            placeholder="รหัสผ่านแอดมิน"
            autoComplete="off"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") login();
            }}
          />
          <Button className="w-full" onClick={login}>
            เข้าสู่ระบบ
          </Button>
          <div className="mt-1 min-h-[1.2em] text-[0.88rem] text-bad">
            {loginError}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[840px] px-5 py-9 pb-16">
      <h2 className="m-0 mb-1.5 text-[1.55rem] font-bold text-navy">
        จัดการข้อสอบ (สำหรับแอดมิน)
      </h2>
      <p className="mb-6 text-ink-soft">
        แก้ไขโจทย์ จำนวนข้อ เวลาสอบ และดูประวัติผลคะแนนของนักเรียนได้จากหน้านี้
      </p>

      <div className="mb-5 flex flex-wrap items-center justify-between gap-2.5 rounded-sm bg-navy px-4 py-3 text-cream">
        <span className="flex flex-wrap items-center gap-2">
          เข้าสู่ระบบแอดมินแล้ว
          {cloudStatus === "live" ? (
            <span className="inline-flex items-center gap-1 text-sm text-gold">
              <Cloud className="size-4" /> คลาวด์เชื่อมต่อแล้ว
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-sm text-gold-soft">
              <CloudOff className="size-4" /> ยังไม่ถึงคลาวด์
            </span>
          )}
        </span>
        <Button
          variant="quiet"
          size="sm"
          onClick={() => {
            store.setAdmin(false);
            try {
              sessionStorage.removeItem(ADMIN_SESSION_KEY);
            } catch {
              /* ignore */
            }
            toast.success("ออกจากระบบแอดมินแล้ว");
          }}
        >
          ออกจากระบบ
        </Button>
      </div>

      <section className="mb-5 rounded-md border border-line bg-panel p-[22px] shadow-[var(--shadow-card)]">
        <h3 className="mt-0 mb-3.5 text-[1.1rem] text-navy">ตั้งค่าการสอบ</h3>
        <div className="mb-2 flex flex-wrap items-end gap-3">
          <div className="flex min-w-[140px] flex-1 flex-col gap-1.5">
            <Label>จำนวนข้อที่ใช้จริงในชุดข้อสอบ</Label>
            <Input
              type="number"
              min={1}
              value={quizCount}
              onChange={(e) => setQuizCount(parseInt(e.target.value, 10) || 1)}
            />
          </div>
          <div className="flex min-w-[140px] flex-1 flex-col gap-1.5">
            <Label>เวลาทำข้อสอบ (นาที, 0 = ไม่จำกัดเวลา)</Label>
            <Input
              type="number"
              min={0}
              value={timerMinutes}
              onChange={(e) =>
                setTimerMinutes(parseInt(e.target.value, 10) || 0)
              }
            />
          </div>
          <Button
            onClick={() => {
              const cnt = Math.min(Math.max(1, quizCount), pool.length);
              const mins = Math.max(0, timerMinutes);
              store.setExamSettings(cnt, mins);
              void persistExam({ quizCount: cnt, timerMinutes: mins });
            }}
          >
            บันทึกการตั้งค่า
          </Button>
        </div>
        <p className="m-0 text-[0.85rem] text-ink-soft">
          คลังโจทย์ปัจจุบันมีทั้งหมด <strong>{pool.length}</strong> ข้อ
        </p>
      </section>

      <section className="mb-5 rounded-md border border-line bg-panel p-[22px] shadow-[var(--shadow-card)]">
        <h3 className="mt-0 mb-3.5 text-[1.1rem] text-navy">
          เปลี่ยนรหัสผ่านแอดมิน
        </h3>
        <div className="flex flex-wrap items-end gap-3">
          <div className="flex min-w-[140px] flex-1 flex-col gap-1.5">
            <Label>รหัสผ่านใหม่</Label>
            <Input
              type="password"
              value={newPass1}
              onChange={(e) => setNewPass1(e.target.value)}
            />
          </div>
          <div className="flex min-w-[140px] flex-1 flex-col gap-1.5">
            <Label>ยืนยันรหัสผ่านใหม่</Label>
            <Input
              type="password"
              value={newPass2}
              onChange={(e) => setNewPass2(e.target.value)}
            />
          </div>
          <Button
            variant="outline"
            onClick={() => {
              if (!newPass1 || newPass1.length < 4) {
                setPassError("รหัสผ่านใหม่ต้องมีอย่างน้อย 4 ตัวอักษร");
                return;
              }
              if (newPass1 !== newPass2) {
                setPassError("รหัสผ่านใหม่ทั้งสองช่องไม่ตรงกัน");
                return;
              }
              const h = hashStr(newPass1);
              store.setPassHash(h);
              setNewPass1("");
              setNewPass2("");
              setPassError("");
              toast.success("เปลี่ยนรหัสผ่านแอดมินเรียบร้อยแล้ว");
              void persistExam({ passHash: h });
            }}
          >
            เปลี่ยนรหัสผ่าน
          </Button>
        </div>
        <div className="mt-1 min-h-[1.2em] text-[0.88rem] text-bad">
          {passError}
        </div>
      </section>

      <section className="mb-5 rounded-md border border-line bg-panel p-[22px] shadow-[var(--shadow-card)]">
        <h3 className="mt-0 mb-2 text-[1.1rem] text-navy">
          ประวัติผลสอบของนักเรียนที่ส่งเข้ามา
        </h3>
        <p className="mb-3 text-[0.88rem] text-ink-soft">
          ผลสอบชื่อ ชั้น เลขที่ และคะแนน จากทุกเครื่องที่ส่งเข้ามา (สูงสุด 50
          รายการล่าสุด)
        </p>
        {history.length === 0 ? (
          <div className="py-2 text-[0.9rem] text-ink-soft">
            ยังไม่มีประวัติผลสอบที่บันทึกไว้
          </div>
        ) : (
          history.map((item, idx) => {
            const d = new Date(item.submittedAt || Date.now());
            return (
              <div
                key={item.id || idx}
                className="mb-1.5 rounded-sm border border-line bg-bg-2 px-3 py-2.5"
              >
                <div className="font-bold text-ink">
                  {idx + 1}. {item.name} (ชั้น {item.studentClass} เลขที่{" "}
                  {item.studentNo}) — {item.score}/{item.total} ({item.percent}
                  %)
                </div>
                <div className="mt-0.5 text-[0.82rem] text-ink-soft">
                  วันที่ทำสอบ: {d.toLocaleString("th-TH")}
                  {cloudStatus === "live" ? " · คลาวด์" : " · เครื่องนี้"}
                </div>
              </div>
            );
          })
        )}
        <div className="mt-3.5">
          <Button
            variant="danger"
            onClick={async () => {
              if (!verifyAdmin("ลบข้อมูลผลสอบทั้งหมด")) return;
              if (!window.confirm("ลบข้อมูลผลสอบที่บันทึกไว้ทั้งหมดหรือไม่?"))
                return;
              store.clearLocalHistory();
              const res = await clearCloudSubmissions();
              if (res.ok) toast.success("ลบประวัติผลสอบทั้งหมดแล้ว");
              else toast.error(res.error || "ลบคลาวด์ไม่สำเร็จ");
            }}
          >
            <Trash2 className="size-4" />
            ลบข้อมูลผลสอบทั้งหมด
          </Button>
        </div>
      </section>

      <section className="mb-5 rounded-md border border-line bg-panel p-[22px] shadow-[var(--shadow-card)]">
        <h3 className="mt-0 mb-3.5 text-[1.1rem] text-navy">คลังโจทย์</h3>
        <div className="mb-3.5 flex flex-wrap gap-2.5">
          <Button onClick={() => openForm(null)}>เพิ่มโจทย์ใหม่</Button>
          <Button
            variant="outline"
            onClick={() => {
              if (!verifyAdmin("กู้คืนชุดข้อสอบเริ่มต้น")) return;
              store.setCustomQuestions(null);
              store.setExamSettings(
                DEFAULT_QUESTIONS.length,
                store.timerMinutes,
              );
              toast.success("กู้คืนชุดข้อสอบเริ่มต้น 30 ข้อแล้ว");
              void persistExam({
                questions: null,
                quizCount: DEFAULT_QUESTIONS.length,
              });
            }}
          >
            กู้คืนชุดข้อสอบเริ่มต้น (30 ข้อ)
          </Button>
        </div>
        {pool.map((item, idx) => (
          <div
            key={idx}
            className="mb-2 flex items-center justify-between gap-2.5 rounded-sm border border-line bg-bg-2 px-3.5 py-3"
          >
            <div className="min-w-0 flex-1">
              <div className="truncate font-semibold text-ink">
                {idx + 1}. {item.q}
              </div>
              <div className="text-[0.82rem] text-ink-soft">
                {item.type === "written" ? "อัตนัย" : "ปรนัย"} ·{" "}
                {item.levelLabel || LEVEL_NAMES[item.level ?? 0] || "อื่น ๆ"}
              </div>
            </div>
            <div className="flex shrink-0 gap-1.5">
              <Button variant="outline" size="sm" onClick={() => openForm(idx)}>
                แก้ไข
              </Button>
              <Button
                variant="danger"
                size="sm"
                onClick={() => {
                  if (!window.confirm("ต้องการลบโจทย์ข้อนี้หรือไม่?")) return;
                  if (!verifyAdmin("ลบโจทย์ข้อนี้")) return;
                  const next = [...(store.customQuestions ?? DEFAULT_QUESTIONS)];
                  next.splice(idx, 1);
                  const count = Math.min(
                    store.quizCount,
                    Math.max(1, next.length),
                  );
                  store.setCustomQuestions(next);
                  store.setExamSettings(count, store.timerMinutes);
                  toast.success("ลบโจทย์แล้ว");
                  void persistExam({ questions: next, quizCount: count });
                }}
              >
                ลบ
              </Button>
            </div>
          </div>
        ))}
      </section>

      {formOpen ? (
        <section className="mb-5 rounded-md border border-line bg-panel p-[22px] shadow-[var(--shadow-card)]">
          <h3 className="mt-0 mb-3.5 text-[1.1rem] text-navy">
            {editingIndex !== null
              ? `แก้ไขโจทย์ข้อที่ ${editingIndex + 1}`
              : "เพิ่มโจทย์ใหม่"}
          </h3>
          <div className="mb-2 flex flex-wrap gap-3">
            <div className="flex max-w-[180px] flex-1 flex-col gap-1.5">
              <Label>ประเภทข้อสอบ</Label>
              <select
                className="h-11 rounded-sm border border-line bg-bg-2 px-3 text-ink"
                value={form.type === "written" ? "written" : "mc"}
                onChange={(e) =>
                  setForm({
                    ...form,
                    type: e.target.value === "written" ? "written" : "mc",
                  })
                }
              >
                <option value="mc">ปรนัย (เลือกตอบ 4 ตัวเลือก)</option>
                <option value="written">อัตนัย (พิมพ์คำตอบ)</option>
              </select>
            </div>
            <div className="flex max-w-[220px] flex-1 flex-col gap-1.5">
              <Label>หมวดหมู่ / ระดับ</Label>
              <select
                className="h-11 rounded-sm border border-line bg-bg-2 px-3 text-ink"
                value={levelMode}
                onChange={(e) => setLevelMode(e.target.value)}
              >
                <option value="1">พื้นฐานตรีโกณมิติ</option>
                <option value="2">sin cos tan</option>
                <option value="3">หาความยาวด้าน</option>
                <option value="4">หามุม</option>
                <option value="5">พีทาโกรัส + ตรีโกณมิติ</option>
                <option value="6">โจทย์ประยุกต์</option>
                <option value="custom">กำหนดเอง...</option>
              </select>
            </div>
            {levelMode === "custom" ? (
              <div className="flex min-w-[140px] flex-1 flex-col gap-1.5">
                <Label>ชื่อหมวดหมู่ที่กำหนดเอง</Label>
                <Input
                  value={levelCustom}
                  onChange={(e) => setLevelCustom(e.target.value)}
                />
              </div>
            ) : null}
          </div>
          <div className="mb-2.5">
            <Label>โจทย์คำถาม</Label>
            <Textarea
              className="mt-1.5"
              value={form.q}
              onChange={(e) => setForm({ ...form, q: e.target.value })}
            />
          </div>
          <div className="mb-2 flex flex-wrap gap-3">
            <div className="flex min-w-[140px] flex-1 flex-col gap-1.5">
              <Label>ป้ายกำกับด้านตรงข้าม</Label>
              <Input
                placeholder="เช่น ตรงข้าม = 3"
                value={form.tri?.[0] || ""}
                onChange={(e) =>
                  setForm({
                    ...form,
                    tri: [e.target.value, form.tri?.[1] || "", form.tri?.[2] || ""],
                  })
                }
              />
            </div>
            <div className="flex min-w-[140px] flex-1 flex-col gap-1.5">
              <Label>ป้ายกำกับด้านประชิด</Label>
              <Input
                placeholder="เช่น ประชิด = 4"
                value={form.tri?.[1] || ""}
                onChange={(e) =>
                  setForm({
                    ...form,
                    tri: [form.tri?.[0] || "", e.target.value, form.tri?.[2] || ""],
                  })
                }
              />
            </div>
            <div className="flex min-w-[140px] flex-1 flex-col gap-1.5">
              <Label>ป้ายกำกับด้านตรงข้ามมุมฉาก</Label>
              <Input
                placeholder="เช่น ตรงข้ามมุมฉาก = 5"
                value={form.tri?.[2] || ""}
                onChange={(e) =>
                  setForm({
                    ...form,
                    tri: [form.tri?.[0] || "", form.tri?.[1] || "", e.target.value],
                  })
                }
              />
            </div>
          </div>

          {form.type === "written" ? (
            <div className="mb-2 flex flex-wrap gap-3">
              <div className="flex min-w-[140px] flex-1 flex-col gap-1.5">
                <Label>คำตอบที่ถูกต้อง</Label>
                <Input
                  value={form.answer || ""}
                  onChange={(e) => setForm({ ...form, answer: e.target.value })}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label>เป็นคำตอบตัวเลข?</Label>
                <select
                  className="h-11 rounded-sm border border-line bg-bg-2 px-3 text-ink"
                  value={form.numeric ? "1" : "0"}
                  onChange={(e) =>
                    setForm({ ...form, numeric: e.target.value === "1" })
                  }
                >
                  <option value="0">ไม่ใช่ (เทียบข้อความ)</option>
                  <option value="1">ใช่ (เทียบตัวเลข)</option>
                </select>
              </div>
            </div>
          ) : (
            <div className="mb-2">
              <Label>ตัวเลือกคำตอบ (เลือกวงกลมหน้าข้อที่ถูก)</Label>
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="mb-1.5 flex items-center gap-2">
                  <input
                    type="radio"
                    name="qfCorrect"
                    className="size-[18px] accent-teal"
                    checked={(form.correct ?? 0) === i}
                    onChange={() => setForm({ ...form, correct: i })}
                  />
                  <Input
                    placeholder={`ตัวเลือก ${["ก", "ข", "ค", "ง"][i]}`}
                    value={form.choices?.[i] || ""}
                    onChange={(e) => {
                      const choices = [...(form.choices || ["", "", "", ""])];
                      choices[i] = e.target.value;
                      setForm({ ...form, choices });
                    }}
                  />
                </div>
              ))}
            </div>
          )}

          <div className="mb-2.5">
            <Label>วิธีทำ (พิมพ์ทีละขั้นตอน 1 บรรทัดต่อ 1 ขั้น)</Label>
            <Textarea
              className="mt-1.5 min-h-[100px]"
              value={(form.steps || []).join("\n")}
              onChange={(e) =>
                setForm({ ...form, steps: e.target.value.split("\n") })
              }
            />
          </div>
          <div className="mb-2">
            <Label>เหตุผลที่เลือกใช้สูตรนี้</Label>
            <Textarea
              className="mt-1.5"
              value={form.why}
              onChange={(e) => setForm({ ...form, why: e.target.value })}
            />
          </div>
          <div className="min-h-[1.2em] text-[0.88rem] text-bad">{formError}</div>
          <div className="mt-3.5 flex flex-wrap gap-2.5">
            <Button onClick={saveQuestion}>บันทึกโจทย์นี้</Button>
            <Button
              variant="quiet"
              onClick={() => {
                setFormOpen(false);
                setEditingIndex(null);
              }}
            >
              ยกเลิก
            </Button>
          </div>
        </section>
      ) : null}
    </div>
  );
}
