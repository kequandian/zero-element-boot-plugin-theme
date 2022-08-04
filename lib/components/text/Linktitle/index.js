import React, { useState } from 'react';
/**
 * @param {color} color 背景，边框，字体颜色
 * 
 */

export default function Index(props) {
  const {
    children,
    color = '#5495fe'
  } = props;
  const baseStyle = {
    backgroundColor: '',
    margin: '2px',
    padding: '0',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '12px',
    color: `${color}`
  };
  return React.Children.map(children, child => {
    return /*#__PURE__*/React.createElement("div", {
      style: baseStyle
    }, child);
  });
}