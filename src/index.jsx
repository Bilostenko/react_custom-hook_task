import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Counter from './counter/Counter';
import RndCounter from './randomCounter/RndCounter';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <Counter counter={0} />
    <RndCounter counter={5} />
  </React.StrictMode>
);