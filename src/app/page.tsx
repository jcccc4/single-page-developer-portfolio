import Image from "next/image";

import Introduction from "@/components/Introduction";
import Skills from "@/components/Skills";
import Project from "@/components/Project";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
export default function Home() {
  return (
    <main className="relative max-w-screen overflow-x-hidden  overflow-y-hidden ">
      <Image
        src={`${process.env.NODE_ENV === 'production' ? '/single-page-developer-portfolio/' : ''}/pattern-rings.svg`}
        alt="Github Icon"
        width="530"
        height="129"
        className="absolute min-w-[530px] top-[124px] -left-[342px]"
      />
      <Image
        src={`${process.env.NODE_ENV === 'production' ? '/single-page-developer-portfolio/' : ''}/pattern-circle.svg`}
        alt="Github Icon"
        width="130"
        height="10"
        className="absolute top-[254px] right-[-65px] overflow-hidden"
      />
      <Header />
      <Introduction />
      <Skills />
      <Project />
      <Footer />
    </main>
  );
}
