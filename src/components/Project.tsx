import * as React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Project() {
  return (
    <section className="projectSection">
      <section className="projectHeader">
        <h2>Projects</h2>
        <Link href="/">CONTACT ME</Link>
      </section>
      <section className="projectList">
        <article className="projectItem">
          <section className="projectImage">
            <Image
              src="/thumbnail-project-1-large.webp"
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
            src="/thumbnail-project-2-large.webp"
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
              src="/thumbnail-project-3-large.webp"
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
              src="/thumbnail-project-4-large.webp"
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
              src="/thumbnail-project-5-large.webp"
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
              src="/thumbnail-project-6-large.webp"
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
  );
}
