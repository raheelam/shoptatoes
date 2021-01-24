import React from 'react';


//provide an onChange handler if you dont want it to run the default
const Options = ({options, selectedOption, onChange}) =>{

    return(
        
          <select style={{margin: "0px 10px"}} value={selectedOption} onChange={(e)=>onChange(e.target.value)}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        
    );
};

export default Options