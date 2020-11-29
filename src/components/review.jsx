import React from 'react';
import { Button, Image } from 'react-bootstrap';
import Avi from '../assets/avi.png';

function Review() {
  return (
    <div style={
            {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem',
              flexBasis: '450px',
              borderRadius: '1rem',
              boxShadow: '0rem 0.3rem 0.9rem rgb(224, 224, 224)',
            }
}
    >
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <Image src={Avi} style={{ width: '40px', height: '40px', borderRadius: '0.7rem' }} />
            <strong style={{ marginLeft: '1rem' }}>Olawale Micheal Juwon</strong>
          </div>
          <div>
            <Button variant="warning">4/5</Button>
          </div>
        </section>
        <section style={{ marginTop: '1rem' }}>
          <h6>Great Product!</h6>
          <p style={{ fontSize: '14px' }}>
            This is a very wonderful and unique product!
          </p>
        </section>
      </div>
    </div>
  );
}

export default Review;
