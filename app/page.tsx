import { Card } from "@/components/ui/card";
import { auth } from "@/lib/auth";
import Authbutton from "./Authbutton";

export default async function Home() {
  const session = await auth();
  console.log(session);
  return (
    <main>
      <div className="">bonjour</div>
      <Authbutton />
      <Card title="hello" />
    </main>
  );
}
