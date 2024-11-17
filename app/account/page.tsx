import LogoutButton from "@/components/features/auth/LogoutButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { requiredAuth } from "@/lib/helper";
import Link from "next/link";

export default async function AccountPage() {
  const user = await requiredAuth();

  if (!user) throw new Error("No session found");

  return (
    <Card className="m-auto mt-4  max-w-lg items-center">
      <CardHeader className="flex flex-row gap-4 space-y-0">
        <Avatar className="size-12">
          <AvatarFallback>{user.email?.[0]}</AvatarFallback>
          {user.image && <AvatarImage src={user.image} alt="use image" />}
        </Avatar>
        <div className="flex flex-col gap-1">
          <CardTitle>{user.email}</CardTitle>
          <CardDescription>{user.name}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Link
          className={buttonVariants({ variant: "outline", size: "lg" })}
          href={"/account/settings"}
        >
          Paramètres
        </Link>
        <Link
          className={buttonVariants({ variant: "outline", size: "lg" })}
          href={"/account/admin"}
        >
          Administrateur
        </Link>
      </CardContent>
      <CardFooter className="flex flex-row-reverse">
        <LogoutButton />
      </CardFooter>
    </Card>
  );
}
