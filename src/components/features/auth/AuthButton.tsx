"use client";

import { useSession } from "next-auth/react";
import { LoggedInButton } from "./LoggedInButton";
import { SignInButton } from "./SignInButton";
export const AuthButton = () => {
  const session = useSession();

  const user = session.data?.user;

  if (user) {
    return <LoggedInButton user={user} />;
  }
  return <SignInButton />;
};
