import { Component } from "solid-js";
import AppButton from "./Button";

const ContactForm: Component = () => {
  return (
    <div class="p-8 bg-gray-100">
      <div class="flex flex-col md:flex-row justify-center md:max-w-screen-lg md:mx-auto">
        <div class="md:w-2/5">
          <h1 class="group flex items-center py-3">
            <span class="mr-4 h-px w-8 bg-foreground"></span>
            <span class="text-xs font-bold uppercase tracking-widest text-foreground">
              Let's Connect
            </span>
            <span class="ml-3 -mt-[5px]" role="img" aria-label="mail">
              💌
            </span>
          </h1>
          <p class="mb-4">
            If you want to know more about me or my work, or you like good
            things(fast websites), send me a message. I'd love to hear from you.
          </p>
        </div>
        <form class="flex flex-col space-y-4 md:w-3/5 md:px-10">
          <label
            for="name"
            class="block text-xs font-bold uppercase text-slate-900"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            class="p-2 border border-gray-300 rounded !mt-1"
          />
          <label
            for="email"
            class="block text-xs font-bold uppercase text-slate-900"
          >
            Email
          </label>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Enter your email"
            class="p-2 border border-gray-300 rounded !mt-1"
          />
          <label
            for="message"
            class="block text-xs font-bold uppercase text-slate-900"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Enter your message"
            class="p-2 border border-gray-300 rounded h-32 !mt-1"
          />
          <div class="flex flex-row justify-between items-center w-full">
            <AppButton text="Send email directly" variant="link" />
            <AppButton text="Send message" size="lg" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
