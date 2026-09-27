import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import {
  getDatabase,
  ref,
  push,
  onValue,
  set,
  remove,
  type Database,
} from "firebase/database";
import type { ExamConfig, Submission } from "./types";

const firebaseConfig = {
  apiKey: "AIzaSyCa_JJkOJRXa8HwlWPNNi8V2Dv1vj2gpZM",
  authDomain: "match-9f855.firebaseapp.com",
  databaseURL:
    "https://match-9f855-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "match-9f855",
  storageBucket: "match-9f855.firebasestorage.app",
  messagingSenderId: "867935849534",
  appId: "1:867935849534:web:0a67003a36e07a591f156f",
};

function getAppInstance(): FirebaseApp | null {
  if (typeof window === "undefined") return null;
  return getApps().length ? getApp() : initializeApp(firebaseConfig);
}

function getDb(): Database | null {
  const app = getAppInstance();
  if (!app) return null;
  return getDatabase(app);
}

function clean<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

export async function pushSubmission(
  data: Omit<Submission, "id">,
): Promise<{ ok: boolean; id?: string; error?: string }> {
  const db = getDb();
  if (!db) return { ok: false, error: "ไม่พร้อมเชื่อมต่อคลาวด์" };
  try {
    const result = await push(ref(db, "submissions"), clean(data));
    return { ok: true, id: result.key ?? undefined };
  } catch (e) {
    return {
      ok: false,
      error: e instanceof Error ? e.message : "ส่งข้อมูลไม่สำเร็จ",
    };
  }
}

export async function saveExamConfig(
  config: ExamConfig,
): Promise<{ ok: boolean; error?: string }> {
  const db = getDb();
  if (!db) return { ok: false, error: "ไม่พร้อมเชื่อมต่อคลาวด์" };
  try {
    await set(ref(db, "exam"), clean({ ...config, updatedAt: Date.now() }));
    return { ok: true };
  } catch (e) {
    return {
      ok: false,
      error: e instanceof Error ? e.message : "บันทึกการตั้งค่าไม่สำเร็จ",
    };
  }
}

export async function clearCloudSubmissions(): Promise<{
  ok: boolean;
  error?: string;
}> {
  const db = getDb();
  if (!db) return { ok: false, error: "ไม่พร้อมเชื่อมต่อคลาวด์" };
  try {
    await remove(ref(db, "submissions"));
    return { ok: true };
  } catch (e) {
    return {
      ok: false,
      error: e instanceof Error ? e.message : "ลบข้อมูลคลาวด์ไม่สำเร็จ",
    };
  }
}

export function subscribeExam(
  cb: (config: ExamConfig | null, error?: string) => void,
): () => void {
  const db = getDb();
  if (!db) {
    cb(null, "offline");
    return () => {};
  }
  return onValue(
    ref(db, "exam"),
    (snap) => {
      cb((snap.val() as ExamConfig | null) ?? null);
    },
    (err) => cb(null, err.message),
  );
}

export function subscribeSubmissions(
  cb: (items: Submission[], error?: string) => void,
): () => void {
  const db = getDb();
  if (!db) {
    cb([], "offline");
    return () => {};
  }
  return onValue(
    ref(db, "submissions"),
    (snap) => {
      const val = snap.val() as Record<string, Omit<Submission, "id">> | null;
      const items: Submission[] = val
        ? Object.entries(val).map(([id, v]) => ({ id, ...v }))
        : [];
      items.sort((a, b) => (b.submittedAt || 0) - (a.submittedAt || 0));
      cb(items.slice(0, 50));
    },
    (err) => cb([], err.message),
  );
}
