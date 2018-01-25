import { createSelector } from 'reselect';

const getProposition = (state, props) => ({ displayName: state.proposition[props.context] });

// *** Noteworthy - Factory method that creates a selector instance per container using context prop
const makeGetProposition = () => {
  return createSelector(
    getProposition,
    proposition => proposition
  );
}

export default makeGetProposition;
