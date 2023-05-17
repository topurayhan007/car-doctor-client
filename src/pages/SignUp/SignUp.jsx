import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, updateUserInfo, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        // Updates the Name after user is created
        updateUserInfo(name)
          .then(() => {
            console.log("Profile Updated!");
            form.reset();
          })
          .catch((error2) => {
            console.log(error2.message);
          });

        // User automatically logs in after registration,
        // so calling LogOut from user to Login
        logOut()
          .then((result) => {
            console.log("User created successfully", result);
          })
          .catch((error) => {
            console.log(error.message);
          });
        Swal.fire(
          "Success!",
          "User created successfully. Please Login!",
          "success"
        );

        navigate("/login");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className=" mt-10 mb-20">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row justify-between w-full">
          <div className="text-center lg:text-left flex-1">
            <img src="/assets/images/login/login.svg" alt="" />
          </div>
          <div className="card flex-1 w-full shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp}>
              <div className="card-body px-20 pt-20 pb-10">
                <h1 className="text-2xl text-center font-bold">Sign Up</h1>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Password</span>
                  </label>
                  <input
                    type="password"
                    required
                    name="password"
                    placeholder="Your password"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="btn normal-case text-lg bg-[#FF3811] border-0 hover:bg-[#ff6041]"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </form>

            <div className="px-20 pt-0 mt-0 pb-20 flex flex-col gap-2">
              <div className="flex items-center">
                <hr className="flex-1 border-gray-300 border-[1px]" />
                <div className="mx-4 label-text text-base font-medium">
                  Or Sign Up with
                </div>
                <hr className="flex-1 border-gray-300 border-[1px]" />
              </div>

              <div className="form-control mt-1 ">
                <div className="flex justify-center gap-4">
                  <button
                    onClick={""}
                    className="btn btn-circle hover:bg-transparent border-0 bg-slate-100 text-black font-bold normal-case text-lg"
                  >
                    <FaFacebookF className="text-blue-600" />
                  </button>
                  <button
                    onClick={""}
                    className="btn btn-circle hover:bg-transparent border-0 bg-slate-100 text-black font-bold normal-case text-lg"
                  >
                    <FcGoogle className="" />
                  </button>
                  <button
                    onClick={""}
                    className="btn btn-circle hover:bg-transparent border-0 bg-slate-100 text-black font-bold normal-case text-lg"
                  >
                    <FaLinkedinIn className="text-blue-700" />
                  </button>
                </div>
              </div>

              <p className="mt-2 text-center">
                <span className="label-text text-base font-semibold">
                  Already have an account?
                  <Link
                    to="/login"
                    className="label-text-alt font-bold text-base link link-hover ps-2 text-[#FF3811]"
                  >
                    Login
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
