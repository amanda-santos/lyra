import { ReadCvLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { Button } from "../core/button";

export const AboutMeSection = () => {
  return (
    <section className="flex w-full max-w-screen-2xl flex-col items-center justify-between gap-10 rounded-2xl bg-surface-primary px-8 py-12 sm:p-20 lg:flex-row">
      <Image
        src="/programmer-with-cat-illustration.svg"
        alt=""
        width={488}
        height={396}
      />
      <div className="flex max-w-[592px] flex-col gap-8">
        <span className="flex gap-6 text-2xl text-primary-color-400">
          <i className="devicon-javascript-plain" />
          <i className="devicon-react-original" />
          <i className="devicon-nodejs-plain" />
          <i className="devicon-tailwindcss-original" />
          <i className="devicon-go-plain" />
        </span>

        <div>
          <h3 className="mb-2 font-heading text-secondary-color">About me</h3>
          <h2 className="mb-4 font-body text-2xl font-medium text-text-primary">
            I’m a passionate software developer looking for my first
            international opportunity
          </h2>
          <p className="font-body text-text-secondary">
            Beyond coding, I&apos;m a coffee enthusiast, a cat lover, and a
            self-taught artist who enjoys spending my free time doodling. I am
            currently seeking opportunities to bring my skills and enthusiasm to
            a tech company in the United States or Europe and am excited about
            the prospect of relocating to pursue new challenges.
          </p>
        </div>

        <Button className="w-fit">
          <ReadCvLogo size={24} />
          My resume
        </Button>
      </div>
    </section>
  );
};
