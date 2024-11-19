import { requiredAuth } from "@/lib/helper";
import { prisma } from "@/lib/prisma";

export default async function CoursePage({
  params,
}: {
  params: { id: string };
}) {
  const user = await requiredAuth();

  if (!user) throw new Error("No session found");

  const course = await prisma.course.findUnique({
    where: {
      id: params.id,
    },
    include: {
      creator: true,
    },
  });

  return <div>bonjour {course?.name}</div>;
}
