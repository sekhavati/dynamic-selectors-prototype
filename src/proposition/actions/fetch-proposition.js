import {
  FETCH_PROPOSITION,
  FETCH_PROPOSITION_ERROR,
  FETCH_PROPOSITION_SUCCESS
} from './action-types';

const fetchProposition = context => dispatch => {
  Promise.resolve(dispatch({ type: FETCH_PROPOSITION }))
  .then(() => {
    switch(context) {
      case 'SPORTS':
        return {
          proposition: 'A lovely sports 3 pack!',
          context
        };
      case 'CINEMA':
        return {
          proposition: 'Stunning Sky Cinema in full glory!',
          context
        }
      default:
        throw new Error('Unknown context supplied to fetchProposition');
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
