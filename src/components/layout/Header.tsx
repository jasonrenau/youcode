// src/components/layout/Header.
import { Typography } from "@/components/ui/Typography";
import { ThemeToggle } from "@/components/utils/ThemeToggle";
import { SiteConfig } from "@/lib/site-config";
import Image from "next/image";
import Link from "next/link";
import { AuthButton } from "../features/auth/AuthButton";

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background p-2">
      <div className=" flex h-16  items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex items-center gap-2">
          <Image
            src="/images/you-code.svg"
            width={50}
            height={35}
            alt="app logo"
          />
          <Typography variant="h3" as={Link} href="/">
            {SiteConfig.title}
          </Typography>
          <div className="flex flex-1 items-center justify-start gap-2">
            <Typography
              as={Link}
              variant="link"
              className="text-muted-foreground hover:text-foreground"
              href={"/explorer"}
            >
              Explorer
            </Typography>
            <Typography
              as={Link}
              variant="link"
              className="text-muted-foreground hover:text-foreground"
              href={"/courses"}
            >
              Cours
            </Typography>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <AuthButton />
          <nav className="flex items-center space-x-1">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
};
