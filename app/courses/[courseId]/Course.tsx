import { MarkdownProse } from "@/components/features/mdx/MarkdownProse";
import { Typography } from "@/components/ui/Typography";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CourseType } from "./course.query";
import { LessonItem } from "./lessons/[lessonId]/LessonItem";

export type CourseProps = {
  course: CourseType;
};

export const Course = (props: CourseProps) => {
  return (
    <div className="flex flex-col items-start gap-4 ">
      <div className="flex w-full flex-col items-start gap-4 lg:flex-row">
        <Card className="w-full flex-[2] hover:bg-accent">
          <CardHeader className="flex flex-row gap-3 space-y-0">
            <Avatar className="size-14 rounded">
              <AvatarFallback>{props.course.name[0]}</AvatarFallback>
              {props.course.image ? (
                <AvatarImage src={props.course.image} />
              ) : null}
            </Avatar>
            <div className="flex flex-col gap-3">
              <CardTitle>{props.course.name}</CardTitle>
              <div className="flex flex-row gap-2">
                <Avatar className="size-8">
                  <AvatarFallback>
                    {props.course.creator.name
                      ? props.course.creator.name[0]
                      : null}
                  </AvatarFallback>
                  {props.course.creator.image ? (
                    <AvatarImage src={props.course.creator.image} />
                  ) : null}
                </Avatar>
                <Typography
                  variant={"large"}
                  className="text  text-muted-foreground"
                >
                  {props.course.creator.name}
                </Typography>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <MarkdownProse markdown={props.course.presentation} />
          </CardContent>
        </Card>
        <Card className="w-full flex-1">
          <CardHeader>
            <CardTitle>Leçons</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {props.course.lessons.map((lesson) => (
              <LessonItem key={lesson.id} lesson={lesson} />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
