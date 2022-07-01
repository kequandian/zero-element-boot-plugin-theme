import React, { useState } from 'react';
export default function Index(props) {
  const {
    margin,
    color = '',
    fontSize = '12px',
    children
  } = props;
  const baseStyle = {
    textAlign: 'center',
    backgroundColor: '',
    margin: `${margin}`,
    padding: '0',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: `${fontSize}`,
    color: `${color}` // border:'1px #ff0000 solid'

  };
  return React.Children.map(children, child => {
    return /*#__PURE__*/React.createElement("div", {
      style: baseStyle
    }, child);
  });
}