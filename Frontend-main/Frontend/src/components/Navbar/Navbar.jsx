import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TiThMenuOutline } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import images from "../../images/read.png";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/auth";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const isloggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);

  const handleLogout = () => {
    dispatch(authActions.logout());
    setIsMobileMenuOpen(false);
    navigate("/");
  };


  let navLinks = [
    { title: "Home", link: "/" },
    { title: "All Books", link: "/all-books" },
  ];

 
  if (isloggedIn) {
    if (role === "user") {
      navLinks.push(
        { title: "Cart", link: "/Cart" },
        { title: "Profile", link: "/profile" }
      );
    } else if (role === "admin") {
      navLinks.push(
        { title: "Admin Profile", link: "/profile" }
      );
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Navbar Container */}
      <nav className="z-50 sticky top-0 flex bg-white text-black border-b border-gray-800 px-6 md:px-12 py-3 items-center justify-between border-purple-900/30 backdrop-blur-md bg-opacity-95">
        
        {/* Logo Section */}
        <Link to={"/"} className="flex items-center gap-2 group">
          <img
            src={images}
            className="h-9 w-auto object-contain transition-transform group-hover:rotate-6"
            alt="logo"
          />
          <h1 className="text-xl md:text-2xl font-bold tracking-tight">
            My<span className="text-purple-500">Book</span>House
          </h1>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((item, i) => (
            <Link
              to={item.link}
              key={i}
              className={`text-sm font-medium transition-all duration-300 ${
                item.title.includes("Profile")
                  ? "bg-purple-600 hover:bg-purple-700 text-black px-4 py-1.5 rounded-full shadow-md shadow-purple-600/20"
                  : "text-black hover:text-purple-400"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {!isloggedIn ? (
            <>
              <Link
                to={"/Login"}
                className="text-sm  text-black hover:text-white transition-colors font-bold bg-green-500 p-2 rounded-lg"
              >
                Log In
              </Link>
              <Link
                to={"/Signup"}
                className="text-sm font-medium bg-purple-600 hover:bg-purple-700 text-white px-4 py-1.5 rounded-lg transition-all shadow-lg shadow-purple-600/20 hover:shadow-purple-600/30"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="text-sm font-medium bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded-lg transition-all shadow-lg shadow-red-600/20 hover:shadow-red-600/30"
            >
              Log Out
            </button>
          )}
        </div>

        {/* Mobile Menu Hamburger Button */}
        <button
          className="block md:hidden text-zinc-400 hover:text-purple-400 text-2xl transition-colors z-50"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <IoCloseSharp /> : <TiThMenuOutline />}
        </button>
      </nav>

      {/* Modern Overlay Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 bg-zinc-950/60 backdrop:blur-xl z-40 flex flex-col items-center justify-center gap-6 transition-all duration-500 md:hidden ${
          isMobileMenuOpen 
            ? "opacity-100 pointer-events-auto translate-y-0" 
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        {navLinks.map((item, i) => (
          <Link
            to={item.link}
            key={i}
            className={`text-xl font-semibold transition-colors ${
              item.title.includes("Profile") ? "text-purple-400" : "text-blue-600 hover:text-purple-400"
            }`}
            onClick={toggleMobileMenu}
          >
            {item.title}
          </Link>
        ))}

        {/* Mobile Auth Buttons inside menu */}
        {!isloggedIn && (
          <div className="flex flex-col items-center gap-4 w-full px-12 mt-4">
            <Link
              to={"/Login"}
              onClick={toggleMobileMenu}
              className="w-full text-center font-medium text-zinc-300 py-2.5 rounded-lg border border-zinc-700 hover:bg-zinc-900 transition-colors"
            >
              Log In
            </Link>
            <Link
              to={"/Signup"}
              onClick={toggleMobileMenu}
              className="w-full text-center font-medium bg-purple-600 text-white py-2.5 rounded-lg shadow-lg shadow-purple-600/20"
            >
              Sign Up
            </Link>
          </div>
        )}
        {isloggedIn && (
          <button
            onClick={handleLogout}
            className="mt-4 w-48 text-center font-medium bg-red-600 hover:bg-red-700 text-white py-2.5 rounded-lg shadow-lg shadow-red-600/20"
          >
            Log Out
          </button>
        )}
      </div>
    </>
  );
};

export default Navbar;