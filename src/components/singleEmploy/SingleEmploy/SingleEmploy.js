import React from 'react';
import { connect } from 'react-redux';
import {
  addToActive,
  removeFromActive,
} from '../../../redux/employees-actions';

function SingleEmploy(props) {
  const { id, firstName, lastName } = props.employeer;
  const addToActive = props.addToActive;
  const removeFromActive = props.removeFromActive;

  return (
    <div role='list' className='ui list'>
      <div role='listitem' className='item'>
        <div className='header'>
          <h3>{lastName + ' ' + firstName}</h3>
        </div>
      </div>
      <form className='ui form'>
        <div className='grouped fields'>
          <div className='field'>
            <label>
              <input
                type='radio'
                name='htmlRadios'
                checked={true}
                onChange={() => removeFromActive(id)}
              />{' '}
              not active
            </label>
          </div>
          <div className='field'>
            <label>
              <input
                type='radio'
                name='htmlRadios'
                onChange={() => addToActive(id)}
              />{' '}
              active
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToActive: (id) => dispatch(addToActive(id)),
    removeFromActive: (id) => dispatch(removeFromActive(id)),
  };
};
export default connect(null, mapDispatchToProps)(SingleEmploy);
