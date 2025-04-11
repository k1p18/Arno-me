import React from "react";
import Arnofeature from "./component/Arnofeature";
import Botcapability from "./component/Botcapability";
import Capability from "./component/Capability";
import Robotquality from "./component/Robotquality";

const Botinfo = () => {
  return (
    <>
      <Robotquality />
      <Arnofeature />

      <Botcapability />

      <Capability />
    </>
  );
};

export default Botinfo;
