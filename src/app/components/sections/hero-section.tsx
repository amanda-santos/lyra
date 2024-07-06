import { ArrowRight, ReadCvLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { Button } from "../core/button";

export const HeroSection = () => (
  <section className="relative max-w-screen-2xl py-36 lg:px-12">
    <div className="flex w-full flex-col items-center justify-between gap-6 md:flex-row-reverse">
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
          <h2 className="font-body text-2xl font-medium text-text-primary">
            Full-stack developer and innovation enthusiast
          </h2>
          <p className="font-body text-text-secondary">
            Over 4 years of experience in the tech industry. I specialize in
            building innovative web and mobile applications using technologies
            such as React, React Native, and Node.js.
          </p>
        </span>

        <div className="flex items-center gap-4">
          <Button variant="secondary">
            <ReadCvLogo size={24} />
            My resume
          </Button>

          <Button>
            Get in touch
            <ArrowRight size={24} />
          </Button>
        </div>
      </div>
    </div>

    <Image
      src="/arrow-illustration.svg"
      alt=""
      width={120}
      height={32}
      className="absolute right-20 top-[880px] rotate-[130deg] animate-pulse md:right-[280px] md:top-[500px] lg:right-[400px] lg:top-[500px] xl:top-[600px]"
    />
  </section>
);
