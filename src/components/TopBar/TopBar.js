import React from 'react';
import './TopBar.css';

const Page = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
}

export default class App extends React.PureComponent {
  render() {
    const {items, currentPage} = this.props;

    return (
      <div className={`TopBar ${Page[currentPage]}`}>
        {items.map((item) => {
          const {handleClick} = item;

          return (
            <div
              key={item.content}
              className={item.fill && 'TopBarItem-fill'}>
              <button
                className="TopBarButton"
                onClick={handleClick}
              >
                {item.content}
              </button>
            </div>
          )
        })}
      </div>
    );
  }
}

