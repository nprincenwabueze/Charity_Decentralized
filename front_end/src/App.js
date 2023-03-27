import React from 'react';
import { navbar, sitebanner, layout, message, subheader } from './components';
import './App.css';

const book = require('./images/book.png');
const park = require('./images/tree.png');
const cannedGood = require('./images/great.png');

const App = () => (
	<div className="App">
	  <navbar />
	  <sitebanner />
	  <layout />
	  <message />
	  <subheader />
	</div>
  );

export default App;