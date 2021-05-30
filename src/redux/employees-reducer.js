import * as actionTypes from './employees-types';

const initialState = {
  employees: [],
  active: [],
};

const employReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_EMPLOYEES:
      return {
        ...state,
        employees: action.payload,
      };
    case actionTypes.ADD_TO_ACTIVE:
      const item = state.employees.find((emp) => emp.id === action.payload.id);
      const isActive = state.active.find((emp) =>
        emp.id === action.payload.id ? true : false
      );
      return {
        ...state,
        active: isActive
          ? state.active.map((item) =>
              item.id === action.payload.id ? { ...item } : item
            )
          : [...state.active, { ...item }],
      };
    case actionTypes.REMOVE_FROM_ACTIVE:
      return {
        ...state,
        active: state.active.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default employReducer;
