import aboutImg from "../src/assets/about.jpg";

const About = () => {
  return (
    <section id="about" className="border-b border-neutral-900 pb-4 py-2">
      <h2 className="my-20 text-center text-4xl">About Me</h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <img className="rounded-2xl" src={aboutImg} alt="About" />
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequatur fugiat, architecto commodi culpa dicta quam corporis
              porro necessitatibus suscipit hic provident soluta mollitia
              numquam nostrum eveniet molestias molestiae doloribus dolores?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
