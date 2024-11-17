"use client";

import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/loader";
import { useMutation } from "@tanstack/react-query";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async () => {
      router.push("/");
      await signOut();
    },
  });

  return (
    <Button
      onClick={() => mutation.mutate()}
      className="flex items-center gap-2"
      variant="destructive"
      size={"sm"}
    >
      {mutation.isPending ? <Loader size={12} /> : <LogOut size={12} />}
      Se déconnecter
    </Button>
  );
}
