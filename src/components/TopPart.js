import React from 'react';

const TopPart = () => {
  return (
    <div className="ui grid">
      <div className="eight wide column" style={{ padding: '0px' }}>
        <img
          style={{ width: '100%', height: '350px' }}
          alt="HOME"
          src="https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1668860.jpg&fm=jpg"
        />
      </div>

      <div
        className="eight wide column center aligned middle aligned"
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h1 style={{ fontSize: '2rem' }}>Interior Design Studio</h1>
          <p style={{ fontSize: '1rem' }}>
            Top Notch Space Styling and Staging
          </p>
          <button className="ui tiny button primary">Book now</button>
        </div>
      </div>
    </div>
  );
};

export default TopPart;
