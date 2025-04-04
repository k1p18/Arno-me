// pAste in App.js// import '@fortawesome/fontawesome-free/css/all.min.css';

import React from "react";
// import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faCannabis,
  faRandom,
  faYinYang,
} from "@fortawesome/free-solid-svg-icons";

const features = [
  {
    icon: faCannabis,
    title: "Product Design",
    desc: "You first land evening beast won't had bring first void meat.",
  },
  {
    icon: faCamera,
    title: "Branding",
    desc: "Whose living for moving female seas heaven unto winged.",
  },
  {
    icon: faRandom,
    title: "Digital Marketing",
    desc: "Moving seasons, tree you're creeping third behold may be.",
  },
  {
    icon: faYinYang,
    title: "SEO Analytics",
    desc: "Third abundantly us after cattle won't is land heaven us.",
  },
];

const OfferItem = ({ feature }) => {
  return (
    <div className="p-4 mt-4 lg:mt-0">
      <div className="text-center p-6">
        <div className="w-16 h-16 rounded-xl text-2xl inline-flex items-center justify-center bg-blue-600 text-white mb-6">
          <FontAwesomeIcon icon={feature.icon} />
        </div>
        <h4 className="text-2xl font-medium mb-4">{feature.title}</h4>
        <p className="opacity-80">{feature.desc}</p>
      </div>
    </div>
  );
};

// OfferItem.propTypes = {
//   feature: PropTypes.object.isRequired,
// };

const Whatweoffer = () => {
  return (
    <section className="py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
      <div className="container px-4 mx-auto">
        <div className="flex max-w-5xl justify-center text-center mx-auto md:mb-6">
          <div>
            <h2 className="text-3xl font-bold leading-tight md:text-[45px] mb-4">
              What we Offer
            </h2>
            <p className="text-lg opacity-80 leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              ut ratione voluptatem blanditiis, voluptas illum tempore magni
              quam veniam provident porro voluptate nulla corporis consequuntur
              ab possimus. Modi quia nam repellendus.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 pt-12 gap-8">
          <div className="col-span-12 lg:col-span-4 lg:order-2">
            <div
              className="bg-center bg-no-repeat bg-cover rounded-2xl h-full min-h-[400px]"
              style={{
                backgroundImage:
                  "url(https://cdn.easyfrontend.com/pictures/portfolio/portfolio22.jpg)",
              }}
            />
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            {features.slice(0, 2).map((feature, i) => (
              <OfferItem feature={feature} key={i} />
            ))}
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4 lg:order-3">
            {features.slice(2).map((feature, i) => (
              <OfferItem feature={feature} key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whatweoffer;
