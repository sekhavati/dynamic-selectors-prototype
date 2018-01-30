import { FETCH_PROPOSITION_SUCCESS } from '../actions/action-types';

const PropositionReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PROPOSITION_SUCCESS:
      return {
        ...state,
        [action.context]: action.data.proposition // *** Noteworthy: original context needs to be accessible from action in order to work as intended
      }
    default:
      return state;
  }
};

export default PropositionReducer;
