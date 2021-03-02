import React from 'react';
import Song from './Song';

const SongList = ({songs}) => {

  const songNodes = songs.feed.entry.map((song) => {
    return <Song  url={song["im:image"][2]["label"]} AMLink={song["link"][0]["attributes"]["href"]}>{song["title"]["label"]}</Song>
  })
  return(
    <>
    <h5>List of songs</h5>
    <ol>
      {songNodes}
    </ol>
    </>
  )

}
export default SongList;