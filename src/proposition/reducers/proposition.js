import { FETCH_PROPOSITION } from '../actions/action-types';

const PropositionReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PROPOSITION:
      // @todo: ...
      break;
    default:
      return state;
  }
};
