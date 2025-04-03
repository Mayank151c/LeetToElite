import React from 'react';
import '../styles/Tab.css';

const Tab = (props: { children: React.JSX.Element }) => {
  return (
    <div id='tabs'>
      {props.children}
    </div>
  );
};

export default Tab;