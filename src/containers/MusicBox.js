import React, { useEffect, useState } from 'react';
import SongList from '../components/SongList';
import '../App.css';

const MusicBox = () => {
  const [loaded, setLoaded] = useState(false);
  const [songs, setSongs] = useState({});
  const [genre, setGenre] = useState();

  const handleSelect = (e) => {
    setGenre(`genre=${e.target.value}`)
  }
    

  const getSongs = () => {
    console.log("Getting Songs");
    fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/${genre}/json`)
    .then(res => res.json())
    .then(data => setSongs(data))
    .then(() => setLoaded(true));
  }


  useEffect(() => {
    getSongs();
  }, [genre])

  if(!loaded){
    return <p>Loading...</p>
  }
  return(
    <>
    <select onChange={handleSelect}>
      <option default>All Genres</option>
      <option value={20}>Alternative</option>
      <option value={2}>Blues</option>
      <option value={21}>Rock</option>
      <option value={17}>Dance</option>
      <option value={6}>Country</option>
    </select>
  
    <SongList songs={songs}/>
    </>
  )
}

export default MusicBox;