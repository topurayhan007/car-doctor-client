import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

/* eslint-disable react/no-unescaped-entities */
const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="flex justify-center text-center my-48">
      <div className="lg:w-[1280px]">
        <h3 className="text-2xl text-[#FF3811] mb-5 font-bold">Service</h3>
        <h3 className="text-5xl font-bold">Our Services Area</h3>
        <p className="capitalize mb-8 mt-5 text-[#737373]">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br />
          words which don't look even slightly believable.
        </p>
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
        <button className="btn btn-error btn-outline border-2 normal-case text-lg mt-20">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
