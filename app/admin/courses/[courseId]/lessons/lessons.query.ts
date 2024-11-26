import { prisma } from "@/lib/prisma";

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
      lessons: true,
    },
  });
};
