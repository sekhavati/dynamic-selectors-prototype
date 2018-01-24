import React from 'react';

const Proposition = ({displayName}) => (
  <div>
    <p>{displayName ? displayName : 'Loading...'}</p>
  </div>
);

export default Proposition;
