// Not Needed Right Now  



// "use client";
// import React, { useState } from "react";

// const imageData = [
//   {
//     id: 1,
//     src: "https://images.unsplash.com/photo-1741715651744-81c5d5e6a3ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D",
//     description: "Picture a location such as a warehouse full of action, where forklifts are speeding around moving heavy loads. Forklifts are a great asset in keeping the flow of work, but they can be dangerous if operated improperly. Forklift danger is a cause of thousands of workplace injuries each year. Keep in mind that providing a safer forklift operation is more than a compliance issue, it is ultimately the lives of your people as well as being an invaluable substitute for lost dollars/time and rewards.   1",
//   },
//   {
//     id: 2,
//     src: "https://images.unsplash.com/photo-1742144897663-6c8c6faaf1ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NXx8fGVufDB8fHx8fA%3D%3D",
//     description: "Picture a location such as a warehouse full of action, where forklifts are speeding around moving heavy loads. Forklifts are a great asset in keeping the flow of work, but they can be dangerous if operated improperly. Forklift danger is a cause of thousands of workplace injuries each year. Keep in mind that providing a safer forklift operation is more than a compliance issue, it is ultimately the lives of your people as well as being an invaluable substitute for lost dollars/time and rewards.   2",
//   },
//   {
//     id: 3,
//     src: "https://images.unsplash.com/photo-1742268351444-7e153a9fb747?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MHx8fGVufDB8fHx8fA%3D%3D",
//     description: "Picture a location such as a warehouse full of action, where forklifts are speeding around moving heavy loads. Forklifts are a great asset in keeping the flow of work, but they can be dangerous if operated improperly. Forklift danger is a cause of thousands of workplace injuries each year. Keep in mind that providing a safer forklift operation is more than a compliance issue, it is ultimately the lives of your people as well as being an invaluable substitute for lost dollars/time and rewards.   3",
//   },
//   {
//     id: 4,
//     src: "https://images.unsplash.com/photo-1742770711842-c29e32ee01d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D",
//     description: "Picture a location such as a warehouse full of action, where forklifts are speeding around moving heavy loads. Forklifts are a great asset in keeping the flow of work, but they can be dangerous if operated improperly. Forklift danger is a cause of thousands of workplace injuries each year. Keep in mind that providing a safer forklift operation is more than a compliance issue, it is ultimately the lives of your people as well as being an invaluable substitute for lost dollars/time and rewards.   4",
//   },
//   {
//     id: 5,
//     src: "https://images.unsplash.com/photo-1742845918430-c6093f93f740?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Nnx8fGVufDB8fHx8fA%3D%3D",
//     description: "Picture a location such as a warehouse full of action, where forklifts are speeding around moving heavy loads. Forklifts are a great asset in keeping the flow of work, but they can be dangerous if operated improperly. Forklift danger is a cause of thousands of workplace injuries each year. Keep in mind that providing a safer forklift operation is more than a compliance issue, it is ultimately the lives of your people as well as being an invaluable substitute for lost dollars/time and rewards.   5",
//   },
//   {
//     id: 6,
//     src: "https://plus.unsplash.com/premium_photo-1742202420319-e933c71d4495?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NXx8fGVufDB8fHx8fA%3D%3D",
//     description: "Picture a location such as a warehouse full of action, where forklifts are speeding around moving heavy loads. Forklifts are a great asset in keeping the flow of work, but they can be dangerous if operated improperly. Forklift danger is a cause of thousands of workplace injuries each year. Keep in mind that providing a safer forklift operation is more than a compliance issue, it is ultimately the lives of your people as well as being an invaluable substitute for lost dollars/time and rewards.   6",
//   },
//   {
//     id: 7,
//     src: "https://images.unsplash.com/photo-1743021192936-56644cc30ac7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4NXx8fGVufDB8fHx8fA%3D%3D",
//     description: "Picture a location such as a warehouse full of action, where forklifts are speeding around moving heavy loads. Forklifts are a great asset in keeping the flow of work, but they can be dangerous if operated improperly. Forklift danger is a cause of thousands of workplace injuries each year. Keep in mind that providing a safer forklift operation is more than a compliance issue, it is ultimately the lives of your people as well as being an invaluable substitute for lost dollars/time and rewards.   7",
//   },
//   {
//     id: 8,
//     src: "https://plus.unsplash.com/premium_photo-1742404277482-4a828585bea2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5NXx8fGVufDB8fHx8fA%3D%3D",
//     description: "Picture a location such as a warehouse full of action, where forklifts are speeding around moving heavy loads. Forklifts are a great asset in keeping the flow of work, but they can be dangerous if operated improperly. Forklift danger is a cause of thousands of workplace injuries each year. Keep in mind that providing a safer forklift operation is more than a compliance issue, it is ultimately the lives of your people as well as being an invaluable substitute for lost dollars/time and rewards.   8",
//   },
// ];

