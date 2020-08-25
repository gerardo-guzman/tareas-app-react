import React from 'react';
import ReactDOM from 'react-dom';
import { HooksApp } from './HooksApp';
import { CounterApp } from './components/use-state/CounterApp';
import { CounterHook } from './components/use-state/CounterHook';
import { SimpleForm } from './components/use-effect/SimpleForm';
import { FormWithCustomHook } from './components/use-effect/FormWithCustomHook';


ReactDOM.render(
  //<CounterHook />,
  <FormWithCustomHook />,
  document.getElementById('root')
);


