import React from "react";

const MySelect = ({options, defaultValue, value, onChange}) => {
   return (
      <select 
      style={{margin: '15px 0 0 15px'}} 
      value={value}
      onChange={event => onChange(event.target.value)}
      >
         <option disabled={true} value="">{defaultValue}</option>
         {options.map(option =>
            <option key={option.value} value={option.value}>{option.name}</option>
         )}
      </select>
   );
};


export default MySelect;