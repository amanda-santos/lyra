import { ArrowRight, ReadCvLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export const HeroSection = () => (
  <>
    <div className="flex w-full flex-col items-center justify-between gap-6 py-24 md:flex-row-reverse lg:px-16">
      <Image
        src="/programmer-illustration.svg"
        alt=""
        width={488}
        height={416}
      />

      <div className="max-w-[592px]">
        <h1 className="inline-block bg-gradient-to-r from-primary-color-400 to-secondary-color bg-clip-text font-heading text-4xl text-transparent">
          Hi, I&apos;m Amanda
        </h1>
        <span className="my-8 flex flex-col gap-4">
          <h2 className="font-body text-2xl text-text-primary">
            Full-stack developer and innovation enthusiast
          </h2>
          <p className="font-body text-text-secondary">
            Over 4 years of experience in the tech industry. I specialize in
            building innovative web and mobile applications using technologies
            such as React, React Native, and Node.js.
          </p>
        </span>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 rounded-lg bg-surface-secondary px-4 py-4 font-body text-sm font-medium text-text-primary transition-colors hover:bg-surface-tertiary focus:outline-offset-4 focus:outline-text-primary md:px-6 md:text-base">
            <ReadCvLogo size={24} />
            My resume
          </button>

          <button className="px flex items-center gap-2 rounded-lg bg-primary-color-500 px-4 py-4 font-body text-sm font-medium text-text-primary transition-colors hover:bg-primary-color-400 focus:outline-offset-4 focus:outline-text-primary md:px-6 md:text-base">
            Get in touch
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>

    <Image
      src="/arrow-illustration.svg"
      alt=""
      width={120}
      height={32}
      className="absolute right-20 top-[880px] rotate-[130deg] animate-pulse md:right-[280px] md:top-[500px] lg:right-[400px] lg:top-[540px] xl:right-[480px] xl:top-[640px]"
    />
  </>
);
