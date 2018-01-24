import React from 'react';
import { connect } from 'react-redux';
import Proposition from '../components/Proposition';
import fetchProposition from '../actions/fetch-proposition';

class PropositionContainer extends React.Component {
  render() {
    return <Proposition {...this.props} />;
  }

  componentDidMount() {
    this.props.fetchPropositionWithContext();
  }
}

const mapStateToProps = (state, ownProps) => ({
  /** @todo: move below into selector */
  displayName: state.propositions[ownProps.context]
});

const mapDispatchToProps = (dispatch, ownProps)  => ({
  fetchPropositionWithContext: () => { dispatch(fetchProposition(ownProps.context)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(PropositionContainer);
