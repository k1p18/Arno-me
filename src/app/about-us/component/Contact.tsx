import React from "react";

export const Contact = () => {
  return (
    <>
      <section className="min-h-[35vh]">
        <div className="bg-white">
          <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Unlock the Power of AI
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                Sign up now to leverage the capabilities of our AI platform.
                AIHub is currently in beta testing; don't hesitate to contact us
                for any inquiries.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get started
                </a>
                <a
                  href="mailto:hello@aihub.com"
                  className="text-sm font-semibold leading-6 text-white hover:underline hover:underline-offset-2"
                >
                  hello@aihub.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
