import * as React from "react";
import Identity from "./Identity";

export default function Footer() {
  return (
   
<footer className="footer">
    <section className="contact">
      <h2>Contact</h2>
      <p>
        I would love to hear about your project and how I could help. Please
        fill in the form, and I&apos;ll get back to you as soon as possible.
      </p>
    </section>

    <form id="form" className="w-[343px] mx-auto mt-[50px] ">
      <section className="relative border-b h-[43px]">
        <label>
          <span className="border-none uppercase opacity-50 text-paragraph absolute left-6 no-underline tracking-[-0.222222px]">
            Name
          </span>
          <input
            type="text"
            className="bg-transparent  w-full focus:outline-0 absolute bottom-0 left-6"
          />
        </label>
      </section>
      <section className="relative border-b h-[43px]  mt-8">
        <label>
          <span className="border-none uppercase opacity-50 text-paragraph absolute left-6 no-underline tracking-[-0.222222px]">
            Email
          </span>
          <input
            type="text"
            className="bg-transparent  w-full focus:outline-0 absolute bottom-0 left-6"
          />
        </label>
      </section>
      <section className="relative border-b h-[107px] mt-8">
        <label>
          <span className="border-none uppercase opacity-50 text-paragraph absolute left-6 no-underline tracking-[-0.222222px]">
            Message
          </span>
          <input
            type="text"
            className="bg-transparent pt-6 w-full focus:outline-0  absolute bottom-0 left-6"
          />
        </label>
      </section>
      <section className="relative m-auto w-[343px] flex justify-end">
        <button className="uppercase underline decoration-[#4EE1A0] decoration-2  underline-offset-[18px] mt-8">
          Send message
        </button>
      </section>
    </form>
    <hr className="h-0.5 mt-[87px] bg-gray-200 border-0 w-[343px] m-auto"></hr>

    <section className="mt-10 w-[154px] m-auto">
      <Identity />
    </section>
  </footer>
  );
}
