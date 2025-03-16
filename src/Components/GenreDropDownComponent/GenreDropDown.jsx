import React, { useEffect, useState } from 'react';
import supabase from "../../Utils/Supabase/supabaseClient.js";
import './GenreDropDown.scss';

export const GenreDropDown = ({ setSelectedGenre }) => {
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


    const handleChange = (event) => {
        setSelectedGenre(event.target.value);
    };

    return (
        <select className="genre-dropdown" onChange={handleChange}>
            <option value="">Select Genre</option>
            {genreData.map((genre) => (
                <option key={genre.id} value={genre.id}>{genre.title}</option>
            ))}
        </select>
    );
};