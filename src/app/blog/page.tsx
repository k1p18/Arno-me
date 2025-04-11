import React from "react";
import Blogpost from "./Blogpost";
import Blogread from "./component/blogs/Blogread";
import Blogread1 from "./component/blogs/Blogread1";

const Blogpage = () => {
  return (
    <>
      <Blogpost/>
      <Blogread />
      <Blogread1 />
    </>
  );
};

export default Blogpage;
