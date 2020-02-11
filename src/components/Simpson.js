import React from 'react';

function Simpson({ quote }) {
  return (
    <div className="Simpson">
      <img
        src={quote.image}
        alt={quote.character}
      />
      <ul>
        <li>Quote: {quote.quote}</li>
        <li>
          Character: {quote.character}
        </li>
      </ul>
    </div>
  );
};

export default Simpson;