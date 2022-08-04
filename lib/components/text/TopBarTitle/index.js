import React, { useState } from 'react';
import CssCart from 'zero-element-boot/lib/components/cart/CssCart';
import ContainerSubtitle from 'zero-element-boot-plugin-theme/lib/components/text/ContainerSubtitle';
/**
 * 标题栏容器，有一个返回键，页面作为子组件
 * 
 * 
 * @param {children} children 子组件(页面)
 * 
 */

export default function Index(props) {
  const {
    children
  } = props;
  return React.Children.map(children, child => {
    return /*#__PURE__*/React.createElement(CssCart, {
      margin: "0  16px"
    }, /*#__PURE__*/React.createElement(ContainerSubtitle, null, child));
  });
}