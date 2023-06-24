import * as React from "react";
import Identity from "./Identity";
import Introduction from "./Introduction";

export default function Header() {
  return (
    <header className="flex flex-col justify-between items-center m-auto  gap-5 relative md:w-auto md:items-start md:mx-[32px]  lg:mx-[165px] ">
      <Identity />
      <Introduction />
    </header>
  );
}
