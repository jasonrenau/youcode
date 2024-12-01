import { Typography } from "@/components/ui/Typography";
import { CheckCircle, Circle, CircleDashed } from "lucide-react";
import Link from "next/link";
import { CourseLessonType } from "../../course.query";

export type LessonItemProps = {
  lesson: CourseLessonType;
};

export const getLessonIcon = (lesson: CourseLessonType["progress"]) => {
  if (lesson === "COMPLETED") {
    return CheckCircle;
  }
  if (lesson === "IN_PROGRESS") {
    return Circle;
  }
  return CircleDashed;
};

export const LessonItem = (props: LessonItemProps) => {
  const Icon = getLessonIcon(props.lesson.progress);
  return (
    <Link href={`/courses/${props.lesson.courseId}/lessons/${props.lesson.id}`}>
      <div className="flex items-center gap-3 rounded border border-border bg-card px-4 py-2 transition-colors hover:bg-accent">
        <Icon size={16} />
        <Typography variant="small" className="flex-1">
          {props.lesson.name}
        </Typography>
      </div>
    </Link>
  );
};
