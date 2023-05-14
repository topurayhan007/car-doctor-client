/* eslint-disable react/no-unescaped-entities */
const About = () => {
  return (
    <div className="flex justify-center my-32">
      <div className="hero min-h-screen lg:w-[1280px]">
        <div className="hero-content flex-col lg:flex-row justify-between gap-8">
          <div className="flex-1 relative w-full">
            <div className="top-0 left-0 rounded-lg w-4/5">
              <img
                src="/assets/images/about_us/person.jpg"
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
            <div className="rounded-lg w-1/2 h-full absolute -bottom-1/2 right-0 border-[8px] border-white">
              <img
                src="/assets/images/about_us/parts.jpg"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="flex-1">
            <h1 className="text-lg font-bold mb-5 text-[#FF3811]">About Us</h1>
            <h1 className="text-5xl font-bold">
              We are qualified <br /> & of experience <br /> in this field
            </h1>
            <p className="pt-6 pb-3 capitalize text-[#737373]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p className="pb-6 capitalize text-[#737373]">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
            <button className="btn bg-[#FF3811]  text-white normal-case hover:bg-[#f65b3c] text-lg border-0">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
