import React from 'react';

const validationcomponent = (props) => {

    const styleContainer={
        display: 'inline-block',
        border: 'solid black',
        padding: '20px',

    }

    let textComment= null;

    if (props.textLength > 5) {

        textComment=(
            <div>
                <p>Greater than five</p>
            </div>);
    }
    else {textComment=(
        <div>
        <p>Less than five</p>
        </div>
    )}

    return <div style={styleContainer}> String length: {props.textLength} {textComment}</div>
};

export default validationcomponent;
