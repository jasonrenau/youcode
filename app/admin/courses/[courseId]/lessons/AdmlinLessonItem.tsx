import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/Typography";
import { Lesson } from "@prisma/client";

export type LessonItemProps = {
  lessons: Lesson;
};

export const AdminLessonItem = (props: LessonItemProps) => {
  return (
    <div className="flex items-center rounded border border-border bg-card px-4 py-2 transition-colors hover:bg-accent">
      <Typography variant="large"> {props.lessons.name}</Typography>
      <Badge className="ml-auto">{props.lessons.state}</Badge>
    </div>
  );
};
