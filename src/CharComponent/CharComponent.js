import React from 'react';

const style={
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black'
};


const charcomponent = (props) => {

    return  <div style={style} onClick={props.delete}>
                {props.letter}
            </div>};

export default charcomponent;
