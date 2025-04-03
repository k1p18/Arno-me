import React from "react";

const Howitswork = () => {
  return (
    <section>
      <div className="relative overflow-hidden bg-gray-900 pt-16 pb-32 space-y-24">
        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-white">
                    Natural Language Processing (NLP):
                  </h2>
                  <p className="mt-4 text-lg text-gray-300">
                    The AI product utilizes advanced NLP algorithms to
                    understand and interpret human language, enabling it to
                    accurately process and analyze text-based inputs.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img
                  loading="lazy"
                  width="647"
                  height="486"
                  className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  style={{ color: "transparent" }}
                  src="https://images.unsplash.com/photo-1569144157591-c60f3f82f137"
                  alt="NLP Image"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
              <div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-white">
                    Sentiment Analysis:
                  </h2>
                  <p className="mt-4 text-lg text-gray-300">
                    The product has built-in sentiment analysis capabilities,
                    allowing it to determine the sentiment (positive, negative,
                    or neutral) expressed in text or customer feedback.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img
                  alt="Sentiment Analysis Interface"
                  loading="lazy"
                  width="647"
                  height="486"
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  style={{ color: "transparent" }}
                  src="https://images.unsplash.com/photo-1599134842279-fe807d23316e"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-white">
                    Natural Language Generation (NLG):
                  </h2>
                  <p className="mt-4 text-lg text-gray-300">
                    The AI product can generate human-like written content,
                    summaries, or reports based on structured data or analysis
                    results.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img
                  loading="lazy"
                  width="646"
                  height="485"
                  className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  style={{ color: "transparent" }}
                  src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e"
                  alt="NLG Image"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
              <div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-white">
                    Sentiment Analysis:
                  </h2>
                  <p className="mt-4 text-lg text-gray-300">
                    The product has built-in sentiment analysis capabilities,
                    allowing it to determine the sentiment (positive, negative,
                    or neutral) expressed in text or customer feedback.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img
                  alt="Sentiment Analysis Interface"
                  loading="lazy"
                  width="647"
                  height="486"
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  style={{ color: "transparent" }}
                  src="https://images.unsplash.com/photo-1599134842279-fe807d23316e"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Howitswork;

// const FeatureCard = ({ title, description, imageUrl, imageAlt }) => {
//   return (
//     <div className="relative">
//       <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
//         <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
//           <div>
//             <div className="mt-6">
//               <h2 className="text-3xl font-bold tracking-tight text-white">
//                 {title}
//               </h2>
//               <p className="mt-4 text-lg text-gray-300">{description}</p>
//             </div>
//           </div>
//         </div>
//         <div className="mt-12 sm:mt-16 lg:mt-0">
//           <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
//             <img
//               alt={imageAlt}
//               loading="lazy"
//               width="647"
//               height="486"
//               className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
//               style={{ color: "transparent" }}
//               src={imageUrl}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Howitswork = () => {
//   return (
//     <section>
//       <div className="relative overflow-hidden bg-gray-900 pt-16 pb-32 space-y-24">
//         <FeatureCard
//           title="Natural Language Processing (NLP)"
//           description="The AI product utilizes advanced NLP algorithms to understand and interpret human language, enabling it to accurately process and analyze text-based inputs."
//           imageUrl="https://images.unsplash.com/photo-1569144157591-c60f3f82f137"
//           imageAlt="AI processing NLP"
//         />
//         <FeatureCard
//           title="Sentiment Analysis"
//           description="The product has built-in sentiment analysis capabilities, allowing it to determine the sentiment (positive, negative, or neutral) expressed in text or customer feedback."
//           imageUrl="https://images.unsplash.com/photo-1599134842279-fe807d23316e"
//           imageAlt="Sentiment analysis interface"
//         />
//         <FeatureCard
//           title="Natural Language Generation (NLG)"
//           description="The AI product can generate human-like written content, summaries, or reports based on structured data or analysis results."
//           imageUrl="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e"
//           imageAlt="Generated content example"
//         />
//       </div>
//     </section>
//   );
// };

// export default Howitswork;
