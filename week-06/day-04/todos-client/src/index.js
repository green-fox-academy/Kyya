import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { config } from 'dotenv';
import App from './App';

config();
ReactDOM.render(<App />, document.getElementById('root'));
