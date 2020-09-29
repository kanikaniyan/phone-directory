import React, {Component} from 'react';

const ProgressBar = ({value, max}) => {
    return (
        <div style={{textAlign:'center'}}>
            <progress id= 'progressBar' value={value} max= {max} />
            <span id='progressStatus'> Very Weak</span>
        </div>
    )
}
export default ProgressBar;