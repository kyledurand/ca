import React, {Component} from 'react';
import {TopBar} from './components';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(page) {
    this.setState({currentPage: page})
  }

  render() {
    const {currentPage} = this.state;

    return (
      <div className="AppFrame">
        <TopBar
          page={currentPage}
          items={[
            {
              fill: true,
              content: 'kyle durand',
              handleClick: () => this.handleClick(1),
            },
            {
              content: 'work',
              handleClick: () => this.handleClick(2),
            },
            {
              content: 'about',
              handleClick: () => this.handleClick(3),
            },
            {
              content: 'info',
              handleClick: () => this.handleClick(4),
            },
            {
              content: 'more',
              handleClick: () => this.handleClick(5),
            },
          ]} />
      </div>
    );
  }
}
