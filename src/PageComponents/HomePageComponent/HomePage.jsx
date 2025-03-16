import './HomePage.scss'
import { useState } from 'react';
import { PosterList } from '../../Components/PosterListComponent/PosterList.jsx';
import { ThreeRandom } from '../../Components/ThreeRandomComponent/ThreeRandom.jsx';
import { GenreDropDown } from '../../Components/GenreDropDownComponent/GenreDropDown.jsx';
import { CommingSoon } from '../../Components/CommingSoonComponent/CommingSoon.jsx';

export const HomePage = () => {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [comingSoonIds, setComingSoonIds] = useState([]); // Add state for comingSoonIds

  return (
    <>
      <ThreeRandom/>
      <GenreDropDown setSelectedGenre={setSelectedGenre} />
      <PosterList selectedGenre={selectedGenre} />
      <CommingSoon setComingSoonIds={setComingSoonIds} /> {/* Pass setComingSoonIds to CommingSoon */}
    </>
  );
};
