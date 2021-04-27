import React from 'react';
import "./CategorieButton.css";


const CategorieButton = ({ genre_id, genre_name,handlefilterFilmByCategorie }) => (

    <a onClick={(e) => handlefilterFilmByCategorie(e, genre_id)} name={genre_id} className="transparent" href="#"> 
      <p>
        <span className="bg"></span>
            <span className="base"></span>
            <span className="text" id={genre_id}>{genre_name}</span>
      </p>
    </a> 



);

export default CategorieButton;