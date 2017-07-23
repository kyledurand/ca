import React, {Component} from 'react';
import {Frame, TopBar, Content} from './components';
import './App.css';

import {
  Kyle,
  Landing,
} from './assets/images';

const totalPages = 5;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      section: 'intro',
      name: 'Kyle',
    };
  }

  componentDidMount() {
    const left = 'ArrowLeft';
    const right = 'ArrowRight';

    document.addEventListener('keyup', ({key}) => {
      const {currentPage} = this.state;
      if (key !== left && key !== right) { return null; }
      if (key ===  right && currentPage >= totalPages) { return null; }
      if (key ===  left && currentPage === 1) { return null; }

      this.setState(
        ({currentPage}) => ({
          currentPage: key === right
            ? currentPage + 1
            : currentPage - 1
          })
      );
    });

    window.addEventListener('resize', () => {
      this.setState({
        name: window.innerWidth < 500
          ? 'Kyle'
          : 'Kyle Durand'
      })
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup');
    window.removeEventListener('resize');
  }

  handleClick(page) {
    this.setState({currentPage: page})
  }

  render() {
    const {currentPage, name} = this.state;

    return (
      <Frame>
        <TopBar
          currentPage={currentPage}
          items={[
            {
              fill: true,
              content: name,
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
          ]}
        />
        <Content
          currentPage={currentPage}
          pages={[
            {
              title: 'Kyle Durand Graphic Design',
              image: Kyle,
              background: Landing,
            },
            {
              title: 'Page two',
              description: 'description'
            },
            {
              title: 'Page three',
            },
            {
              title: 'Page four',
            },
            {
              title: 'Page five',
            },
          ]}
          />
      </Frame>
    );
  }
}
