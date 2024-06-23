"use client";

import { X, List, Sun } from "@phosphor-icons/react";
import { NavbarItem } from "./navbar-item";
import { useState } from "react";

export const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="flex flex-col items-center gap-4 lg:hidden">
      <NavbarItem onClick={handleMenuClick}>
        {isMenuOpen ? <X /> : <List />}
      </NavbarItem>

      {isMenuOpen && (
        <>
          <NavbarItem isActive>Home</NavbarItem>
          <NavbarItem>About</NavbarItem>
          <NavbarItem>Projects</NavbarItem>
          <NavbarItem>Contact</NavbarItem>
          <NavbarItem>
            <Sun />
          </NavbarItem>
        </>
      )}
    </nav>
  );
};
