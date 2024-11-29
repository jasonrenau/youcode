import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SignInButton } from "../auth/SignInButton";

export default function NotAuthentificatedCard() {
  return (
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
