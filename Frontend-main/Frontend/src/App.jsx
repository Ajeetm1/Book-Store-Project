import React, { useEffect } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Allbooks from "./pages/Allbooks";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart_add";
import ViewBookPage from "./components/ViewBookDetailsPage/ViewBookPage";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store/auth";
import Favourites from "./components/profile/Favourites";
import Orderhistory from "./components/profile/Orderhistory";
import Settings from "./components/profile/Settings";
import AllOrders from "./pages/AllOrders";
import AddBooks from "./pages/AddBooks";
import UpdateBooks from "./pages/UpdateBooks";


const App = () => {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.auth.role);
  useEffect(() => {
    if (
      localStorage.getItem("id") &&
      localStorage.getItem("token") &&
      localStorage.getItem("role")
    ) {
      dispatch(authActions.login());
      dispatch(authActions.changeRole(localStorage.getItem("role")));
    }
  }, []);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/all-books" element={<Allbooks />} />
         <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />}>
         {role === "user" ? (<Route index element={<Favourites/>}/>):(<Route index element={<AllOrders/>}/>)}

         {role === "admin" &&  (<Route path="/profile/add-book" element={<AddBooks/>}/>)}

          <Route path="/profile/orderhistory" element={<Orderhistory />} />
          <Route path="/profile/settings" element={<Settings/>} />
        </Route>
       
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
         <Route path="/updateBook/:id" element={<UpdateBooks />} />
        <Route path="/view-book-details/:id" element={<ViewBookPage />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
