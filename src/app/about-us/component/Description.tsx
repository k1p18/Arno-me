import React from "react";

const Description = () => {
  return (
    <>
      <section className="h-screen">
        <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row border-2">
          <div className="w-1/2 bg-red-400 h-full">
            <img
              src="https://images.unsplash.com/photo-1662340874040-b4109f184d07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNyYXdsZXJ8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </div>
          <div className="w-1/2 bg-green-400 h-full border-2">
            <p>
              Fancy Components is an innovative web development tool that offers
              a growing library of reusable React components and
              microinteractions, all wrapped up in a free and open-source
              package. This website is designed to make it easy for developers
              to create visually stunning and interactive websites with minimal
              effort.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Description;
