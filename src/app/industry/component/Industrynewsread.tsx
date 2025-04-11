import React from "react";

const blogs = [
  {
    img: "https://cdn.easyfrontend.com/pictures/blog/blog_12_4.png",
    title: "Decide what type of teacher you want to be",
    date: "Jun 29",
    link: "#",
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/blog/blog_12_3.png",
    title: "How I’m Styling Everyday Black Outfits",
    date: "Aug 15",
    link: "#",
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/blog/blog_12_5.png",
    title: "Long lasting fall scent for women sale offer",
    date: "Sep 17",
    link: "#",
  },
];

const BlogItem = ({ blog }) => {
  const { img, title, link, date } = blog;
  return (
    <div className="w-full sm:w-96">
      <div className="flex  items-start">
        <img
          src={img}
          alt={title}
          width="50"
          className="max-w-full h-auto mr-3"
        />
        <div>
          <a href={link}>
            <h6 className="font-medium mb-2">{title}</h6>
          </a>
          <p className="opacity-75 text-sm">{date}</p>
        </div>
      </div>
    </div>
  );
};

const Contents = () => (
  <div className="max-w-4xl w-full mx-auto flex flex-col items-center text-center px-4">
    <div>
      <h1 className="text-3xl lg:text-5xlfont-bold text-left mb-8">
        How to Pitch a Video Game: 7 Tips for Pitching Games
      </h1>
    </div>
    <div className="rounded-md border dark:border-gray-600 p-6 w-full">
      <img
        src="https://cdn.easyfrontend.com/pictures/blog/blog_9.jpg"
        alt=""
        className="w-full h-[220px] lg:h-[600px]  md:h-full object-cover rounded"
      />
    </div>
    <p className="leading-relaxed text-xl text-justify opacity-75 mt-12">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus deleniti
      doloremque dignissimos nemo accusamus, fuga enim velit nesciunt debitis,
      sint rerum! Inventore, vero. Numquam voluptatum at accusamus quisquam iste
      omnis harum voluptatem temporibus obcaecati, ipsa provident architecto
      illo ea illum, exercitationem totam, ratione consectetur laborum! Beatae,
      non aspernatur officia architecto perspiciatis odio adipisci ducimus
      consectetur? Facilis soluta enim molestiae ratione numquam fugit, dicta
      mollitia atque cupiditate eos debitis esse commodi, eveniet perferendis
      alias! Ab molestias blanditiis, voluptatem quisquam ratione quibusdam in
      pariatur fugiat veritatis consequatur, harum alias eos deleniti dicta! Qui
      necessitatibus, facilis voluptate inventore quod similique voluptates eum,
      repudiandae aliquid ea eveniet itaque et molestias temporibus debitis
      consectetur sit quae modi non minima distinctio hic quasi aspernatur!
      Quas, odit maiores nam veritatis repellat tenetur laboriosam sed incidunt
      accusantium temporibus sequi reiciendis atque qui dolor alias. Recusandae
      unde nostrum nobis laudantium, adipisci incidunt? Ex, praesentium
      exercitationem laudantium consectetur obcaecati illo! Totam nesciunt quos,
      molestias earum aut ea voluptatum non officiis iure! Eaque necessitatibus
      aperiam praesentium animi magnam, quo totam tempore quod impedit
      cupiditate deserunt eveniet unde suscipit, vel consectetur, itaque natus.
      Asperiores eos cupiditate optio quae aut molestiae fugiat alias id,
      tempora, dolorem velit, aliquid assumenda aspernatur veniam rerum
      quisquam!
    </p>
    <div className="flex justify-center my-12 w-full">
      <img
        src="https://cdn.easyfrontend.com/pictures/blog/blog_3.jpg"
        alt=""
        className="w-full max-w-3xl h-auto rounded"
      />
    </div>
    <p className="leading-relaxed text-xl text-justify opacity-75">
      Ab molestias blanditiis, voluptatem quisquam ratione quibusdam in pariatur
      fugiat veritatis consequatur, harum alias eos deleniti dicta! Qui
      necessitatibus, facilis voluptate inventore quod similique voluptates eum,
      repudiandae aliquid ea eveniet itaque et molestias temporibus debitis
      consectetur sit quae modi non minima distinctio hic quasi aspernatur!
      Quas, odit maiores nam veritatis repellat tenetur laboriosam sed incidunt
      accusantium temporibus sequi reiciendis atque qui dolor alias. Recusandae
      unde nostrum nobis laudantium, adipisci incidunt? Ex, praesentium
      exercitationem laudantium consectetur obcaecati illo! Totam nesciunt quos,
      molestias earum aut ea voluptatum non officiis iure! Eaque necessitatibus
      aperiam praesentium animi magnam, quo totam tempore quod impedit
      cupiditate deserunt eveniet unde suscipit, vel consectetur, itaque natus.
      Asperiores eos cupiditate optio quae aut molestiae fugiat alias id,
      tempora, dolorem velit, aliquid assumenda aspernatur veniam rerum
      quisquam!
    </p>
    <div className="mt-12 pt-6 w-full text-left">
      <h4 className="text-2xl font-medium mb-6 text-center">RELATED POSTS</h4>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-12">
        {blogs.map((blog, i) => (
          <BlogItem blog={blog} key={i} />
        ))}
      </div>
    </div>
  </div>
);

const Industrynewsread = () => {
  return (
    <section className="py-14 md:py-24 bg-white text-zinc-900">
      <div className="container mx-auto px-4">
        <Contents />
      </div>
    </section>
  );
};

export default Industrynewsread;