// const GRiddesc = () => {
//   const [selectedDescription, setSelectedDescription] = useState(null);

//   const handleImageClick = (description) => {
//     setSelectedDescription(description);
//   };

//   return (
//     <>
//       <section className="h-screen bg-blue-400">
//         <div style={{ display: "flex", justifyContent: "space-between" }}>
//           <div
//             className="w-1/2 bg-amber-400 h-[100vh]"
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(4, 1fr)",
//               gap: "10px",
//             }}
//           >
//             {imageData.map((image) => (
//               <img
              
//                 key={image.id}
//                 src={image.src}
//                 alt={`Image ${image.id}`}
//                 style={{ width: "100%", height : "100%", cursor: "pointer" }}
//                 onClick={() => handleImageClick(image.description)}
//               />
//             ))}
//           </div>

//           <div
//             className="w-1/2 bg-purple-400 h-[100vh] flex justify-center items-center p-8 text-2xl"
//             style={{
//               width: "50%",
//               padding: "10px",
//               borderLeft: "1px solid #ddd",
//             }}
//           >
//             {selectedDescription && <p>{selectedDescription}</p>}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default GRiddesc;




"use client";
import React, { useState } from "react";

const imageData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1742787584125-d94d44334047?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D",
    description: "Forklift danger is a cause of thousands of workplace injuries each year. This is Image 1.",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1742144897663-6c8c6faaf1ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NXx8fGVufDB8fHx8fA%3D%3D",
    description: "Forklift danger is a cause of thousands of workplace injuries each year. This is Image 2.",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1742268351444-7e153a9fb747?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MHx8fGVufDB8fHx8fA%3D%3D",
    description: "Forklift danger is a cause of thousands of workplace injuries each year. This is Image 3.",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1742770711842-c29e32ee01d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D",
    description: "Forklift danger is a cause of thousands of workplace injuries each year. This is Image 4.",
  },
//   {
//     id: 5,
//     src: "https://images.unsplash.com/photo-1742845918430-c6093f93f740?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Nnx8fGVufDB8fHx8fA%3D%3D",
//     description: "Forklift danger is a cause of thousands of workplace injuries each year. This is Image 5.",
//   },
//   {
//     id: 6,
//     src: "https://plus.unsplash.com/premium_photo-1742202420319-e933c71d4495?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NXx8fGVufDB8fHx8fA%3D%3D",
//     description: "Forklift danger is a cause of thousands of workplace injuries each year. This is Image 6.",
//   },
//   {
//     id: 7,
//     src: "https://images.unsplash.com/photo-1743021192936-56644cc30ac7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4NXx8fGVufDB8fHx8fA%3D%3D",
//     description: "Forklift danger is a cause of thousands of workplace injuries each year. This is Image 7.",
//   },
//   {
//     id: 8,
//     src: "https://plus.unsplash.com/premium_photo-1742404277482-4a828585bea2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5NXx8fGVufDB8fHx8fA%3D%3D",
//     description: "Forklift danger is a cause of thousands of workplace injuries each year. This is Image 8.",
//   },
];

const GRiddesc = () => {
  const [selectedDescription, setSelectedDescription] = useState(null);

  const handleImageClick = (description) => {
    setSelectedDescription(description);
  };

  return (
    <>
      <section className="min-h-screen bg-blue-400 lg:h-screen">
        <div className="flex flex-row h-full">
         
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4 flex-grow lg-h-screen">
            {imageData.map((image) => (
              <img
                key={image.id}
                src={image.src}
                alt={`Image ${image.id}`}
                className="w-full h-full object-cover rounded-lg cursor-pointer"
                onClick={() => handleImageClick(image.description)}
              />
            ))}
          </div>

         
          <div className="bg-purple-400 text-white p-8 text-2xl flex justify-center items-center border-t-2 border-gray-300">
            {selectedDescription ? <p>{selectedDescription}</p> : <p>Select an image</p>}
          </div>
        </div>
      </section>
    </>
  );
};

export default GRiddesc;
