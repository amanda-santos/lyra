import {
  GithubLogo,
  LinkedinLogo,
  InstagramLogo,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { Button } from "../core/button";

export const ContactSection = () => {
  return (
    <section className="flex w-full max-w-screen-2xl flex-col items-start justify-between gap-10 rounded-2xl bg-surface-primary px-8 py-12 sm:p-20 lg:flex-row">
      <div className="flex w-full flex-col gap-10">
        <Image src="/avatar.svg" alt="" width={160} height={160} />
        <div className="flex max-w-[592px] flex-col gap-4">
          <span>
            <h3 className="mb-2 font-heading text-secondary-color">Contact</h3>
            <h2 className="font-body text-2xl font-medium text-text-primary">
              Enjoyed my work? Let’s work together
            </h2>
          </span>
          <p className="font-body text-text-secondary">
            I’m always up for a chat. Pop me an email at{" "}
            <a
              className="text-secondary-color underline transition-opacity hover:opacity-85"
              href="malito:amandasf0200@gmail.com"
            >
              amandasf0200@gmail.com
            </a>{" "}
            or give me a shout on social media.
          </p>

          <div className="flex gap-2">
            <Button variant="icon">
              <GithubLogo size={24} />
            </Button>
            <Button variant="icon">
              <LinkedinLogo size={24} />
            </Button>
            <Button variant="icon">
              <InstagramLogo size={24} />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex w-full max-w-[488px] flex-col gap-8">
        <fieldset className="flex flex-col gap-4">
          <input
            type="text"
            className="h-12 rounded-lg bg-surface-background px-4 py-3 font-body text-text-primary placeholder-text-secondary focus:outline-1 focus:outline-secondary-color"
            placeholder="Name"
          />
          <input
            type="email"
            className="h-12 rounded-lg bg-surface-background px-4 py-3 font-body text-text-primary placeholder-text-secondary focus:outline-1 focus:outline-secondary-color"
            placeholder="Email"
          />
          <textarea
            className="h-40 rounded-lg bg-surface-background px-4 py-3 font-body text-text-primary placeholder-text-secondary focus:outline-1 focus:outline-secondary-color"
            placeholder="Message"
          />
        </fieldset>

        <Button variant="primary" className="w-fit">
          Send me a message <ArrowRight size={24} />
        </Button>
      </div>
    </section>
  );
};
