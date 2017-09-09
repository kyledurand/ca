import React, {Component} from 'react';
import {Frame, TopBar, Content} from './components';
import {Pages} from './components/Content/pages.js';
import './App.scss';

const totalPages = Pages.length;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      section: 'intro',
      name: this.renderName(),
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

      this.setState({section: Pages[this.state.currentPage - 1].section});
    });

    window.addEventListener('resize', () => {
      this.setState({
        name: this.renderName()
      })
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup');
    window.removeEventListener('resize');
  }

  handleClick(page) {
    let currentPage;

    // TODO: Clean this shit up
    if (page === 'intro') {currentPage = 1}
    if (page === 'work') {currentPage = 2}
    if (page === 'about') {currentPage = 5}
    if (page === 'info') {currentPage = 6}
    if (page === 'more') {currentPage = 7}

    this.setState({
      section: page,
      currentPage: currentPage,
    })
  }

  renderName() {
    return window.innerWidth < 425 ? 'Kyle' : 'Kyle Durand';
  }

  render() {
    const {currentPage, name, section} = this.state;

    return (
      <Frame>
        <TopBar
          section={section}
          items={[
            {
              fill: true,
              title: name,
              onClick: () => this.handleClick('intro'),
            },
            {
              title: 'work',
              onClick: () => this.handleClick('work'),
            },
            {
              title: 'about',
              onClick: () => this.handleClick('about'),
            },
            {
              title: 'info',
              onClick: () => this.handleClick('info'),
            },
            {
              title: 'more',
              onClick: () => this.handleClick('more'),
            },
          ]}
        />
        <Content
          currentPage={currentPage}
          pages={Pages}
          />
      </Frame>
    );
  }
}
