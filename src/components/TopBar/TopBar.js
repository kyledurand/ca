import React from 'react';
import classNames from 'classnames';
import * as styles from './TopBar.scss';

export default class App extends React.PureComponent {
  render() {
    const {items, section} = this.props;

    return (
      <div className={classNames(styles.TopBar, styles[`${section}`])}>
        {items.map((item) => {
          const {title, fill, onClick} = item;
          const className = classNames(
            styles.TopBarButton,
            section === title && styles.selected,
          );

          return (
            <div
              key={title}
              className={fill && styles['TopBarItem-fill']}
            >
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
