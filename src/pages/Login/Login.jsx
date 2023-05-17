import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

/* eslint-disable react/no-unescaped-entities */
const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        const loggedUser = {
          email: user.email,
        };
        console.log(loggedUser);

        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loggedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("jwt response", data);
            // Warning: Local storage is not the best (second best place) to store access token
            localStorage.setItem("car-access-token", data.token);

            navigate(from, { replace: true });
          });
      })
      .catch((error) => console.log(error));
  };

  // Google SignIn function
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="mt-10 mb-20">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row justify-between w-full">
          <div className="text-center lg:text-left flex-1">
            <img src="/assets/images/login/login.svg" alt="" />
          </div>
          <div className="card flex-1 w-full shadow-2xl bg-base-100">
            <form onSubmit={handleLogin}>
              <div className="card-body px-20 pt-20 pb-10">
                <h1 className="text-2xl text-center font-bold">Login</h1>

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
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="btn normal-case text-lg bg-[#FF3811] border-0 hover:bg-[#ff6041]"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </form>

            <div className="px-20 pt-0 mt-0 pb-20 flex flex-col gap-2">
              <div className="flex items-center">
                <hr className="flex-1 border-gray-300 border-[1px]" />
                <div className="mx-4 label-text text-base font-medium">
                  Or Sign In with
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
                    onClick={handleGoogleSignIn}
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
                  Have an account?
                  <Link
                    to="/register"
                    className="label-text-alt font-bold text-base link link-hover ps-2 text-[#FF3811]"
                  >
                    Sign Up
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

export default Login;
