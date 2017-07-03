import React, {Component} from 'react';
import {TopBar} from './components';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="AppFrame">
        <TopBar />
      </div>
    );
  }
}
