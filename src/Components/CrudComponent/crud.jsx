import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../CrudComponent/crud.scss"



export const Crud = () => {
  const [posters, setPosters] = useState([]);

  useEffect(() => {
    const fetchAllPosters = async () => {
      try {
        const res = await axios.get("http://localhost:4000/posters");
        setPosters(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllPosters();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/posters/${id}`);
      setPosters(posters.filter(poster => poster.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  console.log(posters);

  return (
    <div className="posters-container">
      <section>
    <Link to={"/crud"}><h2>POSTERS</h2></Link>
    <Link to={"/crud/add"}><h2>ADD</h2></Link>
    <Link to={"/crud/update"}><h2>UPDATE</h2></Link>
    </section>

    <div className="posters">
      {posters.map(poster => (
        <div className="poster" key={poster.id}>
          {poster.image_url && <img src={poster.image_url} alt={poster.name} />}
          <h2>{poster.name}</h2>
          <span>Poster Price: {poster.price} DDK</span>
          <div className="poster-actions">
            <button className="update"><Link to={`/crud/update/${poster.id}`}>Update</Link></button>
            <button className="delete" onClick={() => handleDelete(poster.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
    <button className="add"><Link to={"/add"}>Add new poster</Link></button>
  </div>
  );
};

