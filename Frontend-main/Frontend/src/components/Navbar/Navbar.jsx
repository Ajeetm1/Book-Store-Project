import { Link } from "react-router-dom";
import { TiThMenuOutline } from "react-icons/ti";
import images from "../../images/read.png";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "All Books",
      link: "/all-books",
    },
    {
      title: "Cart",
      link: "/Cart",
    },
    {
      title: "Profile",
      link: "/profile",
    },
    {
      title: "adminProfile",
      link: "/profile",
    },
  ];
  const isloggedIn = useSelector((state) => state.auth.isLoggedIn);

  const role = useSelector((state) => state.auth.role);
  // console.log(isloggedIn);
  if (isloggedIn === false) {
    links.splice(2,3);
  }

   if(isloggedIn === true && role === "user"){
    links.splice(4,1);
  }

  if(isloggedIn === true && role === "admin"){
    links.splice(3,1);
  } 
  const [Viewnav, setViewnav] = useState("hidden");
  return (
    <>
      <nav className="z-30 sticky top-0  flex bg-zinc-800 text-white px-8 py-2 items-center justify-between">
        <Link to={"/"} className="flex items-center ">
          <img
            src={images}
            className="h-10 w-auto object-contain me-4"
            alt="logo"
          />
          <h1 className="text-2xl font-semibold">MyBooksHouse</h1>
        </Link>
        <div className="nav-links-mybooks block md:flex items-center gap-4">
          <div className="hidden md:flex gap-4">
            {links.map((items, i) => (
              // creating divs using key i...
              <div className="flex items-center"key={i}>
                {items.title === "Profile"  || items.title === "adminProfile" ? (
                  <Link
                    to={items.link}
                    className="hover:bg-green-500 px-2 transition-all duration-300 py-1 border border-blue-500 rounded"
                    
                  >
                    {items.title}{" "}
                  </Link>
                ) : (
                  <Link
                    to={items.link}
                    className="hover:text-blue-500 transition-all duration-300"
                    key={i}
                  >
                    {items.title}{" "}
                  </Link>
                )}
              </div>
            ))}
          </div>
          {isloggedIn === false && (
            <div className="hidden md:flex gap-4">
              <Link
                to={"/Login"}
                className="hover:bg-blue-500 px-2 transition-all duration-300 py-1 border border-blue-500 rounded"
              >
                Login
              </Link>
              <Link
                to={"/Signup"}
                className="hover:bg-blue-500 px-2 transition-all duration-300  py-1  bg-green-500 rounded"
              >
                SignUp
              </Link>
            </div>
          )}
          <button
            className="block md:hidden text-white text-2xl hover:text-white"
            onClick={() =>
              Viewnav === "hidden" ? setViewnav("block") : setViewnav("hidden")
            }
          >
            <TiThMenuOutline />
          </button>
        </div>
      </nav>
      <div
        className={`${Viewnav} bg-zinc-500 h-screen absolute  left-0 w-full z-40 flex flex-col items-center justify-center`}
      >
        {links.map((items, i) => (
          // creating divs using key i.....
          <Link
            to={items.link}
            className={`${Viewnav}font-semibold text-2xl  hover:text-blue-500 mb-4 transition-all duration-300`}
            key={i}
            onClick={() =>
              Viewnav === "hidden" ? setViewnav("block") : setViewnav("hidden")
            }
          >
            {items.title}{" "}
          </Link>
        ))}

        {isloggedIn === false && (
          <>
            <Link
              to={"/Login"}
              className={`${Viewnav} hover:bg-blue-500 font-semibold text-white px-8 mb-8 text-2xl transition-all duration-300 py-1 border border-blue-500 rounded`}
            >
              LogIn
            </Link>
            <Link
              to={"/Signup"}
              className={`${Viewnav} hover:bg-blue-500  text-2xl text-white font-semibold  transition-all duration-300 px-8 py-1  bg-green-500 rounded`}
            >
              SignUp
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
