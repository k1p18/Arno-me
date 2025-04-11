import React from "react";

const Arnofeature = () => {
  return (
    <>
      {/* <section className="w-screen ">
        <div className=" mx-auto py-8 px-8 lg:py-16 lg:px-6 flex flex-col justify-center items-center">
          <div className="text-center mb-10">
            <h2 className="text-4xl tracking-tight font-bold text-primary-800 mb-4">
              Highlighted Features
            </h2>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-8">
            <div className="flex justify-center items-center bg-amber-800">
              <img
                className="w-[650px] xl:h-[650px]"
                src="https://arnobot.in/_next/image?url=%2Fwebsite%2Fbot.png&w=640&q=75"
                alt="can_help_banner"
              />
            </div>

            <div className="flex justify-center items-center bg-red-300">
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
                    Our website is designed with a mobile-first approach,
                    offering a seamless browsing experience across all devices,
                    including smartphones and tablets.
                  </p>
                </div>

                <div className="bg-white p-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                  <h3 className="text-2xl font-bold mb-4">
                    24/7 Customer Support
                  </h3>
                  <p className="text-base">
                    Our U.S.-based customer support team is available around the
                    clock to answer any questions, resolve any issues, and
                    provide helpful solutions. Whether it's through email,
                    phone, or live chat, we're always here to support you.
                  </p>
                </div>

                <div className="bg-white p-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                  <h3 className="text-2xl font-bold mb-4">
                    Secure Payment Processing
                  </h3>
                  <p className="text-base">
                    We use cutting-edge security measures to protect our
                    customers' sensitive information and ensure the safety of
                    all transactions made on our site.
                  </p>
                </div>

                <div className="bg-white p-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                  <h3 className="text-2xl font-bold mb-4">
                    Secure Payment Processing
                  </h3>
                  <p className="text-base">
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

      <section className="w-[98vw]">
        <div className="mx-auto py-8 px-4 lg:py-35 lg:px-6 flex flex-col items-center">
          <div className="text-center mb-10">
            <h2 className="text-4xl tracking-tight font-bold text-primary-800 mb-4">
              Highlighted Features
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row w-full gap-8 items-stretch">
            <div className="lg:w-2/5 w-full flex justify-center items-center">
              <img
                className="w-full max-w-[600px] h-full object-contain p-4"
                src="https://arnobot.in/_next/image?url=%2Fwebsite%2Fbot.png&w=640&q=75"
                alt="can_help_banner"
              />
            </div>

            <div className="lg:w-3/5 w-full flex items-center ">
              <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1  gap-6 p-4 w-full">
                {[
                  {
                    title: "Dynamic Personalization:",
                    desc: "Our platform leverages user data and behavior to provide a highly personalized experience, with dynamic content and product recommendations that change in real-time.",
                  },
                  {
                    title: "Mobile-Optimized Interface",
                    desc: "Our website is designed with a mobile-first approach, offering a seamless browsing experience across all devices, including smartphones and tablets.",
                  },
                  {
                    title: "24/7 Customer Support",
                    desc: "Our U.S.-based customer support team is available around the clock to answer any questions, resolve any issues, and provide helpful solutions.",
                  },
                  {
                    title: "Secure Payment Processing",
                    desc: "We use cutting-edge security measures to protect our customers' sensitive information and ensure the safety of all transactions made on our site.",
                  },
                  {
                    title: "Multiple Payment Options",
                    desc: "We support a variety of secure payment methods including credit cards, PayPal, UPI, and more to make your checkout smooth and flexible.",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl"
                  >
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-base">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Arnofeature;
