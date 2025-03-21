import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../Utils/Supabase/supabaseClient.js"; // Import the Supabase client
import { Link } from "react-router-dom";

import "./Add.scss";

export const Add = () => {
  const [poster, setPoster] = useState({
    name: "",
    description: "",
    image_url: "",
    width: "",
    height: "",
    price: 0.00,
    stock: 0,
    genre_id: "", // Add genre_id to the poster state
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setPoster((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/posters", poster);
      navigate("/crud");
    } catch (err) {
      console.log(err);
    }
  };

  const GenreDropDown = ({ setSelectedGenre, initialValue }) => {
    const [genreData, setGenreData] = useState([]);
  
    const getData = async () => {
      const { data, error } = await supabase
        .from("genres")
        .select("id,title");
      if (error) {
        console.error("Error fetching genres", error);
      } else {
        setGenreData(data);
      }
    };
  
    useEffect(() => {
      getData();
    }, []);
  
    return (
      <select 
        name="genre_id" 
        value={initialValue} 
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option value="">Select Genre</option>
        {genreData.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.title}
          </option>
        ))}
      </select>
    );
  };

  return (
    <>
      <section>
        <Link to={"/crud"}><h2>POSTERS</h2></Link>
        <Link to={"/crud/add"}><h2>ADD</h2></Link>
        <Link to={"/crud/update"}><h2>UPDATE</h2></Link>
      </section>
      <div className="form">
        <h1>Add New Poster</h1>
        <input type="text" placeholder="Title" onChange={handleChange} name="name" />
        <input type="text" placeholder="Description" onChange={handleChange} name="description" />
        <input type="text" placeholder="Cover" onChange={handleChange} name="image_url" />
        <input type="text" placeholder="Width" onChange={handleChange} name="width" />
        <input type="text" placeholder="Height" onChange={handleChange} name="height" />
        <input type="number" placeholder="Price" onChange={handleChange} name="price" />
        <input type="number" placeholder="Stock" onChange={handleChange} name="stock" />
        <GenreDropDown setSelectedGenre={(genre_id) => setPoster((prev) => ({ ...prev, genre_id }))} initialValue={poster.genre_id} />
        <button onClick={handleClick}>Add Poster</button>
      </div>
    </>
  );
};