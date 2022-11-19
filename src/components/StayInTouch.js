import React from 'react';

const StayInTouch = () => {
  return (
    <div
      style={{
        padding: '70px 0px',
        background: '#DCC79F',

        //    background:"#99989e "
      }}
    >
      <div className="ui two columns grid middle aligned">
        <div className="column">
          <form style={{ width: '80%', margin: '0px auto' }}>
            <h1>Let's stay in touch</h1>
            <p>
              Subcribe to be the first to hear about our exclusive offers and
              newest arrivals.
            </p>
            <input type="email" placeholder="Enter your email" />{' '}
            <button>subscribe</button>
          </form>
        </div>
        <div className="column center aligned">
          <img
            style={{ width: '80%', height: '150px' }}
            alt="section4"
            src="https://images.pexels.com/photos/6283845/pexels-photo-6283845.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6283845.jpg&fm=jpg"
          />
        </div>
      </div>
    </div>
  );
};
export default StayInTouch;
