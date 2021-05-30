import React from 'react';
import SingleEmploy from './SingleEmploy/SingleEmploy';

function LetterBlock(props) {
  const employeer = props.list;
  let letter = employeer[0];
  let array = employeer[1];

  let employeesList;
  if (!array.length) {
    employeesList = (
      <div className='four wide computer sixteen wide mobile eight wide tablet column'>
        <h3>{letter}</h3>
        <p>-----</p>
      </div>
    );
  } else {
    employeesList = (
      <div className='four wide computer sixteen wide mobile eight wide tablet column'>
        <h3>{letter}</h3>
        {array.map((arr) => (
          <SingleEmploy key={arr.id} employeer={arr} />
        ))}
      </div>
    );
  }

  return employeesList;
}

export default LetterBlock;
