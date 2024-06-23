import { MobileNavbar } from "./mobile-navbar";
import { Navbar } from "./navbar";

export const Header = () => {
  return (
    <header className="flex items-center justify-between bg-surface-background px-10 py-6 shadow-neutral-950 drop-shadow-2xl sm:px-20">
      <h1 className="font-heading text-2xl text-text-primary">Amanda S.</h1>

      <Navbar />
      <MobileNavbar />
    </header>
  );
};
