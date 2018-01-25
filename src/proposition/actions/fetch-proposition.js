import {
  FETCH_PROPOSITION,
  FETCH_PROPOSITION_ERROR,
  FETCH_PROPOSITION_SUCCESS
} from './action-types';

const fetchProposition = context => dispatch => {
  return Promise.resolve(dispatch({ type: FETCH_PROPOSITION }))
  .then(() => {
    switch(context) {
      case 'SPORTS':
        return {
          proposition: 'A lovely sports package!',
          context // *** Noteworthy - context needs to be passed back for reducer to also be aware
        };
      case 'CINEMA':
        return {
          proposition: 'Stunning Cinema in full glory!',
          context // *** Noteworthy - context needs to be passed back for reducer to also be aware
        };
      default:
        return Promise.reject(`Unknown context (${context}) supplied to fetchProposition`);
    }
  })
  .then(data => {
    dispatch({
      type: FETCH_PROPOSITION_SUCCESS,
      data
    });
  })
  .catch(error => {
    dispatch({
      type: FETCH_PROPOSITION_ERROR,
      error: error
    });
    throw error;
  });

};

export default fetchProposition;
