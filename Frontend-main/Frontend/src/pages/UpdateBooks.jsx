import React from 'react'
import { useState,useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
const API = import.meta.env.VITE_API_BASE_URL;


 const UpdateBooks = () => {
  const [Data, setData] = useState({
    url: "",
    title: "",
    author: "",
    price: "",
    description: "",
    language: "",
  });

  
const {id} = useParams();
const navigate = useNavigate();
const headers = {
    id: localStorage.getItem("id"),
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    bookid:id,
  };
  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };
  const submit = async () => {
    try {
      if (
        Data.url === "" ||
        Data.title === "" ||
        Data.author === "" ||
        Data.price === "" ||
        Data.description === "" ||
        Data.language === ""
      ) {
        alert("All fields are required");
      } else {
        const response = await axios.put(
         `${API}/update-books`,Data,
          { headers }
        );

        console.log(response)

        setData({
          url: "",
          title: "",
          author: "",
          price: "",
          description: "",
          language: "",
        });
        alert(response.data.message);
         navigate(`/view-book-details/${id}`)
      }
    } catch (error) {
      alert(error.response.data.message);
     

    }
  };

useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        `${API}/get-book-by-id/${id}`
      );
      // console.log(response.data.data);
      setData(response.data.data);
    };
    fetch();
  }, []);

  return (
    <div className="h-[100%] p-0 md:p-3 bg-yellow-100">
      <h1 className="text-3xl md:text-4xl font-semibold text-green-700 mb-5 underline text-center">
        Update Books
      </h1>
      <div className="p-4 bg-green-300 rounded">
        <div>
          <label htmlFor="" className="text-black-400">
            Image
          </label>
          <input
            type="text"
            className="w-full mt-2 bg-zinc-800 text-zinc-100 p-2 outline-none"
            placeholder="url of image"
            name="url"
            required
            value={Data.url}
            onChange={change}
          ></input>
        </div>

        <div className="mt-4">
          <label htmlFor="" className="text-black-400">
            Title of book
          </label>
          <input
            type="text"
            className="w-full mt-2 bg-zinc-800 text-zinc-100 p-2 outline-none"
            placeholder="title of image"
            name="title"
            required
            value={Data.title}
            onChange={change}
          ></input>
        </div>

        <div className="mt-4">
          <label htmlFor="" className="text-black-400">
            Author of book
          </label>
          <input
            type="text"
            className="w-full mt-2 bg-zinc-800 text-zinc-100 p-2 outline-none"
            placeholder="title of image"
            name="author"
            required
            value={Data.author}
            onChange={change}
          ></input>
        </div>

        <div className="mt-4">
          <label htmlFor="" className="text-black-400">
            language
          </label>
          <input
            type="text"
            className="w-full mt-2 bg-zinc-800 text-zinc-100 p-2 outline-none"
            placeholder="title of image"
            name="language"
            required
            value={Data.language}
            onChange={change}
          ></input>
        </div>

        <div className="mt-4">
          <label htmlFor="" className="text-black-400">
            Price
          </label>
          <input
            type="text"
            className="w-full mt-2 bg-zinc-800 text-zinc-100 p-2 outline-none"
            placeholder="title of image"
            name="price"
            required
            value={Data.price}
            onChange={change}
          ></input>
        </div>

        <div className="mt-4 flex flex-col ">
          <label htmlFor="" className="text-black-400 ">
            Description of Book
          </label>
          <textarea
            type="text-aria"
            className="w-full mt-8 bg-zinc-800 text-zinc-100 p-2 outline-none hover:scale-105"
            placeholder="description of book"
            name="description"
            required
            value={Data.description}
            onChange={change}
          ></textarea>
        </div>

        <button
          className="mt-4 px-3 bg-black text-white font-semibold py-2 rounded hover:bg-blue-700 transition-all "
          onClick={submit}
        >
          Update Book
        </button>
      </div>
    </div>
  )
}

export default UpdateBooks;
