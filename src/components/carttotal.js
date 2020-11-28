import React from 'react';

function Carttotal() {
  return (
    <div style={{ width: '90%', margin: 'auto' }}>
      <hr />
      <div style={{
        display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between', margin: '2rem 0rem',
      }}
      >
        <h5>Total: </h5>
        <h4>$500</h4>
      </div>
    </div>
  );
}

export default Carttotal;
