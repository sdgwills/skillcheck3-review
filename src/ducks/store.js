import {createStore} from 'redux';

// initial state
const initialState = {
  students: []
}

// constants
export const GET_STUDENTS = 'GET_STUDENTS'

// reducer
function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case GET_STUDENTS:
      
    default:
      return state;
  };
};

export default createStore(reducer);