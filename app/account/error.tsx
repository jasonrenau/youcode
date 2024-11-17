"use client"; // Error boundaries must be Client Components

import { SignInButton } from "@/components/features/auth/SignInButton";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    // center card on screen
    <Card className="m-auto mt-4 max-w-lg items-center">
      <CardHeader>
        <CardTitle>
          <p>
            Vous avez besoin d&apos;être connecté pour accéder à cette page.
          </p>
        </CardTitle>
      </CardHeader>
      <CardFooter>
        <SignInButton />
      </CardFooter>
    </Card>
  );
}
