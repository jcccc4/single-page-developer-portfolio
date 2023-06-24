import * as React from "react";
import Image from "next/image";

export default function BackgroundImage() {
  return (
    <>
      <Image
        src="/pattern-rings.svg"
        alt="Github Icon"
        width="0"
        height="0"
        className="absolute min-w-[530px] top-[124px] -left-[342px] lg:top-[133px] lg:-left-[100px]"
      />
      <Image
        src="/pattern-circle.svg"
        alt="Github Icon"
        width="130"
        height="10"
        className="absolute top-[254px] right-[-65px] overflow-hidden lg:right-[545px] lg:top-[521px] z-10"
      />
      <Image
        src="/pattern-rings.svg"
        alt="Github Icon"
        width="530"
        height="129"
        className="absolute min-w-[530px] bottom-[269px] -left-[342px]  md:bottom-[130px] md:-left-[368px] lg:-left-[100px]"
      />
      <Image
        src="/image-profile-mobile.webp"
        alt="Profile Picture"
        width="174"
        height="242"
        className="absolute top-0 left-0 right-0 md:hidden ml-auto mr-auto"
      />
      <Image
        src="/image-profile-tablet.webp"
        alt="Profile Picture"
        width="322"
        height="600"
        className="invisible absolute top-0 right-0 md:visible lg:invisible"
      />
      <Image
        src="/image-profile-desktop.webp"
        alt="Profile Picture"
        width="445"
        height="720"
        className="invisible absolute top-0 right-[165px] lg:visible"
      />
    </>
  );
}
