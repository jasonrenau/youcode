import { Card, CardHeader } from "@/components/ui/card";
import { auth } from "@/lib/auth";

export default async function Home() {
  const session = await auth();
  console.log(session);

  return (
    <main>
      <Card>
        <CardHeader>Home</CardHeader>
      </Card>
    </main>
  );
}
