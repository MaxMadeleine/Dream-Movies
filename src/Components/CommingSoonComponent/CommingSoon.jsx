import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import supabase from "../../Utils/Supabase/supabaseClient.js";
import "../CommingSoonComponent/CommingSoon.scss";

export const CommingSoon = ({ setComingSoonIds }) => {
  const [PosterData, setPosterData] = useState([]); 
  const [limit] = useState(5); 

  const getData = async () => {
    let query = supabase
      .from("posters")
      .select("id,name,image_url");

    const { data, error } = await query;

    if (error) {
      console.error("Error fetching posters", error);
    } else {
      const shuffled = data.sort(() => Math.random() - 0.5);
      const comingSoonPosters = shuffled.slice(0, limit);
      setPosterData(comingSoonPosters);
      setComingSoonIds(comingSoonPosters.map(poster => poster.id));
    }
  };

  useEffect(() => {
    getData();
  }, [limit]);
  

  return (
    <div>
        <h3>Posters Comming Soon</h3>
      <ul className="CommingSoonUl">
        {PosterData.map((Poster) => (
          <figure key={Poster.id}>
            <Link to="/Posters">
              <img src={Poster.image_url} alt="Poster image" />
            </Link>
            <figcaption>
              <p>{Poster.name}</p>
            </figcaption>
          </figure>
        ))}
      </ul>
    </div>
  );
};
