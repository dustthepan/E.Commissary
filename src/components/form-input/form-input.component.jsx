import React from 'react';
import './form-input.styles.scss';

const FormInput = ({handleChange, label, ...otherParts}) => (
<div className = 'group'>
    <input className ='form-input' onChange={handleChange} {...otherParts}/> 
    {
        label ?
        (
            <label className={`${otherParts.value.length ?'shrink':''} form-input-label`}>
                {label}
            </label>
        )
        :null
    }
</div>
)

export default FormInput;