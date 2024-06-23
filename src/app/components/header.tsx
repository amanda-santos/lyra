import { Sun } from "@phosphor-icons/react/dist/ssr";
import { HeaderItem } from "./header-item";

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-20 py-6 bg-surface-background shadow-neutral-950 drop-shadow-2xl">
      <h1 className="text-text-primary font-heading text-4xl">Amanda Santos</h1>

      <nav className="flex items-center gap-4">
        <HeaderItem isActive>Home</HeaderItem>
        <HeaderItem>About</HeaderItem>
        <HeaderItem>Projects</HeaderItem>
        <HeaderItem>Contact</HeaderItem>
        <HeaderItem>
          <Sun />
        </HeaderItem>
      </nav>
    </header>
  );
};
