import * as React from "react";
import Link from "next/link";

export default function Introduction() {
  return (
    <section className="w-[343px] m-auto flex flex-col text-center">
        <h2 className="mt-10">
          Nice to meet you! I&apos;m{" "}
          <span className="underline-offset-8 decoration-4">Adam Keyes</span>
        </h2>
        <p className="mt-6">
          Based in the UK, I&apos;m a front-end developer passionate about
          building accessible web apps that users love.
        </p>
        <Link href="/" className="mx-auto mt-6">
          CONTACT ME
        </Link>
      </section>
  );
}
