export default async function CoursePage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const courseId = (await params).courseId;
  console.log(courseId);
  return <div>CoursePage</div>;
}
