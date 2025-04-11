import Link from "next/link";
import React from "react";

const Smallcontact = () => {
  return (
    <>
      <section className="h-[20vh] mt-90 lg:mt-150">
        <div className="h-auto bg-gray-900">
          <div className="mx-auto  py-20 sm:px-6 sm:py-32 lg:px-8">
            <div className="relative isolate overflow-hidden  px-6 py-24  text-center shadow-2xl sm:rounded-3xl sm:px-16">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white lg:text-5xl sm:text-4xl">
                Unlock the Power of AI
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg  lg:text-2xl leading-8 text-gray-300">
                Sign up now to leverage the capabilities of our AI platform.
                AIHub is currently in beta testing; don't hesitate to contact us
                for any inquiries.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="#"
                  className="rounded-md bg-white px-3.5 py-2.5 lg:text-xl text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get started
                </Link>
                <Link
                  href="mailto:hello@aihub.com"
                  className="lg:text-xl text-sm  font-semibold leading-6 text-white hover:underline hover:underline-offset-2"
                >
                  hello@aihub.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Smallcontact;
