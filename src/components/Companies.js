import React from 'react';

const Companies = () => {
  const spanStyle = {
    // display: 'inline',
    // marginLeft: '4.375rem',
    padding: '0.625rem',
    fontWeight: '800',
    background: 'black',
    color: 'white',
  };
  return (
    <div
      className=""
      style={{
        display: 'flex',
        gap: '4.375rem',
        justifyContent: 'center',
        overflow: 'auto',
        maxWidth: '80%',
        margin: 'auto',
        padding: '2.5rem 0.625rem',

        // textAlign: 'center',
      }}
    >
      <div style={{ ...spanStyle, margin: '0px' }}>Homes</div>
      <div style={spanStyle}>Offices</div>
      <div style={spanStyle}>Restuarants</div>
      <div style={spanStyle}>Sofas</div>
      <div style={spanStyle}>Tables</div>
      <div style={spanStyle}>Carpets</div>
    </div>
  );
};

export default Companies;
