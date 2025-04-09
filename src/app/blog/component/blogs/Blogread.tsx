import React from "react";

const Blogread = () => {
  return (
    <>
      {/* <section>
        <div className="text-center pt-16 md:pt-32">
          <p className="text-sm md:text-base text-green-500 font-bold">
            04 AUGUST 2023 <span className="text-gray-900">/</span> GETTING
            STARTED
          </p>
          <h1 className="font-bold break-normal text-3xl md:text-5xl">
            Welcome to Blog 
          </h1>
        </div>

        <div
          className="container w-full xl:max-w-6xl asm:w-auto xsm:w-auto mx-auto bg-white bg-cover mt-8 rounded"
          style={{
            backgroundImage:
              "url('https://www.animesenpai.net/wp-content/uploads/2025/04/u-61.webp')",
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
            </div>
          </div>
        </div>

      </section> */}

      <section>
        {/* Title Section */}
        <div className="text-center pt-16 md:pt-32">
          <p className="text-sm md:text-base text-green-500 font-bold">
            04 AUGUST 2023 <span className="text-gray-900">/</span> GETTING
            STARTED
          </p>
          <h1 className="font-bold break-normal text-3xl md:text-5xl">
            Welcome to Blog
          </h1>
        </div>

        {/* Background Image Section */}
        <div
          className="container w-full  xl:max-w-6xl mx-auto  bg-cover mt-8 rounded"
          style={{
            backgroundImage:
              "url('https://www.animesenpai.net/wp-content/uploads/2025/04/u-61.webp')",
            height: "75vh",
          }}
        >
          {/* You can add an overlay or additional content inside this div if needed */}
        </div>

        {/* Main Content Section */}
        <div className="container max-w-5xl mx-auto -mt-32 px-6 md:px-8">
          <div
            className="bg-white w-full p-8 md:p-16 text-xl md:text-2xl text-gray-800 leading-normal"
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
              fan. This starter template is an attempt to replicate the default
              Ghost theme{" "}
              <a
                className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500"
                href="https://demo.ghost.io/welcome"
              >
                "Casper"
              </a>{" "}
              using Tailwind CSS and vanilla JavaScript.
            </p>

            <p className="py-6">
              The basic blog page layout is available and all using the default
              Tailwind CSS class names (although there are a few hardcoded style
              tags). If you are going to use this in your project, you will want
              to convert the class names into components.
            </p>

            <p className="py-6">
              Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt lacus
              purus, in mattis tortor sollicitudin pretium. Phasellus at diam
              posuere, scelerisque nisl sit amet, tincidunt urna. Cras nisi
              diam, pulvinar ut molestie eget, eleifend ac magna. Sed at lorem
              condimentum, dignissim lorem eu, blandit massa. Phasellus eleifend
              turpis vel erat bibendum scelerisque. Maecenas id risus dictum,
              rhoncus odio vitae, maximus purus. Etiam efficitur dolor in dolor
              molestie ornare. Aenean pulvinar diam nec neque tincidunt, vitae
              molestie quam fermentum. Donec ac pretium diam. Suspendisse sed
              odio risus. Nunc nec luctus nisi. className aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos.
              Duis nec nulla eget sem dictum elementum.
            </p>

            <ol>
              <li className="py-3">
                Maecenas accumsan lacus sit amet elementum porta. Aliquam eu
                libero lectus. Fusce vehicula dictum mi. In non dolor at sem
                ullamcorper venenatis ut sed dui. Ut ut est quam. Suspendisse
                quam quam, commodo sit amet placerat in, interdum a ipsum. Morbi
                sit amet tellus scelerisque tortor semper posuere.
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
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Nunc vitae pretium elit. Cras leo mauris,
                tristique in risus ac, tristique rutrum velit. Mauris accumsan
                tempor felis vitae gravida. Cras egestas convallis malesuada.
                Etiam ac ante id tortor vulputate pretium. Maecenas vel sapien
                suscipit, elementum odio et, consequat tellus.
              </li>
            </ol>

            <blockquote className="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">
              Crocodiles are easy. They try to kill and eat you. People are
              harder. Sometimes they pretend to be your friend first.
              <br /> - Steve Irwin
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogread;
