import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/loader";
import { useMutation } from "@tanstack/react-query";
import { LogIn } from "lucide-react";
import { signIn } from "next-auth/react";

export const SignInButton = () => {
  const mutation = useMutation({
    mutationFn: async () => {
      signIn();
    },
  });
  return (
    <Button
      variant="outline"
      size={"sm"}
      disabled={mutation.isPending}
      onClick={() => mutation.mutate()}
    >
      {mutation.isPending ? <Loader /> : <LogIn />}
      Se connecter
    </Button>
  );
};
