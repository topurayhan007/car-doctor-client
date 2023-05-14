/* eslint-disable react/prop-types */
import { HiArrowNarrowRight } from "react-icons/hi";

const ServiceCard = ({ service }) => {
  const { title, img, price } = service;

  return (
    <div>
      <div className="card card-compact w-96 h-full bg-base-100 shadow-xl border">
        <figure className="m-5">
          <img
            src={img}
            alt={title}
            className="rounded-lg h-72 w-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{title}</h2>
          <div className="flex justify-between text-[#FF3811]">
            <h6 className="font-semibold text-lg">Price: ${price}</h6>
            <button className="text-xl ">
              <HiArrowNarrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
