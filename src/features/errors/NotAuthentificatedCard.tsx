"use client"; // Error components must be Client Components

import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LoginButton } from "@/features/auth/LoginButton";

export default function NotAuthentificatedCard() {
  return (
    <Card className="m-auto mt-4 max-w-lg">
      <CardHeader>
        <CardTitle>You need to be logged in to access this page.</CardTitle>
      </CardHeader>
      <CardFooter>
        <LoginButton />
      </CardFooter>
    </Card>
  );
}
