import { PaginationButton } from "@/components/features/pagination/PaginationButton";
import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/components/layout/layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Typography } from "@/components/ui/Typography";
import { requiredAuth } from "@/lib/helper";
import Link from "next/link";
import { getAdminCourse } from "./course.query";

export default async function CoursePage({
  params,
  searchParams,
}: {
  params: Promise<{ courseId: string }>;
  searchParams: Promise<{ page: string }>;
}) {
  const page = Number((await searchParams).page) || 0;
  const courseId = (await params).courseId;
  const user = await requiredAuth();
  const course = await getAdminCourse({
    courseId: courseId,
    userId: user.id,
    userPage: page,
  });

  if (!course) {
    return (
      <Layout>
        <LayoutHeader>
          <LayoutTitle>Course</LayoutTitle>
        </LayoutHeader>
        <LayoutContent>
          <Card>
            <CardContent className="mt-4">
              <Typography>Pas encore de cours disponible</Typography>
            </CardContent>
          </Card>
        </LayoutContent>
      </Layout>
    );
  }

  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle>{course.name}</LayoutTitle>
      </LayoutHeader>
      <LayoutContent className="flex flex-col gap-4 lg:flex-row">
        <Card className="flex-[2]">
          <CardHeader>
            <CardTitle>Utilisateurs :</CardTitle>
          </CardHeader>
          <CardContent className="mt-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Image</TableHead>
                  <TableHead>Nom</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {course.users?.map((user) => (
                  <TableRow key={user.id} className="my-8">
                    <TableCell>
                      <Avatar className="rounded">
                        <AvatarFallback>{user.email?.[0]}</AvatarFallback>
                        {user.image && (
                          <AvatarImage src={user.image} alt="use image" />
                        )}
                      </Avatar>
                    </TableCell>
                    <TableCell>
                      <Typography
                        as={Link}
                        variant="large"
                        href={`/admin/users/${user.id}`}
                      >
                        {user.email}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <PaginationButton
              totalPage={((course._count?.users || 0) - 1) / 5}
              page={page}
              baseUrl={`/admin/courses/${courseId}`}
            />
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardHeader>
            <Avatar>
              <AvatarFallback>{course.name?.[0]}</AvatarFallback>
              {course.image && (
                <AvatarImage src={course.image} alt="use image" />
              )}
            </Avatar>
            <CardTitle>{course.name}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-1">
            <Typography>{course._count?.users} utilisateurs</Typography>
            <Typography>{course._count?.lessons} cours</Typography>
            <Link
              className={buttonVariants({
                variant: "outline",
                size: "sm",
              })}
              href={`/admin/courses/${courseId}/edit`}
            >
              Modifier
            </Link>
            <Link
              className={buttonVariants({
                variant: "outline",
                size: "sm",
              })}
              href={`/admin/courses/${courseId}/editLessons`}
            >
              Modifier les cours
            </Link>
          </CardContent>
        </Card>
      </LayoutContent>
    </Layout>
  );
}
