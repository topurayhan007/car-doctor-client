import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const BookService = () => {
  const service = useLoaderData();
  const { title, _id, price, img } = service;
  const { user } = useContext(AuthContext);

  const handleBookService = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const booking = {
      customerName: name,
      email,
      img,
      date,
      service: title,
      service_id: _id,
      price: price,
    };

    console.log(booking);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire(
            "Booked!",
            "Your service has been booked successfully.",
            "success"
          );
          form.reset();
        }
      });
  };

  return (
    <div className="mb-28 mt-20">
      <div className="rounded-lg mb-20">
        <div
          className="hero lg:h-[300px] rounded-lg relative"
          style={{
            backgroundImage: `url("/assets/images/banner/1.jpg")`,
          }}
        >
          <div className="hero-overlay bg-opacity-20 bg-gradient-to-r from-[#151515] rounded-lg"></div>
          <div className="hero-content absolute left-5 text-left text-neutral-content md:ps-14 ps-3">
            <div className="max-w-md">
              <h1 className="mb-8 text-6xl font-bold">Check Out</h1>
            </div>
          </div>
          <div className="absolute bottom-0 text-white text-base font-semibold w-60 border-t-[30px] border-t-transparent border-b-[45px] border-b-[#FF3811] border-l-[30px] border-r-[30px] border-l-transparent border-r-transparent">
            <div className="flex justify-center">
              <p className="-bottom-8 absolute">Home/Checkout</p>
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={handleBookService}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              required
              name="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Date</span>
            </label>
            <input
              type="date"
              required
              name="date"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="text"
              name="email"
              required
              defaultValue={user?.email}
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Due amount</span>
            </label>
            <input
              type="text"
              defaultValue={"$" + price}
              required
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn bg-[#FF3811] hover:bg-[#f15d40] btn-block border-0 normal-case text-lg"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default BookService;
