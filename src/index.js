import React from 'react';
import ReactDOM from 'react-dom';
/*
import { HooksApp } from './HooksApp';
import { CounterApp } from './components/use-state/CounterApp'; */
/* import { CounterHook } from './components/use-state/CounterHook';
import { SimpleForm } from './components/use-effect/SimpleForm';
import { FormWithCustomHook } from './components/use-effect/FormWithCustomHook';
import { MultipleCustomHooks } from './components/examples/MultipleCustomHooks';
import { FocusScreen } from './components/use-ref/FocusScreen';
import { ExampleRef } from './components/use-ref/ExampleRef'; */

//import './components/use-reducer/intro-reducer';
//import './pruebas';
//import { TodoApp } from './components/use-reducer/TodoApp';
import { MainApp } from './components/use-context/MainApp';


ReactDOM.render(
  //<CounterHook />,
  <MainApp />,
  document.getElementById('root')
);


