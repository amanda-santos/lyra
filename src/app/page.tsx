import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-surface-background px-10">
      <div className="flex w-full flex-col items-center justify-between gap-6 px-10 py-24 md:flex-row-reverse md:px-16">
        <Image
          src="/programmer-illustration.svg"
          alt="Logo"
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
        </div>
      </div>
    </main>
  );
}
