import React from "react";

const Workrecord2 = () => {
  const promos = [
    {
      id: 1,
      href: "#link",
      name: "New Women's Collection",
      category: "Special Collection",
      imageSrc:
        "https://fancytailwind.com/static/model-woman8-4e92921383ab2888528ffdc9f566eafb.jpg",
      imageAlt: "description of the image",
    },
    {
      id: 2,
      href: "#link",
      name: "Fashion Men's Collection",
      category: "New Collection",
      imageSrc:
        "https://fancytailwind.com/static/model-man4-1a58d69f5a66b84cef1c0e0898302c83.jpg",
      imageAlt: "description of the image",
    },
    {
      id: 3,
      href: "#link",
      name: "Summer 21/22 Collection",
      category: "Summer Sales",
      imageSrc:
        "https://fancytailwind.com/static/model-woman9-b1d407159c1fb46b4b69d7567ca302b0.jpg",
      imageAlt: "description of the image",
    },
  ];

  return (
    <>
      <section className="relative  w-full h-[100vh] bg-white">
        <div className="mx-auto py-35 px-8 ">
          <h2 className="relative mb-8 text-center text-4xl  text-gray-700 font-medium">
            Work Record
          </h2>

          <div className="relative mx-auto h-[500px] grid grid-cols-1 md:grid-cols-3 gap-6">
            {promos.map((promo) => (
              <div
                key={promo.id}
                className="col-span-1 group relative aspect-w-3 md:aspect-w-2 aspect-h-3 shadow rounded overflow-hidden"
              >
                <a
                  href={promo.href}
                  className="py-5 pl-8 pr-4 w-full flex flex-col justify-end items-start"
                >
                  <img
                    src={promo.imageSrc}
                    alt={promo.imageAlt}
                    className="absolute inset-0 w-full md:h-full h-auto  object-cover object-top transition duration-200 ease-in transform group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black opacity-90" />

                  <div className="relative py-5  space-y-3 text-white text-opacity-90 group-hover:text-opacity-100">
                    <p className="text-sm font-medium">{promo.category}</p>

                    <h3 className="text-md lg:text-2xl font-bold">
                      {promo.name}
                    </h3>

                    <p className="text-sm font-semibold underline">Discover</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Workrecord2;
