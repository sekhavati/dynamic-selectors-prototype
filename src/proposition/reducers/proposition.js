import { FETCH_PROPOSITION_SUCCESS } from '../actions/action-types';

const PropositionReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PROPOSITION_SUCCESS:
      return {
        ...state,
        [action.data.context]: action.data.proposition
      }
    default:
      return state;
  }
};

export default PropositionReducer;
