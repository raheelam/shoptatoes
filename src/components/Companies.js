import React from 'react';

const Companies = ({ className, ...others }) => {
  const spanStyle = {
    padding: '0.625rem',
    fontWeight: '800',
    background: 'black',
    color: 'white',
  };
  return (
    <div
      className={`${className} hide-scroll`}
      style={{
        display: 'flex',
        gap: '4.375rem',
        justifyContent: 'center',
        overflow: 'auto',
        maxWidth: '80%',
        margin: 'auto',
        padding: '2.5rem 0.625rem',
      }}
      {...others}
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
