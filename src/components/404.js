import React from 'react';

function Notfound() {
  return (
    <div className="text-center mt-5">
      <div className="error mx-auto" data-text="404">
        <p className="m-0">404</p>
      </div>
      <p className="text-dark mb-5 lead">Page Not Found</p>
      <p className="text-black-50 mb-0">It looks like you navigated to the wrong path...</p>
      <a href="/">← Back to Home</a>
    </div>
  );
}

export default Notfound;
