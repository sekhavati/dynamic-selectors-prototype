import { createSelector } from 'reselect';

const getProposition = (state, props) => {
  return { displayName: state.proposition[props.context] };
};

const makeGetProposition = () => {
  return createSelector(
    getProposition,
    proposition => proposition
  );
}

export default makeGetProposition;
