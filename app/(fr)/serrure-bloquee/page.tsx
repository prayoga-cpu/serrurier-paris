import type { Metadata } from "next";
import TaskView from "@/components/pages/TaskView";
import { taskMetadata } from "@/lib/metadata";

const SLUG = "serrure-bloquee";

export const metadata: Metadata = taskMetadata("fr", SLUG);

export default function Page() {
  return <TaskView lang="fr" slug={SLUG} />;
}
