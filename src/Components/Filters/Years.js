import React, { useState } from 'react';

const Dropdown = ({ startYear, endYear }) => {
  const [years, setYears] = useState(
    ((startYear, endYear) => {
      let tabYears = [];
      for (let i = startYear; i <= endYear; i++) {
        tabYears.push(i);
      }
      return tabYears;
    })(startYear, endYear),
  );

  return (
    <select>
      {years.map((year, index) => {
        return (
          <option key={index} value={year}>
            {year}
          </option>
        );
      })}
    </select>
  );
};

export default Dropdown;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function ApiYears() {
//   const [movieYear, setMovieYear] = useState([]);
//   const getreal = () => {
//     axios
//       .get('')
//       .then((res) => res.data)
//       .then((release_dates) => {
//         setQuoteList(release_dates[0]);
//       });
//   };
//   useEffect(() => {
//     getQuote();
//   }, []);

//   return (
//     <div className="App">
//       <QuoteCard quote={quoteList.quote} character={quoteList.character} image={quoteList.image} />
//       <button type="button" onClick={getQuote}>
//         {' '}
//         next simpsons{' '}
//       </button>
//     </div>
//   );
// }
