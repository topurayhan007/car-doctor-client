const Banner = () => {
  return (
    <div className="flex justify-center">
      <div className="carousel lg:w-[1280px] rounded-lg md:h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="/assets/images/banner/1.jpg"
            className="w-full object-cover"
          />
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 right-10 bottom-8">
            <a
              href="#slide6"
              className="btn btn-circle bg-[#000000] opacity-40 text-white"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-[#FF3811] border-0 hover:bg-[#eb7f6a]"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="/assets/images/banner/2.jpg"
            className="w-full object-cover"
          />
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 right-10 bottom-8">
            <a
              href="#slide1"
              className="btn btn-circle bg-[#000000] opacity-40 text-white"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle bg-[#FF3811] border-0 hover:bg-[#eb7f6a]"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="/assets/images/banner/3.jpg"
            className="w-full object-cover"
          />
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 right-10 bottom-8">
            <a
              href="#slide2"
              className="btn btn-circle bg-[#000000] opacity-40 text-white"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-circle bg-[#FF3811] border-0 hover:bg-[#eb7f6a]"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="/assets/images/banner/4.jpg"
            className="w-full object-cover"
          />
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 right-10 bottom-8">
            <a
              href="#slide3"
              className="btn btn-circle bg-[#000000] opacity-40 text-white"
            >
              ❮
            </a>
            <a
              href="#slide5"
              className="btn btn-circle bg-[#FF3811] border-0 hover:bg-[#eb7f6a]"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img
            src="/assets/images/banner/5.jpg"
            className="w-full object-cover"
          />
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 right-10 bottom-8">
            <a
              href="#slide4"
              className="btn btn-circle bg-[#000000] opacity-40 text-white"
            >
              ❮
            </a>
            <a
              href="#slide6"
              className="btn btn-circle bg-[#FF3811] border-0 hover:bg-[#eb7f6a]"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img
            src="/assets/images/banner/6.jpg"
            className="w-full object-cover"
          />
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 right-10 bottom-8">
            <a
              href="#slide5"
              className="btn btn-circle bg-[#000000] opacity-40 text-white"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle bg-[#FF3811] border-0 hover:bg-[#eb7f6a]"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
