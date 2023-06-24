import Skills from "@/components/Skills";
import Project from "@/components/Project";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BackgroundImage from "@/components/BackgroundImage";

export default function Home() {
  return (
    <main className="relative max-w-screen overflow-x-hidden  overflow-y-hidden ">
      <BackgroundImage />
      <Header />
      <Skills />
      <Project />
      <Footer />
    </main>
  );
}
