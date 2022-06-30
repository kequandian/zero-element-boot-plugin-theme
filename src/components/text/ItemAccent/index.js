import React, { useState } from 'react';

/**
 * 
 * 
 */


export default function Index(props) {

    const { color = '#b03931',width='',margin, fontSize='13px',justifyContent='flex-end',children, } = props;


    const baseStyle = {
        textAlign: 'center',
        backgroundColor: '',
        display: 'flex',
        justifyContent: `${justifyContent}`,
        // border: '1px #ff0000 solid',
        alignItems: 'center',
        color: `${color}`,
        margin:`${margin}`,
        fontSize: `${fontSize}`,
        color: '#b03931',
        width:`${width}`

    }

    return React.Children.map(children, child => {
        return <div style={baseStyle} >
            {child}
        </div>
    })
}