import React from 'react';
import { Rating } from 'semantic-ui-react';

const RatingClearable = () => <Rating maxRating={5} clearable />;

export default RatingClearable;

/* 

const [filterRating, setFilterRating] = React.useState();

const handleFilterRating = () => {
    setFilterRating(); 
};

<button onClick={handleFilterRating}>
        on met les ch'tites nétoiles ici
      </button>

{myState
    .filter()
    .map()
}     

*/

// axios
//   .get(`https://api.themoviedb.org/3/list/99?api_key=e68df8fb360e2ffe69d4812e69dd24b0&&language=en-US`)
//   .then((response) => response.data)
//   .then((data) => {
//     console.log(data.items[0].vote_average);
//     setMystate(data.items[0].vote_average);
//   });
