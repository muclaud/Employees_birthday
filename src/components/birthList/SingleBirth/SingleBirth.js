import moment from 'moment';
import React from 'react';

export default function SingleBirth(props) {
  const { firstName, lastName, dob } = props.birthDay;
  return (
    <ul className='ui list'>
      <li className=''>
        <h3>
          {lastName +
            ' ' +
            firstName +
            ' - ' +
            moment(dob).format('Do MMMM, YYYY') +
            ' year'}
        </h3>
      </li>
    </ul>
  );
}
