import React from 'react';
import {connect} from 'react-redux';
import {selectOption} from '../actions'

//provide an onChange handler if you dont want it to run the default
const OptionMenu = ({options, selectOption, selectedOption,onChangeH}) =>{

    return(
        
          <select style={{margin: "0px 10px"}} value={selectedOption|| ""} onChange={ onChangeH?onChangeH:(e)=>selectOption(e.target.value)}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        
    );
};
const mapPropsToState = (state) =>{
    console.log(state.selectedOption);
    return{
       
        selectedOption: state.selectedOption,
        
    }

}
export default connect(mapPropsToState, {selectOption})(OptionMenu);