import React, { useEffect } from 'react';
import LetterBlock from './singleEmploy/LetterBlock';
import { connect, useDispatch } from 'react-redux';
import { fetchData } from '../redux/employees-actions';
import axios from 'axios';
import _ from 'lodash';

function EmployList(props) {
  const list = props.employees;
  const dispatch = useDispatch();
  const fetchEmployees = async () => {
    const response = await axios
      .get('https://yalantis-react-school-api.yalantis.com/api/task0/users')
      .catch((err) => console.log('Error', err));
    dispatch(fetchData(response.data));
  };

  useEffect(() => {
    fetchEmployees();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const groupBy = (objectArray) => {
    return objectArray.reduce(function (acc, obj) {
      let key = obj.lastName[0];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  };

  const employeesGrouped = groupBy(list);
  const alphabet = {
    A: [],
    B: [],
    C: [],
    D: [],
    E: [],
    F: [],
    G: [],
    H: [],
    I: [],
    J: [],
    K: [],
    L: [],
    M: [],
    N: [],
    O: [],
    P: [],
    Q: [],
    R: [],
    S: [],
    T: [],
    U: [],
    V: [],
    W: [],
    X: [],
    Y: [],
    Z: [],
  };

  function customizer(objValue, srcValue) {
    if (_.isArray(objValue)) {
      return objValue.concat(srcValue);
    }
  }

  let mergeObject = _.mergeWith(alphabet, employeesGrouped, customizer);

  let bigProp = Object.entries(mergeObject);
  let bigPropArray = [bigProp];

  return (
    <div className='eight wide computer sixteen wide mobile eight wide tablet column'>
      <h2>Employees</h2>
      <div className='ui grid'>
        {bigPropArray[0].map((obj) => (
          <LetterBlock key={obj[0][0]} list={obj} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    employees: state.empl.employees,
  };
};

export default connect(mapStateToProps)(EmployList);
