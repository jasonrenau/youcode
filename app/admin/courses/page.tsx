import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/components/layout/layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Loader } from "@/components/ui/loader";
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
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function CoursesPage() {
  const user = await requiredAuth();

  const courses = await prisma.course.findMany({
    where: {
      creatorId: user.id,
    },
  });

  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle>Cours</LayoutTitle>
      </LayoutHeader>
      <LayoutContent>
        <Card>
          <CardContent className="mt-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Image</TableHead>
                  <TableHead>Nom</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {courses.map((course) => (
                  <TableRow key={course.id} className="my-8">
                    <TableCell>
                      <Avatar className="rounded">
                        <AvatarFallback>
                          <Loader />
                        </AvatarFallback>
                        {course.image && (
                          <AvatarImage src={course.image} alt="use image" />
                        )}
                      </Avatar>
                    </TableCell>
                    <TableCell>
                      <Typography
                        as={Link}
                        variant={"large"}
                        href={`/admin/courses/${course.id}`}
                      >
                        {course.name}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </LayoutContent>
    </Layout>
  );
}
