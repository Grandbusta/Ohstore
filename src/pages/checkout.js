import React from 'react';
import Checkoutform from '../components/checkoutform';
import Cartsum from '../components/cartsum';

function Checkout() {
  return (
    <div style={{
      display: 'flex', flexWrap: 'wrap', margin: '2rem 3rem 2rem 1rem', alignItems: 'flex-start', gap: '2rem', justifyContent: 'space-between',
    }}
    >
      <Checkoutform />
      <Cartsum />
    </div>
  );
}

export default Checkout;
