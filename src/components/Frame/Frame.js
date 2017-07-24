import React from 'react';
import './Frame.css';

export default function App({children}) {
  return (
    <div className="AppFrame">
      {children}
    </div>
  );
}
