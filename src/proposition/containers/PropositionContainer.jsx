import React from 'react';
import { connect } from 'react-redux';
import Propositon from '../components/Proposition';
import Proposition from '../components/Proposition';

const PropositionContainer = props => <Proposition {...props} />;

const mapStateToProps = (state, ownProps) => {

};

const mapDispatchToProps = dispatch => {

};

export default connect(mapStateToProps, mapDispatchToProps)(PropositionContainer);
