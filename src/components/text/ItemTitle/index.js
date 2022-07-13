import React, { useState } from 'react';



export default function Index(props) {

    const { children } = props;


    const baseStyle = {
        textAlign: 'center',
        padding: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '14px',
        height:'26px',
        // border:'1px #ff0000 solid'
    }



    return React.Children.map(children, child => {
        return <div style={baseStyle} >
            {child}
        </div>
    })
}