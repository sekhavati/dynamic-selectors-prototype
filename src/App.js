import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import './App.css';
import proposition from './proposition/reducers/proposition';
import PropositionContainer from './proposition/containers/PropositionContainer';
import { combineReducers } from 'redux'
// import fetchProposition from './proposition/actions/fetch-proposition';

const store = createStore(
  combineReducers({
    proposition
  }),
  { },
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Dynamic Selectors Prototype</h1>
          </header>

          <div>
            <h2>First proposition</h2>
            <PropositionContainer context="SPORTS" />
          </div>
          <div>
            <h2>Second proposition</h2>
            <PropositionContainer context="CINEMA" />
          </div>
          <div>
            <h2>Unknown proposition</h2>
            <PropositionContainer context="FOOBAR" />
          </div>

        </div>
      </Provider>
    );
  }
}

export default App;
