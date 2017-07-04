import React from 'react';
import classNames from '../../utilities/class-names';
import './TopBar.css';

const Page = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
}

export default class App extends React.Component {
  render() {
    const {items, page} = this.props;

    return (
      <div className={`TopBar ${Page[page]}`}>
        {items.map((item) => {
          return (
            <button
              key={item.content}
              className={classNames({
                'TopBarItem': true,
                'TopBarItem-fill': item.fill,
              })}
              onClick={item.handleClick}
            >
              {item.content}
            </button>
          )
        })}
      </div>
    );
  }
}

