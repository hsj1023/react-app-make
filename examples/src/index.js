import React from 'react';
import {render} from 'react-dom';
import MyComponent from '../../src';

const App = () => (
  <div>
    It just commit
    <MyComponent />
  </div>
);

render(<App />, document.getElementById('root'));