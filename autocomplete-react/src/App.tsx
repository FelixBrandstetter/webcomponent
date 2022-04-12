import React from 'react';
import './App.css';
import './autocomplete-component';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'AutoCompleteReact': {},
      'my-autocomplete': { };
    }
  }
}

function App() {
  return (
    <div>
      <AutoCompleteReact></AutoCompleteReact>
    </div>
  );
}

export default App;

class AutoCompleteReact extends React.Component {
  render() {
    return <div>
    <h1>React App</h1>
    <my-autocomplete></my-autocomplete>
  </div>
  }
}