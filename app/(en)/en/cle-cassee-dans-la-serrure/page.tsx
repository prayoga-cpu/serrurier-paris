import type { Metadata } from "next";
import TaskView from "@/components/pages/TaskView";
import { taskMetadata } from "@/lib/metadata";

const SLUG = "cle-cassee-dans-la-serrure";

export const metadata: Metadata = taskMetadata("en", SLUG);

export default function Page() {
  return <TaskView lang="en" slug={SLUG} />;
}
