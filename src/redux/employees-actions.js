import * as actionTypes from './employees-types';

export const fetchData = (employees) => {
  return {
    type: actionTypes.FETCH_EMPLOYEES,
    payload: employees,
  };
};

export const addToActive = (employID) => {
  return {
    type: actionTypes.ADD_TO_ACTIVE,
    payload: {
      id: employID,
    },
  };
};
export const removeFromActive = (employID) => {
  return {
    type: actionTypes.REMOVE_FROM_ACTIVE,
    payload: {
      id: employID,
    },
  };
};
