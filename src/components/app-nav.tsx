import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTrigo } from "@/lib/store";
import type { PageId } from "@/lib/types";
import { cn } from "@/lib/utils";

const LINKS: { id: PageId; label: string }[] = [
  { id: "cover", label: "หน้าแรก" },
  { id: "lesson", label: "บทเรียน" },
  { id: "quiz", label: "แบบทดสอบ" },
  { id: "results", label: "คะแนน" },
  { id: "answers", label: "เฉลย" },
  { id: "admin", label: "แอดมิน" },
];

export function AppNav() {
  const page = useTrigo((s) => s.page);
  const setPage = useTrigo((s) => s.setPage);
  const theme = useTrigo((s) => s.theme);
  const setTheme = useTrigo((s) => s.setTheme);
  const [open, setOpen] = useState(false);

  function go(id: PageId) {
    setPage(id);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <header className="sticky top-0 z-50 bg-navy text-cream shadow-[0_2px_10px_rgba(0,0,0,0.15)]">
      <div className="mx-auto flex max-w-[1040px] items-center justify-between gap-3 px-5 py-3">
        <div className="flex items-baseline gap-2 text-[1.05rem] font-bold text-white">
          คณิต ม.3
          <small className="text-[0.78rem] font-normal text-gold-soft">
            ตรีโกณมิติ
          </small>
        </div>
        <nav
          className={cn(
            "gap-1",
            open
              ? "absolute top-full right-0 left-0 flex flex-col border-t border-white/15 bg-navy-2 p-1.5"
              : "hidden md:flex",
          )}
        >
          {LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => go(link.id)}
              aria-current={page === link.id ? "page" : undefined}
              className={cn(
                "rounded-sm px-3 py-2.5 text-[0.95rem] text-[#ede4d0] transition-colors duration-150 hover:bg-white/10 md:text-right md:w-auto",
                page === link.id && "bg-gold font-bold text-navy-2",
                open && "w-full text-right",
              )}
            >
              {link.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full border border-white/20 bg-white/10 text-white"
            aria-label="สลับโหมดมืด/สว่าง"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="size-4" />
            ) : (
              <Moon className="size-4" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="border border-white/35 text-white md:hidden"
            aria-label="เมนู"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </div>
    </header>
  );
}
