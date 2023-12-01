import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/components/layout/layout";

import { CourseCard } from "../courses/CourseCard";
import { getCourses } from "../courses/course.query";
import { getAuthSession } from "@/lib/auth";

import NotAuthentificatedCard from "@/features/errors/NotAuthentificatedCard";

export default async function CoursesPage() {
  const session = await getAuthSession();

  if (!session?.user.id) {
    return <NotAuthentificatedCard />;
  }

  const courses = await getCourses(session.user.id);

  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle>Your courses</LayoutTitle>
      </LayoutHeader>
      <LayoutContent className="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </LayoutContent>
    </Layout>
  );
}
