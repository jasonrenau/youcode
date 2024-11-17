"use client";

import { useMutation } from "@tanstack/react-query";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  const mutation = useMutation({
    mutationFn: async () => {
      await signOut();
    },
  });

  return (
    <div onClick={() => mutation.mutate()} className="flex items-center gap-2">
      <LogOut size={12} className="mr-2" />
      Deconnexion
    </div>
  );
}
