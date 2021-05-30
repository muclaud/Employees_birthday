import React from 'react';
import SingleBirth from './SingleBirth/SingleBirth';

function MonthBlock(props) {
  const month = props.month;
  const name = month[0];
  const list = month[1];

  const monthName = (name) => {
    switch (+name) {
      case 1:
        return 'January';
      case 2:
        return 'February';
      case 3:
        return 'March';
      case 4:
        return 'April';
      case 5:
        return 'May';
      case 6:
        return 'June';
      case 7:
        return 'July';
      case 8:
        return 'August';
      case 9:
        return 'September';
      case 10:
        return 'October';
      case 11:
        return 'November';
      case 12:
        return 'December';
      default:
        return;
    }
  };

  let birthList;
  if (!list) {
    birthList = '';
  } else {
    birthList = (
      <div className='sixteen wide computer sixteen wide mobile sixteen wide tablet column'>
        <h3>{monthName(name)}</h3>
        <div>
          {list.map((arr) => (
            <SingleBirth key={arr.id} birthDay={arr} />
          ))}
        </div>
      </div>
    );
  }

  return birthList;
}

export default MonthBlock;
