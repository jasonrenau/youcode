import NotAuthentificatedCard from "@/components/features/errors/NotAuthentificatedCard";
import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/components/layout/layout";
import { Typography } from "@/components/ui/Typography";
import { requiredAuth } from "@/lib/helper";
import { getCourses } from "./course.query";
import { CourseCard } from "./CourseCard";

export default async function CoursesPage() {
  const user = await requiredAuth();
  if (!user) {
    return <NotAuthentificatedCard />;
  }
  const courses = await getCourses(user.id);

  if (!courses) {
    return (
      <Layout>
        <LayoutHeader>
          <LayoutTitle>Mes cours</LayoutTitle>
        </LayoutHeader>
        <LayoutContent className="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-3 ">
          <Typography variant={"h1"}>Pas encore de cours disponible</Typography>
        </LayoutContent>
      </Layout>
    );
  }

  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle>Mes cours</LayoutTitle>
      </LayoutHeader>
      <LayoutContent className="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-3 ">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
        ,
      </LayoutContent>
    </Layout>
  );
}
