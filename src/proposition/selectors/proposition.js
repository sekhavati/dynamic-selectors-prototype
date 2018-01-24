import { createSelector } from 'reselect';

const getProposition = (state, props) => ({ displayName: state.proposition[props.context] });

// *** Noteworthy
const makeGetProposition = () => {
  return createSelector(
    getProposition,
    proposition => proposition
  );
}

export default makeGetProposition;
