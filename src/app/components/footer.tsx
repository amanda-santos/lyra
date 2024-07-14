import { ArrowUp } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex w-full flex-wrap items-center justify-between gap-4 p-6 font-body text-sm text-text-secondary lg:px-28 lg:py-8">
      <p className="text-sm">
        Amanda Santos (2024). Layout based on Rocketseat’s template.
      </p>

      <nav className="text-base">
        <ul className="flex gap-6">
          <li>
            <a href="#">GitHub</a>
          </li>
          <li>
            <a href="#">LinkedIn</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <Link href="#">
              <ArrowUp size={24} />
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
