import React from 'react';

const Companies = () =>{
    const spanStyle = {
        display: "inline",
        marginLeft: "70px",
        padding: "10px",
        fontWeight: "800",
        background: "black",
        color: "white"
    }
    return(
        <div className="" style={{ maxWeight: "80%", margin:"auto", padding:"40px 10px", textAlign: "center"}}>
            <div style={{...spanStyle, margin: "0px"}}>BBC</div>
            <div style={spanStyle}>NETFLIX</div>
            <div style={spanStyle}>Forbes</div>
            <div style={spanStyle}>Mashable</div>
            <div style={spanStyle}>LifeHacker</div>
            <div style={spanStyle}>BuzzFeed</div>
        </div>
    );

};

export default Companies;