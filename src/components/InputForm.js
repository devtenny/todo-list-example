import React from 'react'
import './InputForm.css';

const InputForm = ({value, onChange, onCreate, onKeyPress}) => {
    return (
        <div className="Inputform">
            <input className="input-text" value={value} onChange={onChange} onKeyPress={onKeyPress}/>
            <button className="create-button" onClick={onCreate}>
                추가
            </button>
        </div>
    );
};

export default InputForm;