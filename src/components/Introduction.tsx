import * as React from "react";
import Link from "next/link";

export default function Introduction() {
  return (
    <section className="w-[343px] mx-auto flex flex-col text-center mt-[331px] md:mt-[90px] md:ml-0 md:text-left md:w-[443px] lg:mt-[127px] lg:w-[709px] lg:text-nav-lg ">
        <h2 className="mt-10 lg:mt-0 lg:tracking-[-2.5px]">
          Nice to <br className="hidden md:block lg:hidden" /> meet you! <br className="hidden lg:block" />I&apos;m{" "}
          <span className="underline-offset-[14px] decoration-4">Adam Keyes</span>.
        </h2>
        <p className="mt-6 md:mt-[60px] lg:mt-[44px] lg:w-[445px]">
          Based in the UK, I&apos;m a front-end developer passionate about
          building accessible web apps that users love.
        </p>
        <Link href="/" className="mx-auto mt-6 md:ml-0 md:mt-[34px] lg:mt-[66px]">
          CONTACT ME
        </Link>
      </section>
  );
}
