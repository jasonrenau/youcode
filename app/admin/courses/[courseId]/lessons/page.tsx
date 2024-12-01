import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/components/layout/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { requiredAuth } from "@/lib/helper";

import { notFound } from "next/navigation";
import { AdminLessonItem } from "./AdminLessonItem";
import { getAdminLessons } from "./lessons.query";

export default async function CourseLessonsPage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const courseId = (await params).courseId;
  const user = await requiredAuth();
  const course = await getAdminLessons({
    courseId: courseId,
    userId: user.id,
  });

  if (!course) {
    notFound();
  }

  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle>Leçon : {course.name}</LayoutTitle>
      </LayoutHeader>
      <LayoutContent className="flex flex-col gap-4 lg:flex-row">
        <Card className="flex-[2]">
          <CardHeader>
            <CardTitle>Liste des leçons</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {course.lessons.map((lesson) => (
              <AdminLessonItem key={lesson.id} lessons={lesson} />
            ))}
          </CardContent>
        </Card>
      </LayoutContent>
    </Layout>
  );
}
