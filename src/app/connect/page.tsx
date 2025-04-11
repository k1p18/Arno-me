import React from "react";
import Certificateimg from "./component/Certificateimg";
import Certificates from "./component/Certificates";
import Teamconnect from "./component/Teamconnect";
import Whatweoffer from "./component/Whatweoffer";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import "swiper/swiper-bundle.min.css";

import Workspace from "./component/Workspace";
import Workslider from "./component/Workslider";
import SwipeCarousel from "./component/Workslider";
// import Workslider from "./component/Workslider";

const Connects = () => {
  return (
    <>
      <Certificateimg/>
      <Certificates/>

      <Teamconnect/>

      <Whatweoffer /> 



    <Workslider/>




    {/* getting an error   */}
      {/* <Workspace/> */}


    </>
  );
};

export default Connects;
