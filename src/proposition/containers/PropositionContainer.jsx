import React from 'react';
import { connect } from 'react-redux';
import Proposition from '../components/Proposition';
import fetchProposition from '../actions/fetch-proposition';
import makeGetProposition from '../selectors/proposition';

class PropositionContainer extends React.Component {
  render() {
    return <Proposition {...this.props} />;
  }

  componentDidMount() {
    this.props.fetchPropositionWithContext();
  }
}

// *** Noteworthy
const makeMapStateToProps = (state, ownProps) => {
  const getProposition = makeGetProposition();
  const mapStateToProps = (state, ownProps) => ({
    displayName: getProposition(state, ownProps).displayName
   })
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch, ownProps)  => ({
  fetchPropositionWithContext: () => { dispatch(fetchProposition(ownProps.context)); }
});

// *** Noteworthy
export default connect(makeMapStateToProps, mapDispatchToProps)(PropositionContainer);
