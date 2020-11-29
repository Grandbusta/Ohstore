import React from 'react';
import Review from './review';
// import {Button} from 'react-bootstrap'
function Reviews() {
  return (
    <div style={{ margin: '5rem 0rem', display: 'flex', flexDirection: 'column' }}>
      <div style={{
        marginBottom: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}
      >
        <h1 style={{ fontWeight: 'bold' }}>Reviews</h1>
        <div style={{
          backgroundColor: '#49a6e9', width: '6rem', height: '0.25rem', margin: 'auto',
        }}
        />
      </div>
      <div style={{ width: '100%', margin: 'auto' }}>
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', flexDirection: 'row',
        }}
        >
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
        </div>
      </div>
      {/* <div style={{margin:'auto',marginTop:'3rem'}}>
                <Button variant='primary'> Show More </Button>
            </div> */}
    </div>
  );
}

export default Reviews;
