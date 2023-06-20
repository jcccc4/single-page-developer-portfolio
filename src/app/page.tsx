import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative max-w-screen overflow-x-hidden  overflow-y-hidden ">
      <Image
        src="single-page-developer-portfolio/pattern-rings.svg"
        alt="Github Icon"
        width="530"
        height="129"
        className="absolute min-w-[530px] top-[124px] -left-[342px]"
      />
      <Image
        src="single-page-developer-portfolio/pattern-circle.svg"
        alt="Github Icon"
        width="130"
        height="10"
        className="absolute top-[254px] right-[-65px] overflow-hidden"
      />
      <header className="flex flex-col justify-between items-center w-[154px] m-auto  gap-5 relative">
        <h1 className="text-name font-bold">adamkeyes</h1>
        <section className="flex justify-between w-full">
          <Image
            src="single-page-developer-portfolio/icon-github.svg"
            alt="Github Icon"
            width="24"
            height="24"
          />
          <Image
            src="single-page-developer-portfolio/icon-frontend-mentor.svg"
            alt="Frontend Mentor"
            width="24"
            height="22"
          />
          <Image
            src="single-page-developer-portfolio/icon-linkedin.svg"
            alt="Linkedin"
            width="24"
            height="24"
          />
          <Image src="single-page-developer-portfolio/icon-twitter.svg" alt="Twitter" width="23" height="18" />
        </section>
        <div className="w-[174px] h-[242px]">
          <Image
            src="single-page-developer-portfolio/image-profile-mobile.webp"
            alt="Profile Picture"
            width="174"
            height="242"
            className="absolute top-0 left-0"
          />
        </div>
      </header>
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
      <section className="skillGrid ">
        <section>
          <section className="skill">HTML</section>
          <p>4 Years Experience</p>
        </section>
        <section>
          <section className="skill">CSS</section>
          <p>4 Years Experience</p>
        </section>
        <section>
          <section className="skill">Javascript</section>
          <p>4 Years Experience</p>
        </section>
        <section>
          <section className="skill">Accessibility</section>
          <p>4 Years Experience</p>
        </section>
        <section>
          <section className="skill">React</section>
          <p>3 Years Experience</p>
        </section>
        <section>
          <section className="skill">Sass</section>
          <p>3 Years Experience</p>
        </section>
      </section>
      <section className="projectSection">
        <section className="projectHeader">
          <h2>Projects</h2>
          <Link href="/">CONTACT ME</Link>
        </section>
        <section className="projectList">
          <article className="projectItem">
            <section className="projectImage">
              <Image
                src="single-page-developer-portfolio/thumbnail-project-1-large.webp"
                alt="Twitter"
                width="343"
                height="253"
              />
            </section>
            <section className="projectContent">
              <h3 className="projectTitle">DESIGN PORTFOLIO</h3>
              <section className="builtBy">
                <p>HTML</p>
                <p>CSS</p>
              </section>
            </section>
            <section className="projectLinks">
              <Link href="/" className="w-[138px]">
                VIEW PROJECT
              </Link>
              <Link href="/" className="w-[103px]">
                VIEW CODE
              </Link>
            </section>
          </article>

          <article className="projectItem">
            <Image
              src="single-page-developer-portfolio/thumbnail-project-2-large.webp"
              alt="Twitter"
              width="343"
              height="253"
            />

            <section className="projectContent">
              <h3 className="projectTitle">E-LEARNING LANDING PAGE</h3>
              <section className="builtBy">
                <p>HTML</p>
                <p>CSS</p>
              </section>
            </section>
            <section className="projectLinks">
              <Link href="/" className="w-[138px]">
                VIEW PROJECT
              </Link>
              <Link href="/" className="w-[103px]">
                VIEW CODE
              </Link>
            </section>
          </article>
          <article className="projectItem">
            <section className="projectImage">
              <Image
                src="single-page-developer-portfolio/thumbnail-project-3-large.webp"
                alt="Twitter"
                width="343"
                height="253"
              />
            </section>
            <section className="projectContent">
              <h3 className="projectTitle">TODO WEB APP</h3>
              <section className="builtBy">
                <p>HTML</p>
                <p>CSS</p>
              </section>
            </section>
            <section className="projectLinks">
              <Link href="/" className="w-[138px]">
                VIEW PROJECT
              </Link>
              <Link href="/" className="w-[103px]">
                VIEW CODE
              </Link>
            </section>
          </article>
          <article className="projectItem">
            <section className="projectImage">
              <Image
                src="single-page-developer-portfolio/thumbnail-project-4-large.webp"
                alt="Twitter"
                width="343"
                height="253"
              />
            </section>
            <section className="projectContent">
              <h3 className="projectTitle">ENTERTAINMENT WEB APP</h3>
              <section className="builtBy">
                <p>HTML</p>
                <p>CSS</p>
              </section>
            </section>
            <section className="projectLinks">
              <Link href="/" className="w-[138px]">
                VIEW PROJECT
              </Link>
              <Link href="/" className="w-[103px]">
                VIEW CODE
              </Link>
            </section>
          </article>
          <article className="projectItem">
            <section className="projectImage">
              <Image
                src="single-page-developer-portfolio/thumbnail-project-5-large.webp"
                alt="Twitter"
                width="343"
                height="253"
              />
            </section>
            <section className="projectContent">
              <h3 className="projectTitle">MEMORY GAME</h3>
              <section className="builtBy">
                <p>HTML</p>
                <p>CSS</p>
              </section>
            </section>
            <section className="projectLinks">
              <Link href="/" className="w-[138px]">
                VIEW PROJECT
              </Link>
              <Link href="/" className="w-[103px]">
                VIEW CODE
              </Link>
            </section>
          </article>
          <article className="projectItem">
            <section className="projectImage">
              <Image
                src="single-page-developer-portfolio/thumbnail-project-6-large.webp"
                alt="Twitter"
                width="343"
                height="253"
              />
            </section>
            <section className="projectContent">
              <h3 className="projectTitle">ART GALLERY SHOWCASE</h3>
              <section className="builtBy">
                <p>HTML</p>
                <p>CSS</p>
              </section>
            </section>
            <section className="projectLinks">
              <Link href="/" className="w-[138px]">
                VIEW PROJECT
              </Link>
              <Link href="/" className="w-[103px]">
                VIEW CODE
              </Link>
            </section>
          </article>
        </section>
      </section>
    </main>
  );
}
