import React from 'react';
/**
 * 
 * @param {color} color 背景，边框，字体颜色
 * 
 */

export default function Index(props) {
  const {
    fontSize = '8px',
    children,
    margin = '2px'
  } = props;
  const baseStyle = {
    textAlign: 'center',
    backgroundColor: '',
    margin: `${margin}`,
    padding: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: `${fontSize}`,
    color: '#cdcdcd' // border:'1px #ff0000 solid'

  };
  return React.Children.map(children, child => {
    return /*#__PURE__*/React.createElement("div", {
      style: baseStyle
    }, child);
  });
}