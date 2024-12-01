import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/Typography";
import Link from "next/link";
import { AdminLessonsType } from "./lessons.query";

export type LessonItemProps = {
  lesson: AdminLessonsType;
};

export const AdminLessonItem = (props: LessonItemProps) => {
  return (
    <Link
      href={`/admin/courses/${props.lesson.courseId}/lessons/${props.lesson.id}`}
    >
      <div className="flex items-center rounded border border-border bg-card px-4 py-2 transition-colors hover:bg-accent">
        <Typography variant="large"> {props.lesson.name}</Typography>
        <Badge className="ml-auto">{props.lesson.state}</Badge>
      </div>
    </Link>
  );
};
