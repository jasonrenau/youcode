import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const getAdminLessons = async ({
  courseId,
  userId,
}: {
  courseId: string;
  userId: string;
}) => {
  return await prisma.course.findFirst({
    where: {
      creatorId: userId,
      id: courseId,
    },

    select: {
      id: true,
      name: true,
      lessons: {
        orderBy: {
          rank: "asc",
        },
        select: {
          id: true,
          name: true,
          state: true,
          courseId: true,
        },
      },
    },
  });
};

export type AdminLessonsType = NonNullable<
  Prisma.PromiseReturnType<typeof getAdminLessons>
>["lessons"][0];
