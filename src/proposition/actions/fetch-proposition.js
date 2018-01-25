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
          proposition: 'A lovely sports 3 pack!',
          context // *** Noteworthy
        };
      case 'CINEMA':
        return {
          proposition: 'Stunning Sky Cinema in full glory!',
          context // *** Noteworthy
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
