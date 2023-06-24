"use client";

import * as React from "react";
import Identity from "./Identity";
import next from "next/types";

export default function Footer() {
  const onfocusHandler = (e: React.FocusEvent<HTMLInputElement>): void => {
    const previousSibling = e.target.previousElementSibling;
    previousSibling?.classList.add("invisible");
  };
  const onblurHandler = (e: React.FocusEvent<HTMLInputElement>): void => {
    const previousSibling = e.target.previousElementSibling;
    const nextSibling = e.target.nextElementSibling;
    e.target.value || previousSibling?.classList.remove("invisible");
    nextSibling?.classList.add("invisible");
    e.target.parentElement?.parentElement?.classList.remove("border-[#4EE1A0]");
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    
    console.log(e.target.type ==='email');
    (e.target.type === 'email')?validateEmail(e):validateString(e);
  };

  const validateEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const nextSibling = e.target.nextElementSibling;
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)) {
      nextSibling?.classList.add("invisible");
      e.target.parentElement?.parentElement?.classList.add("border-[#4EE1A0]");
   } else {
      nextSibling?.classList.remove("invisible"); 
      e.target.parentElement?.parentElement?.classList.remove("border-[#4EE1A0]");
 
    }
   console.log(e.target.parentElement?.parentElement?.classList) 
  };
  const validateString = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.target.value
      ? e.target.parentElement?.parentElement?.classList.add("border-[#4EE1A0]")
      : e.target.parentElement?.parentElement?.classList.remove("border-[#4EE1A0]");
  };
  return (
    <>
      <footer className="footer ">
        <section className="lg:flex lg:justify-between">
          <section className="contact lg:text-left">
            <h2>Contact</h2>
            <p className="mt-5 md:text-left lg:mt-9">
              I would love to hear about your project and how I could help.
              Please fill in the form, and I&apos;ll get back to you as soon as
              possible.
            </p>
          </section>

          <form
            id="form"
            className="w-[343px] mx-auto mt-[50px] md:w-[445px] lg:mt-[84px] lg:mx-0 "
          >
            <section className="relative border-b h-[43px] ">
              <label>
                <span className="border-none uppercase opacity-50 text-paragraph absolute left-6 no-underline tracking-[-0.222222px]">
                  Name
                </span>
                <input
                  type="text"
                  className="bg-transparent w-full focus:outline-0 absolute bottom-0 left-6 pb-4 autofill:bg-transparent autofill:text-red-400"
                  onFocus={onfocusHandler}
                  onBlur={onblurHandler}
                  onChange={onChangeHandler}
                />
              </label>
            </section>
            <section className="relative border-b h-[43px]  mt-8">
              <label>
                <span className="border-none uppercase opacity-50 text-paragraph absolute left-6 no-underline tracking-[-0.222222px]">
                  Email
                </span>
                <input
                  type="email"
                  className="bg-transparent w-full peer/mail focus:outline-0 absolute bottom-0 left-6 pb-4"
                  onFocus={onfocusHandler}
                  onBlur={onblurHandler}
                  onChange={onChangeHandler}
                />
                <p className="absolute bottom-[-18px] right-0 invisible  text-[#FF6F5B] text-wrongInput ">
                  Sorry, invalid format here
                </p>
              </label>
            </section>
            <section className="relative border-b h-[107px] mt-8">
              <label>
                <span className="border-none uppercase opacity-50 text-paragraph absolute left-6 no-underline tracking-[-0.222222px]">
                  Message
                </span>
                <input
                  type="text"
                  className="bg-transparent pt-6 w-full focus:outline-0  absolute bottom-0 left-6 pb-4"
                  onFocus={onfocusHandler}
                  onBlur={onblurHandler}
                  onChange={onChangeHandler}
                />
              </label>
            </section>
            <section className="relative m-auto w-[343px] flex justify-end md:w-[443px]">
              <button className="uppercase underline decoration-[#4EE1A0] decoration-2  underline-offset-[18px] mt-8">
                Send message
              </button>
            </section>
          </form>
        </section>
        <hr className="h-0.5 mt-[87px] bg-gray-200 border-0 w-[343px] m-auto  md:w-[706px] md:mt-[92px] lg:w-auto"></hr>

        <section className="mt-10 w-[154px] md:w-[706px] m-auto md:mt-[30px] lg:w-auto">
          <Identity />
        </section>
      </footer>
    </>
  );
}
