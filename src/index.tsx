import App from 'App';
import React from 'react';
import { renderToString } from 'react-dom/server';
// import App from './App';

console.log('index process.env.NAME', process.env.NAME);

console.log(renderToString(<App />));
