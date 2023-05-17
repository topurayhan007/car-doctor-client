import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log("User logged out successfully", result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="">
      <div className="navbar bg-base-100 my-7">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <Link className="normal-case text-xl" to="/">
            <img src="/assets/logo.svg" alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg font-semibold">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            {user?.email ? (
              <li>
                <Link to="/bookings">Bookings</Link>
              </li>
            ) : (
              <></>
            )}
          </ul>
        </div>
        <div className="navbar-end gap-3 items-center">
          <Link className="text-2xl">
            <HiOutlineShoppingBag />
          </Link>
          <Link className="text-2xl">
            <FiSearch />
          </Link>
          {user?.email ? (
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full">
                {user?.photoURL !== null ? (
                  <img
                    src={user.photoURL}
                    alt=""
                    className="rounded-full w-12 h-12 border-2"
                  />
                ) : (
                  <img
                    src="https://www.pngitem.com/pimgs/m/272-2720607_this-icon-for-gender-neutral-user-circle-hd.png"
                    alt=""
                    className="rounded-full w-12 h-12 border-2"
                  />
                )}
              </div>
              <button
                onClick={handleLogOut}
                className="btn btn-error btn-outline border-2 normal-case text-lg"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-error btn-outline border-2 normal-case text-lg">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
