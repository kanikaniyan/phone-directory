import React from 'react';
import './index.css';
const StrengthCriteria = () => {
    return (
        <div className='req'>
            <ul style={{listStyle: 'none'}}>
                <li> Minimum 8 characters long </li>
                <li> Atleast 1 capital letter </li>
                <li> Atleast 1 number </li>
                <li> Atleast 1 special character </li>    
            </ul>
        </div>    
    )
}

export default StrengthCriteria;