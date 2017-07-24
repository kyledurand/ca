import React from 'react';
import {classNames} from '../../utilities';
import './TopBar.css';

export default class App extends React.PureComponent {
  render() {
    const {items, section} = this.props;

    return (
      <div className={`TopBar ${section}`}>
        {items.map((item) => {
          const {title, fill, onClick} = item;
          const className = classNames({
            'TopBarButton': true,
            'selected': section === title,
          });

          return (
            <div
              key={title}
              className={fill && 'TopBarItem-fill'}>
              <button
                className={className}
                onClick={onClick}
              >
                {title}
              </button>
            </div>
          )
        })}
      </div>
    );
  }
}

