// import React from "react";
// import Photo1 from "./photos/joseph.jpg"
// import { Fade, Slide } from "react-awesome-reveal";

// const CardData = [
//     {
//         id:1,
//         img : Photo1,
//         title : "vIRAT kOHLI",
//         desc: "aCTOR"
//     }
//     {
//         id:2,
//         img : Photo1,
//         title : "vIRAT kOHLI",
//         desc: "aCTOR"
//     }
//     {
//         id:3,
//         img : Photo1,
//         title : "vIRAT kOHLI",
//         desc: "aCTOR"
//     }
// ]

// const Team = () => {
//   return (
//     <>
//       <section className="min-h-screen bg-gradient-to-br from-prinary to-primary/70">
//         <div className="">
//             <h1 className="text-center text-white font-bold text-3xl">Who We Are?</h1>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-6">
//              {
//                 CardData.map(({id,img,title,desc}) => {
//                     return (
//                         <div key={id} className="text-white rounded-lg overflow-hidden relative group">
//                             <img src={img} alt="" className="w-full max-w-[300px] h-[350px] rounded-lg" />
//                             <div className="absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/50 group-hover:backdrop-blur-sm
//                              duration-500 grid place-content-center">
//                                 <Slide cascade>
//                                 <h1 className="text-3xl font-bold">{title}</h1>
//                                 <Fade cascade damping={0.05}>{desc}</Fade>
//                                 </Slide>
//                                 </div>                        </div>
//                     )

//                 })
//              }
//         </div>
//       </section>
//     </>
//   );
// };

// export default Team;

import React from "react";

import { Fade, Slide } from "react-awesome-reveal";

const CardData = [
  {
    id: 1,
    imgg: "https://images.unsplash.com/photo-1596075780750-81249df16d19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    title: "Virat Kohli",
    desc: "Actor",
  },
  {
    id: 2,
    imgg: "https://images.unsplash.com/photo-1527082395-e939b847da0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXRzfGVufDB8fDB8fHww",
    title: "Virat Kohli",
    desc: "Actor",
  },
  {
    id: 3,
    imgg: "https://images.unsplash.com/photo-1527082395-e939b847da0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXRzfGVufDB8fDB8fHww",
    title: "Virat Kohli",
    desc: "Actor",
  },
  {
    id: 4,
    imgg: "https://images.unsplash.com/photo-1527082395-e939b847da0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXRzfGVufDB8fDB8fHww",
    title: "Virat Kohli",
    desc: "Actor",
  },
];

const Team = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <div>
        <h1 className="text-center text-white font-bold text-3xl mb-10">
          Who We Are?
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 md:grid-cols-2 place-items-center gap-4">
        {CardData.map(({ id, imgg, title, desc }) => {
          return (
            <div
              key={id}
              className="text-white rounded-lg overflow-hidden relative group"
            >
              <img
                src={imgg}
                alt={title}
                className="w-[380px] h-[450px] object-cover rounded-lg"
              />
              <div className="absolute left-0 top-[-200%] opacity-0 group-hover:opacity-100 group-hover:top-[0] w-full h-full bg-black/50 group-hover:backdrop-blur-sm duration-500 grid place-content-center">
                <Slide cascade>
                  <h1 className="text-3xl font-bold mb-2">{title}</h1>
                  <Fade cascade damping={0.05}>
                    {desc}
                  </Fade>
                  <Fade>
                    <div className="flex mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="35"
                        height="35"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#0288D1"
                          d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                        ></path>
                        <path
                          fill="#FFF"
                          d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="35"
                        height="35"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#1e88e5"
                          d="M34,42H14c-4.411,0-8-3.589-8-8V14c0-4.411,3.589-8,8-8h20c4.411,0,8,3.589,8,8v20 C42,38.411,38.411,42,34,42z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M35.926,17.488L29.414,24l6.511,6.511C35.969,30.347,36,30.178,36,30V18 C36,17.822,35.969,17.653,35.926,17.488z M26.688,23.899l7.824-7.825C34.347,16.031,34.178,16,34,16H14 c-0.178,0-0.347,0.031-0.512,0.074l7.824,7.825C22.795,25.38,25.205,25.38,26.688,23.899z M24,27.009 c-1.44,0-2.873-0.542-3.99-1.605l-6.522,6.522C13.653,31.969,13.822,32,14,32h20c0.178,0,0.347-0.031,0.512-0.074l-6.522-6.522 C26.873,26.467,25.44,27.009,24,27.009z M12.074,17.488C12.031,17.653,12,17.822,12,18v12c0,0.178,0.031,0.347,0.074,0.512 L18.586,24L12.074,17.488z"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="35"
                        height="35"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#212121"
                          fillRule="evenodd"
                          d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28	c2.209,0,4,1.791,4,4v28C42,40.209,40.209,42,38,42z"
                          clipRule="evenodd"
                        ></path>
                        <path
                          fill="#fff"
                          d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"
                        ></path>
                        <polygon
                          fill="#fff"
                          points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"
                        ></polygon>
                        <polygon
                          fill="#fff"
                          points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"
                        ></polygon>
                      </svg>
                    </div>
                  </Fade>
                </Slide>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Team;
