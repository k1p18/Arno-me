import React from "react";

const Blogpost1 = () => {
  return (
    <>
      <section>
        <div className="text-center pt-16 md:pt-32">
          <p className="text-sm md:text-base text-green-500 font-bold">
            04 AUGUST 2023 <span className="text-gray-900">/</span> GETTING
            STARTED
          </p>
          <h1 className="font-bold break-normal text-3xl md:text-5xl">
            Welcome to Ghostwind CSS
          </h1>
        </div>

        <div
          className="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded"
          style={{
            backgroundImage:
              "url('https://source.unsplash.com/collection/1118905/')",
            height: "75vh",
          }}
        ></div>

        <div className="container max-w-5xl mx-auto -mt-32">
          <div className="mx-0 sm:mx-6">
            <div
              className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal"
              style={{ fontFamily: "Georgia,serif" }}
            >
              <p className="text-2xl md:text-3xl mb-5">
                Welcome fellow{" "}
                <a
                  className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500"
                  href="https://www.tailwindcss.com"
                >
                  Tailwind CSS
                </a>{" "}
                and{" "}
                <a
                  className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500"
                  href="https://www.ghost.org"
                >
                  Ghost
                </a>{" "}
                fan. This starter template is an attempt to replicate the
                default Ghost theme{" "}
                <a
                  className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500"
                  href="https://demo.ghost.io/welcome"
                >
                  "Casper"
                </a>{" "}
                using Tailwind CSS and vanilla Javascript.
              </p>

              <p className="py-6">
                The basic blog page layout is available and all using the
                default Tailwind CSS class names (although there are a few
                hardcoded style tags). If you are going to use this in your
                project, you will want to convert the class names into
                components.
              </p>

              <p className="py-6">
                Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt
                lacus purus, in mattis tortor sollicitudin pretium. Phasellus at
                diam posuere, scelerisque nisl sit amet, tincidunt urna. Cras
                nisi diam, pulvinar ut molestie eget, eleifend ac magna. Sed at
                lorem condimentum, dignissim lorem eu, blandit massa. Phasellus
                eleifend turpis vel erat bibendum scelerisque. Maecenas id risus
                dictum, rhoncus odio vitae, maximus purus. Etiam efficitur dolor
                in dolor molestie ornare. Aenean pulvinar diam nec neque
                tincidunt, vitae molestie quam fermentum. Donec ac pretium diam.
                Suspendisse sed odio risus. Nunc nec luctus nisi. className
                aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos. Duis nec nulla eget sem dictum
                elementum.
              </p>

              <ol>
                <li className="py-3">
                  Maecenas accumsan lacus sit amet elementum porta. Aliquam eu
                  libero lectus. Fusce vehicula dictum mi. In non dolor at sem
                  ullamcorper venenatis ut sed dui. Ut ut est quam. Suspendisse
                  quam quam, commodo sit amet placerat in, interdum a ipsum.
                  Morbi sit amet tellus scelerisque tortor semper posuere.
                </li>
                <li className="py-3">
                  Morbi varius posuere blandit. Praesent gravida bibendum neque
                  eget commodo. Duis auctor ornare mauris, eu accumsan odio
                  viverra in. Proin sagittis maximus pharetra. Nullam lorem
                  mauris, faucibus ut odio tempus, ultrices aliquet ex. Nam id
                  quam eget ipsum luctus hendrerit. Ut eros magna, eleifend ac
                  ornare vulputate, pretium nec felis.
                </li>
                <li className="py-3">
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae; Nunc vitae pretium elit. Cras
                  leo mauris, tristique in risus ac, tristique rutrum velit.
                  Mauris accumsan tempor felis vitae gravida. Cras egestas
                  convallis malesuada. Etiam ac ante id tortor vulputate
                  pretium. Maecenas vel sapien suscipit, elementum odio et,
                  consequat tellus.
                </li>
              </ol>

              <blockquote className="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">
                Crocodiles are easy. They try to kill and eat you. People are
                harder. Sometimes they pretend to be your friend first.
                <br /> - Steve Irwin
              </blockquote>

              <p className="py-6">What's the output?</p>
              <pre className="bg-gray-900 rounded text-white font-mono text-base p-4">
                <code className="break-words whitespace-pre-wrap">
                  let a = 3; let b = new Number(3); let c = 3; console.log(a ==
                  b); console.log(a === b); console.log(b === c);
                </code>
              </pre>
            </div>

            <div className="container font-sans bg-green-100 rounded mt-8 p-4 md:p-24 text-center">
              <h2 className="font-bold break-normal text-2xl md:text-4xl">
                Subscribe to Ghostwind CSS
              </h2>
              <h3 className="font-bold break-normal font-normal text-gray-600 text-base md:text-xl">
                Get the latest posts delivered right to your inbox
              </h3>
              <div className="w-full text-center pt-4">
                <form action="#">
                  <div className="max-w-sm mx-auto p-1 pr-0 flex flex-wrap items-center">
                    <input
                      type="email"
                      placeholder="youremail@example.com"
                      className="flex-1 appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="flex-1 mt-4 md:mt-0 block md:inline-block appearance-none bg-green-500 text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-green-400"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="flex w-full items-center font-sans p-8 md:p-24">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src="http://i.pravatar.cc/300"
                alt="Avatar of Author"
              />
              <div className="flex-1">
                <p className="text-base font-bold text-base md:text-xl leading-none">
                  Ghostwind CSS
                </p>
                <p className="text-gray-600 text-xs md:text-base">
                  Tailwind CSS version of Ghost's Casper theme by{" "}
                  <a
                    className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500"
                    href="https://www.tailwindtoolbox.com"
                  >
                    TailwindToolbox.com
                  </a>
                </p>
              </div>
              <div className="justify-end"></div>
            </div>
          </div>
        </div>

        <button
          className="btn-toggle-round scroll-top js-scroll-top"
          type="button"
          title="Scroll to top"
        >
          <svg
            className="progress-circle"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-arrow-up"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="18" y1="11" x2="12" y2="5" />
            <line x1="6" y1="11" x2="12" y2="5" />
          </svg>
        </button>

        <div className="bg-gray-200">
          <div className="container w-full max-w-6xl mx-auto px-2 py-8">
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/3 px-2 pb-12">
                <div className="h-full bg-white rounded overflow-hidden shadow-md hover:shadow-lg relative smooth">
                  <a href="#" className="no-underline hover:no-underline">
                    <img
                      src="https://source.unsplash.com/_AjqGGafofE/400x200"
                      className="h-48 w-full rounded-t shadow-lg"
                    />
                    <div className="p-6 h-auto md:h-48">
                      <p className="text-gray-600 text-xs md:text-sm">
                        GETTING STARTED
                      </p>
                      <div className="font-bold text-xl text-gray-900">
                        Aperture Science
                      </div>
                      <p className="text-gray-800 font-serif text-base mb-5">
                        I’ll be honest, we’re throwing science at the wall here
                        to see what sticks. No idea what it’ll do. Probably
                        nothing. Best case scenario you might get some
                        superpowers. Worst case, some tumors, which we’ll cut
                        out.
                      </p>
                    </div>
                    <div className="flex items-center justify-between inset-x-0 bottom-0 p-6">
                      <img
                        className="w-8 h-8 rounded-full mr-4"
                        src="http://i.pravatar.cc/300"
                        alt="Avatar of Author"
                      />
                      <p className="text-gray-600 text-xs md:text-sm">
                        2 MIN READ
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-2 pb-12">
                <div className="h-full bg-white rounded overflow-hidden shadow-md hover:shadow-lg relative smooth">
                  <a href="#" className="no-underline hover:no-underline">
                    <img
                      src="https://source.unsplash.com/_AjqGGafofE/400x200"
                      className="h-48 w-full rounded-t shadow"
                    />
                    <div className="p-6 h-auto md:h-48">
                      <p className="text-gray-600 text-xs md:text-sm">
                        UNDERWATER
                      </p>
                      <div className="font-bold text-xl text-gray-900">
                        Biolumini algae diatomeae ecology.
                      </div>
                      <p className="text-gray-800 font-serif text-base mb-5">
                        Lorem ipsum dolor sit. Aliquam at ipsum eu nunc commodo
                        posuere et sit amet ligula.
                      </p>
                    </div>
                    <div className="flex items-center justify-between inset-x-0 bottom-0 p-6">
                      <img
                        className="w-8 h-8 rounded-full mr-4"
                        src="http://i.pravatar.cc/300"
                        alt="Avatar of Author"
                      />
                      <p className="text-gray-600 text-xs md:text-sm">
                        4 MIN READ
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-2 pb-12">
                <div className="h-full bg-white rounded overflow-hidden shadow-md hover:shadow-lg relative smooth">
                  <a href="#" className="no-underline hover:no-underline">
                    <img
                      src="https://source.unsplash.com/DEa8_vxKlEo/400x200"
                      className="h-48 w-full rounded-t shadow"
                    />
                    <div className="p-6 h-auto md:h-48">
                      <p className="text-gray-600 text-xs md:text-sm">FOREST</p>
                      <div className="font-bold text-xl text-gray-900">
                        What is life but a teardrop in the eye of infinity?
                      </div>
                      <p className="text-gray-800 font-serif text-base mb-5">
                        Mollis pretium integer eros et dui orci, lectus nec elit
                        sagittis neque. Dignissim ac nullam semper aliquet
                        volutpat, ut scelerisque.
                      </p>
                    </div>
                    <div className="flex items-center justify-between inset-x-0 bottom-0 p-6">
                      <img
                        className="w-8 h-8 rounded-full mr-4"
                        src="http://i.pravatar.cc/300"
                        alt="Avatar of Author"
                      />
                      <p className="text-gray-600 text-xs md:text-sm">
                        7 MIN READ
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogpost1;
