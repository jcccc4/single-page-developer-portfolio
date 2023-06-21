import * as React from "react";
import Identity from "./Identity";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-col justify-between items-center w-[154px] m-auto  gap-5 relative">
      <Identity />
      <section className="w-[174px] h-[242px]">
        <Image
          src="/image-profile-mobile.webp"
          alt="Profile Picture"
          width="174"
          height="242"
          className="absolute top-0 left-0"
        />
      </section>
    </header>
  );
}
