import React from 'react';

/**
 * 
 * @param {fontSize} fontSize 字号
 * @param {margin} margin 边距
 * 
 */


export default function Index(props) {

    const { children } = props;


    const baseStyle = {
        fontWeight: 'bold',
        fontSize: '24px',
        color: '#333333',
        // border:'1px #ff0000 solid'
    }



    return React.Children.map(children, child => {
        return <div style={baseStyle} >
            {child}
        </div>
    })
}