import { Sun } from "@phosphor-icons/react/dist/ssr";

import { NavbarItem } from "./navbar-item";

export const Navbar = () => {
  return (
    <nav className="hidden items-center gap-4 lg:flex">
      <NavbarItem isActive>Home</NavbarItem>
      <NavbarItem>About</NavbarItem>
      <NavbarItem>Projects</NavbarItem>
      <NavbarItem>Contact</NavbarItem>
      <NavbarItem>PT-BR</NavbarItem>
      <NavbarItem>
        <Sun size={20} />
      </NavbarItem>
    </nav>
  );
};
