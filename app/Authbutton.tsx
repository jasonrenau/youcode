"use client";

import { signIn } from "next-auth/react";

export default function Authbutton() {
  return <button onClick={() => signIn()}>login</button>;
}
