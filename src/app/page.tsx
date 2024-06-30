import { AboutMeSection } from "./components/sections/about-me-section";
import { HeroSection } from "./components/sections/hero-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-10 pb-10">
      <HeroSection />
      <AboutMeSection />
    </main>
  );
}
