import React from 'react';
import MonthBlock from './birthList/MonthBlock';
import { connect } from 'react-redux';
import _ from 'lodash';

function BirthList(props) {
  const list = props.active;
  const groupBy = (objectArray) => {
    return objectArray.reduce(function (acc, obj) {
      let key = +obj.dob.slice(5, 7);
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, []);
  };
  const monthsGrouped = groupBy(list);
  const months = {};

  function customizer(objValue, srcValue) {
    if (_.isArray(objValue)) {
      return objValue.concat(srcValue);
    }
  }

  let mergeObject = _.mergeWith(months, monthsGrouped, customizer);

  let bigProp = Object.entries(mergeObject);
  let bigPropArray = [bigProp];

  return (
    <div className='eight wide computer sixteen wide mobile eight wide tablet column'>
      <h2>Employees birthday</h2>
      <div className='ui grid'>
        {bigPropArray[0].map((obj) => (
          <MonthBlock key={obj[0].toString()} month={obj} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    active: state.empl.active,
  };
};

export default connect(mapStateToProps)(BirthList);
