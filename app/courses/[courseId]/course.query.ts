import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const getCourse = async ({
  courseId,
  userId = "",
}: {
  courseId: string;
  userId?: string;
}) => {
  const course = await prisma.course.findUnique({
    where: {
      id: courseId,
    },
    select: {
      id: true,
      image: true,
      name: true,

      presentation: true,
      creator: {
        select: {
          name: true,
          image: true,
        },
      },
      lessons: {
        where: {
          state: {
            in: ["PUBLISHED", "PUBLIC"],
          },
        },
        orderBy: {
          rank: "asc",
        },
        select: {
          id: true,
          state: true,
          name: true,
          courseId: true,
          users: {
            where: {
              userId: userId,
            },
            select: {
              progress: true,
            },
          },
        },
      },
    },
  });

  if (!course) return null;

  const lessons = course?.lessons.map((lesson) => {
    const progress = lesson.users[0]?.progress ?? "NOT_STARTED";

    return {
      ...lesson,
      progress,
    };
  });

  return { ...course, lessons };
};

export type CourseType = NonNullable<
  Prisma.PromiseReturnType<typeof getCourse>
>;

export type CourseLessonType = CourseType["lessons"][0];
