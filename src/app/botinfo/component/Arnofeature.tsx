import React from "react";

const Arnofeature = () => {
  return (
    <>
      <section>
        <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6 flex flex-col justify-center items-center">
          <div className="text-center mb-10">
            <h2 className="text-4xl tracking-tight font-bold text-primary-800 mb-4">
              Highlighted Features
            </h2>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-8">
            <div className="flex justify-center items-center">
              <img
                className="w-full xl:h-[650px]"
                src="https://arnobot.in/_next/image?url=%2Fwebsite%2Fbot.png&w=640&q=75"
                alt="can_help_banner"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="bg-white p-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold mb-4">
                  Dynamic Personalization:
                </h3>
                <p className="text-base">
                  Our platform leverages user data and behavior to provide a
                  highly personalized experience, with dynamic content and
                  product recommendations that change in real-time.
                </p>
              </div>

              <div className="bg-white p-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold mb-4">
                  Mobile-Optimized Interface
                </h3>
                <p className="text-base">
                  Our website is designed with a mobile-first approach, offering
                  a seamless browsing experience across all devices, including
                  smartphones and tablets.
                </p>
              </div>

              <div className="bg-white p-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold mb-4">
                  24/7 Customer Support
                </h3>
                <p className="text-base">
                  Our U.S.-based customer support team is available around the
                  clock to answer any questions, resolve any issues, and provide
                  helpful solutions. Whether it's through email, phone, or live
                  chat, we're always here to support you.
                </p>
              </div>

              <div className="bg-white p-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold mb-4">
                  Secure Payment Processing
                </h3>
                <p className="text-base">
                  We use cutting-edge security measures to protect our
                  customers' sensitive information and ensure the safety of all
                  transactions made on our site.
                </p>
              </div>

              <div className="bg-white p-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold mb-4">
                  Secure Payment Processing
                </h3>
                <p className="text-base">
                  We use cutting-edge security measures to protect our
                  customers' sensitive information and ensure the safety of all
                  transactions made on our site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl tracking-tight font-bold text-primary-800">
              Highlighted Features
            </h2>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="mr-0 md:mr-8 mb-6 md:mb-0">
              <img
                className="w-1/2 md:w-full mx-auto"
                src="https://imgs.search.brave.com/_-8qdi0YkxxrW5ZzMiI2A7fRriiF6pZOry7uz9ndgx4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3Lzk2LzU3LzIx/LzM2MF9GXzc5NjU3/MjE5Ml95VXlQTmx6/WkVGUXAyOVpYQkVt/MTg3Qlpqd3hWM1o3/OC5qcGc"
                alt="cx"
              />
            </div>

            <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
              <div className="w-full sm:w-1/2 mb-4 px-2">
                <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                  <h3 className="text-2xl font-bold text-md mb-6">
                    Dynamic Personalization:
                  </h3>
                  <p className="text-sm">
                    Our platform leverages user data and behavior to provide a
                    highly personalized experience, with dynamic content and
                    product recommendations that change in real-time.
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 mb-4 px-2">
                <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                  <h3 className="text-2xl font-bold text-md mb-6">
                    Mobile-Optimized Interface
                  </h3>
                  <p className="text-sm">
                    Our website is designed with a mobile-first approach,
                    offering a seamless browsing experience across all devices,
                    including smartphones and tablets.
                  </p>
                </div>
              </div>

              <div className="w-full sm:w-1/2 mb-4 px-2">
                <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                  <h3 className="text-2xl font-bold text-md mb-6">
                    24/7 Customer Support
                  </h3>
                  <p className="text-sm">
                    Our U.S.-based customer support team is available around the
                    clock to answer any questions, resolve any issues, and
                    provide helpful solutions. Whether it's through email,
                    phone, or live chat, we're always here to support you.
                  </p>
                </div>
              </div>

              <div className="w-full sm:w-1/2 mb-4 px-2">
                <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                  <h3 className="text-2xl font-bold text-md mb-6">
                    Secure Payment Processing
                  </h3>
                  <p className="text-sm">
                    We use cutting-edge security measures to protect our
                    customers' sensitive information and ensure the safety of
                    all transactions made on our site.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Arnofeature;
