import React from 'react';

const Song = ({ url, AMLink, children }) => {
  return(
    <li>
      <p></p>
      <p>
      {children}
      </p>
      <img src={url}/>
      <br/>
      <a href={AMLink}><button>View on Apple Music</button></a>
      
    </li>
  )
}

export default Song;