import { useEffect } from "react";
import { Toaster } from "sonner";
import { AppNav } from "@/components/app-nav";
import { CoverPage } from "@/components/pages/cover-page";
import { LessonPage } from "@/components/pages/lesson-page";
import { QuizPage } from "@/components/pages/quiz-page";
import { ResultsPage } from "@/components/pages/results-page";
import { AnswersPage } from "@/components/pages/answers-page";
import { AdminPage } from "@/components/pages/admin-page";
import { subscribeExam } from "@/lib/firebase";
import { useTrigo } from "@/lib/store";

export function TrigoApp() {
  const page = useTrigo((s) => s.page);
  const theme = useTrigo((s) => s.theme);
  const applyExam = useTrigo((s) => s.applyExam);

  useEffect(() => {
    void Promise.resolve(useTrigo.persist.rehydrate()).then(() => {
      const t = useTrigo.getState().theme;
      document.documentElement.classList.toggle("dark", t === "dark");
    });
    return subscribeExam((config) => {
      if (config) applyExam(config);
    });
  }, [applyExam]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className="min-h-screen bg-bg text-ink">
      <AppNav />
      {page === "cover" ? <CoverPage /> : null}
      {page === "lesson" ? <LessonPage /> : null}
      {page === "quiz" ? <QuizPage /> : null}
      {page === "results" ? <ResultsPage /> : null}
      {page === "answers" ? <AnswersPage /> : null}
      {page === "admin" ? <AdminPage /> : null}
      <footer className="bg-navy-2 px-5 py-8 text-center text-[#d9d0bc]">
        <p className="m-0">สื่อการเรียนรู้คณิตศาสตร์ ม.3 เรื่อง ตรีโกณมิติ</p>
        <p className="mt-1 mb-0">จัดทำเพื่อการศึกษา</p>
      </footer>
      <Toaster richColors position="bottom-center" />
    </div>
  );
}
