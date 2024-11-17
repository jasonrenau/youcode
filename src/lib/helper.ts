import { useSession } from "next-auth/react";

export const GetAuthUser = () => {
  const session = useSession();

  if (!session.data?.user) throw new Error("No session found");

  return session.data.user;
};
