import axios from "axios";
import React, {useState} from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "./Update.scss"

export const Update = () => {
    const [poster,setPoster] = useState({
        name:"",
        description:"",
        image_url:"",
        price:null,
    });

const navigate = useNavigate();
const location = useLocation();

//split splits the pathsname before and after every /
const posterId = location.pathname.split("/")[3];
console.log("Poster ID:", posterId);


const handleChange = (e) => {
setPoster(prev=>({...prev, [e.target.name]: e.target.value}))
};

const handleClick = async e => {
  e.preventDefault();
  try {
    await axios.put(`http://localhost:4000/posters/${posterId}`, poster);
    navigate("/posters");
  } catch (err) {
    console.log(err);
  }
};

console.log("Poster state:", poster);

  return (
    <>   <section>
        <Link to={"/crud"}><h2>POSTERS</h2></Link>
        <Link to={"/crud/add"}><h2>ADD</h2></Link>
        <Link to={"/crud/update"}><h2>UPDATE</h2></Link>
        </section>
      <div className="form">
        <h1>Update Poster</h1>
        <input type="text" placeholder="Title" onChange={handleChange} name="name" />
        <input type="text" placeholder="Slug" onChange={handleChange} name="slug" />
        <input type="text" placeholder="Description" onChange={handleChange} name="description" />
        <input type="text" placeholder="Cover" onChange={handleChange} name="image_url" />
        <input type="text" placeholder="Width" onChange={handleChange} name="width" />
        <input type="text" placeholder="Height" onChange={handleChange} name="height" />
        <input type="number" placeholder="Price" onChange={handleChange} name="price" />
        <input type="number" placeholder="Stock" onChange={handleChange} name="stock" />
        <button onClick={handleClick}><Link to={"/crud"}>Update</Link></button>
      </div>
      </>
  );
};
