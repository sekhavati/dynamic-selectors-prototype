import {
  FETCH_PROPOSITION,
  FETCH_PROPOSITION_ERROR,
  FETCH_PROPOSITION_SUCCESS
} from './action-types';

const fakePropositionRequest = context => {
  switch(context) {
    case 'SPORTS':
      return {
        proposition: 'A lovely sports package!'
      };
    case 'CINEMA':
      return {
        proposition: 'Stunning Cinema in full glory!'
      };
    default:
      return Promise.reject(`Unknown context (${context}) supplied to fetchProposition`);
  }
};

const fetchProposition = context => dispatch => {
  return Promise.resolve(dispatch({ type: FETCH_PROPOSITION, context }))
  .then(() => fakePropositionRequest(context))
  .then(data => {
    dispatch({
      type: FETCH_PROPOSITION_SUCCESS,
      data,
      context // *** Noteworthy - context needs to be passed back for reducer to also be aware
    });
  })
  .catch(error => {
    dispatch({
      type: FETCH_PROPOSITION_ERROR,
      error,
      context
    });
    throw error;
  });

};

export default fetchProposition;
