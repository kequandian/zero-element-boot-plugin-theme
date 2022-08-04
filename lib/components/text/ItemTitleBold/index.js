import React, { useState } from 'react';
export default function Index(props) {
  const {
    children
  } = props;
  const baseStyle = {
    backgroundColor: '',
    padding: '0',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '14PX' // border:'1px #ff0000 solid'

  };
  return React.Children.map(children, child => {
    return /*#__PURE__*/React.createElement("div", {
      style: baseStyle
    }, child);
  });
}