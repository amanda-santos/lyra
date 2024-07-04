import { AboutMeSection } from "./components/sections/about-me-section";
import { ContactSection } from "./components/sections/contact-section";
import { HeroSection } from "./components/sections/hero-section";
import { ProjectsSection } from "./components/sections/projects-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-10 px-10 pb-10">
      <HeroSection />
      <AboutMeSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
