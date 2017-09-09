import React from 'react';
import * as styles from  './Frame.scss';

export default function App({children}) {
  return (
    <div className={styles.AppFrame}>
      {children}
    </div>
  );
}
