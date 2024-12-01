import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/components/layout/layout";
import { requiredAuth } from "@/lib/helper";
import { notFound } from "next/navigation";
import { Course } from "./Course";
import { getCourse } from "./course.query";

export default async function CoursePage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const courseId = (await params).courseId;
  const user = await requiredAuth();
  const course = await getCourse({
    courseId: courseId,
    userId: user.id,
  });

  if (!course) {
    notFound();
  }

  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle>Cours</LayoutTitle>
      </LayoutHeader>
      <LayoutContent>
        <Course course={course} />
      </LayoutContent>
    </Layout>
  );
}
