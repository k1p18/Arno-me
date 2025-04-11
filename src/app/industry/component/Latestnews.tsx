import React from "react";
import Link from "next/link";

const Latestnews = () => {
  return (
    <>
      <section className="min-h-screen flex flex-col mx-auto px-5 py-25  bg-black text-white">
        <div className=" lg:ml-78 ml-3 ">
          <h1 className="text-5xl  mb-3 ">News</h1>
        </div>

        <div className="max-w-[1320px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:gap-10 lg:grid-cols-4 gap-8 px-4 sm:px-8 lg:px-0 mt-10">
          <Link href="/Industrynewsread">
            <div className="text-start  cursor-pointer" role="link" aria-label="Read more about NAES x Gecko Partnership">
              <div className="overflow-hidden">
                <img
                  className="hover:scale-115 duration-1000 w-full"
                  src="https://images.ctfassets.net/umpag2v4ugg8/3DfeG8QNlLF9gOgmPvm901/fbcf295c207cbece742d5929654977e1/AdobeStock_271510445.jpeg?w=2000&q=60&fm=avif"
                  alt="Steel"
                />
                <p className="py-2 mt-4">FEB 05 2051</p>
                <h2 className="py-2 mt-2 text-3xl">
                  NAES x Gecko Announce Partnership to Transform the U.S. Power
                  Grid
                </h2>
                <p className="py-2 text-sm ">
                  The companies announced an initial multi-year agreement valued
                  in excess of $100 million to modernize power plants to meet
                  the U.S. energy crisis.
                </p>
              </div>
            </div>
          </Link>

          <Link href="./Industrynewsread">
            <div className="text-start">
              <div className="overflow-hidden">
                <img
                  className="hover:scale-105 duration-1000 w-full"
                  src="https://images.ctfassets.net/umpag2v4ugg8/3DfeG8QNlLF9gOgmPvm901/fbcf295c207cbece742d5929654977e1/AdobeStock_271510445.jpeg?w=2000&q=60&fm=avif"
                  alt="Steel"
                />
                <p className="py-2 mt-4">FEB 05 2051</p>
                <h2 className="py-2 mt-2 text-3xl">
                  NAES x Gecko Announce Partnership to Transform the U.S. Power
                  Grid
                </h2>
                <p className="py-2 text-sm ">
                  The companies announced an initial multi-year agreement valued
                  in excess of $100 million to modernize power plants to meet
                  the U.S. energy crisis.
                </p>
              </div>
            </div>
          </Link>

          <Link href="/industries/steel" passHref>
            <div className="text-start">
              <div className="overflow-hidden">
                <img
                  className="hover:scale-105 duration-1000 w-full"
                  src="https://images.ctfassets.net/umpag2v4ugg8/3DfeG8QNlLF9gOgmPvm901/fbcf295c207cbece742d5929654977e1/AdobeStock_271510445.jpeg?w=2000&q=60&fm=avif"
                  alt="Steel"
                />
                <p className="py-2 mt-4">FEB 05 2051</p>
                <h2 className="py-2 mt-2 text-3xl">
                  NAES x Gecko Announce Partnership to Transform the U.S. Power
                  Grid
                </h2>
                <p className="py-2 text-sm ">
                  The companies announced an initial multi-year agreement valued
                  in excess of $100 million to modernize power plants to meet
                  the U.S. energy crisis.
                </p>
              </div>
            </div>
          </Link>

          <Link href="/industries/steel" passHref>
            <div className="text-start">
              <div className="overflow-hidden">
                <img
                  className="hover:scale-105 duration-1000 w-full"
                  src="https://images.ctfassets.net/umpag2v4ugg8/3DfeG8QNlLF9gOgmPvm901/fbcf295c207cbece742d5929654977e1/AdobeStock_271510445.jpeg?w=2000&q=60&fm=avif"
                  alt="Steel"
                />
                <p className="py-2 mt-4">FEB 05 2051</p>
                <h2 className="py-2 mt-2 text-3xl">
                  NAES x Gecko Announce Partnership to Transform the U.S. Power
                  Grid
                </h2>
                <p className="py-2 text-sm ">
                  The companies announced an initial multi-year agreement valued
                  in excess of $100 million to modernize power plants to meet
                  the U.S. energy crisis.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Latestnews;
