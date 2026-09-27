import { createFileRoute } from "@tanstack/react-router";
import { TrigoApp } from "@/components/trigo-app";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <TrigoApp />;
}
