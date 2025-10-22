import React, { useState } from "react";
import axios from "axios";

const AddBooks = () => {
  const [Data, setData] = useState({
    url: "",
    title: "",
    author: "",
    price: "",
    description: "",
    language: "",
  });

  const headers = {
    id: localStorage.getItem("id"),
    Authorization: `Bearer ${localStorage.getItem("token")}`,
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
        const response = await axios.post(
          "http://localhost:5000/api/v1/add-book",Data,
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
      }
    } catch (error) {
      console.log(response.data.message);
    }
  };
  return (
    <div className="h-[100%] p-0 md:p-3 bg-yellow-100">
      <h1 className="text-3xl md:text-4xl font-semibold text-green-700 mb-5 underline text-center">
        Add Book
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
          <input
            type="text"
            className="w-full mt-8 bg-zinc-800 text-zinc-100 p-2 outline-none"
            placeholder="description of book"
            name="description"
            required
            value={Data.description}
            onChange={change}
          ></input>
        </div>

        <button
          className="mt-4 px-3 bg-black text-white font-semibold py-2 rounded hover:bg-blue-700 transition-all "
          onClick={submit}
        >
          Add Book
        </button>
      </div>
    </div>
  );
};

export default AddBooks;
