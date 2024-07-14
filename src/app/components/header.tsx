import Link from "next/link";
import { Code, List } from "@phosphor-icons/react/dist/ssr";
import { Sheet, SheetContent, SheetTrigger } from "./core/sheet";

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex w-full items-center gap-4 bg-surface-background px-6 py-6 font-body text-text-primary shadow-neutral-950 drop-shadow-2xl md:px-6">
      <Link
        href="/"
        className="mr-auto flex items-center gap-2 text-lg font-semibold md:text-base"
      >
        <Code className="h-6 w-6" />
        <span>Amanda Santos</span>
      </Link>

      <nav className="hidden md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/"
          className="text-text-secondary transition-colors hover:text-text-primary"
        >
          Home
        </Link>
        <Link
          href="/#about"
          className="text-text-secondary transition-colors hover:text-text-primary"
        >
          About
        </Link>
        <Link
          href="/#projects"
          className="text-text-secondary transition-colors hover:text-text-primary"
        >
          Projects
        </Link>
        <Link
          href="/#contact"
          className="text-text-secondary transition-colors hover:text-text-primary"
        >
          Contact
        </Link>
      </nav>

      <Sheet>
        <SheetTrigger asChild>
          <button className="ml-auto text-text-secondary transition-colors hover:text-text-primary md:hidden">
            <List className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="border-none bg-surface-primary px-4 py-6"
        >
          <nav className="text-md grid gap-6 font-medium">
            <Link
              href="/"
              className="text-text-secondary transition-colors hover:text-text-primary"
            >
              Home
            </Link>
            <a
              href="/#about"
              className="text-text-secondary transition-colors hover:text-text-primary"
            >
              About
            </a>
            <Link
              href="/#projects"
              className="text-text-secondary transition-colors hover:text-text-primary"
            >
              Projects
            </Link>
            <Link
              href="/#contact"
              className="text-text-secondary transition-colors hover:text-text-primary"
            >
              Contact
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};
