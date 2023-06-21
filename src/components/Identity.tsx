import * as React from "react";
import Image from "next/image";

export default function Identity() {
  return (
    <section className="flex flex-col justify-between items-center w-[154px] m-auto  gap-5 relative">
      <h1 className="text-name font-bold">adamkeyes</h1>
      <section className="flex justify-between w-full">
        <Image
          src="/icon-github.svg"
          alt="Github Icon"
          width="24"
          height="24"
        />
        <Image
          src="/icon-frontend-mentor.svg"
          alt="Frontend Mentor"
          width="24"
          height="22"
        />
        <Image src="/icon-linkedin.svg" alt="Linkedin" width="24" height="24" />
        <Image src="/icon-twitter.svg" alt="Twitter" width="23" height="18" />
      </section>
    </section>
  );
}
