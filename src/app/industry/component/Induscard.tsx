import React from "react";
import Link from "next/link";

const Induscard = () => {
  return (
    <>
      <section className="flex flex-col mx-auto px-5 py-45 h-[100vh] text-white  bg-black ">
        <div className=" mx-auto ">
          <h1 className="text-4xl mb-5 ">Industry</h1>
        </div>

        <div className="max-w-[1320px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:gap-10 lg:grid-cols-4 gap-6 px-4 sm:px-8 lg:px-0 mt-10">
          <Link href="/industries/steel" passHref>
            <div className="cursor-pointer text-start">
              <div className="overflow-hidden">
                <img
                  className="hover:scale-105 duration-1000 h-[350px] w-full"
                  src="https://images.ctfassets.net/umpag2v4ugg8/3DfeG8QNlLF9gOgmPvm901/fbcf295c207cbece742d5929654977e1/AdobeStock_271510445.jpeg?w=2000&q=60&fm=avif"
                  alt="Steel"
                />
              </div>
              <h1 className="text-3xl mt-5">Steel</h1>
            </div>
          </Link>

          <Link href="/industries/steel" passHref>
            <div className=" cursor-pointer text-start">
              <div className="overflow-hidden">
                <img
                  className="hover:scale-105 duration-1000 h-[350px] w-full"
                  src="https://images.ctfassets.net/umpag2v4ugg8/2JSAXPCE6EVVq1LVBOlhNw/d79cdd9bde6b5e65b7e8caaa679a4e68/AdobeStock_644466336__1_.jpeg?w=2000&q=60&fm=avif"
                  alt="Steel"
                />
              </div>
              <h1 className="text-3xl mt-5">Pulp & Paper</h1>
            </div>
          </Link>

          <Link href="/industries/steel" passHref>
            <div className="cursor-pointer text-start">
              <div className="overflow-hidden">
                <img
                  className="hover:scale-105 duration-1000 h-[350px] w-full"
                  src="https://images.ctfassets.net/umpag2v4ugg8/6wwFLGVUT84bTQ5siBHAJp/6e9d79cf956323134808f9c785a60c81/AdobeStock_267155507.jpg?w=2000&q=60&fm=avif"
                  alt="Steel"
                />
              </div>
              <h1 className="text-3xl mt-5">Power</h1>
            </div>
          </Link>

          <Link href="/industries/steel" passHref>
            <div className="cursor-pointer text-start">
              <div className="overflow-hidden">
                <img
                  className="hover:scale-105 duration-1000 h-[350px] w-full"
                  src="https://images.ctfassets.net/umpag2v4ugg8/5bVSxU10mSlLaD51dVcD31/2416ee4c86def7b7970317a77e6429af/AdobeStock_310359662.jpg?w=2000&q=60&fm=avif"
                  alt="Steel"
                />
              </div>
              <h1 className="text-3xl mt-5">Mining</h1>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Induscard;
