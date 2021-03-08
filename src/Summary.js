import React from 'react';

import './Summary.css';

const Summary = props => {
  return (
    <div className="summary">
      <h1>{props.name}</h1>
      <p>
        Gender: <span className="summary__output">{props.gender}</span>
      </p>
      <p>
        Height: <span className="summary__output">{props.height}</span>
      </p>
      <p>
        Hair Color / Skin Color:{' '}
        <span className="summary__output">{props.hairColor}</span> /{' '}
        <span className="summary__output">{props.skinColor}</span>
      </p>
      <p>
        Appears in # Movies:{' '}
        <span className="summary__output">{props.movieCount}</span>
      </p>
    </div>
  );
};

export default Summary;


// import React from 'react';
// import './Summary.css';

// const Summary = props => {
//   return (
//     <div className="summary">
//       <h1>{props.name}</h1>
//       <p>Movie:<span className="summary__output">{props.name}</span></p>
//       <p>numberOfPages:<span className="summary__output">{props.numberOfPages}</span></p>
//     </div>
//   );
// };

// export default Summary;
