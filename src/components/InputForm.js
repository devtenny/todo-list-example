import React from 'react'
import './InputForm.css';

// 매개변수가 4개인 함수형
const InputForm = ({value, onChange, onCreate, onKeyPress}) => {
    return (
        <div className="Inputform">
            {/* 각 이벤트를 App.js에서 메소드로 구현 */}
            <input className="input-text" value={value} onChange={onChange} onKeyPress={onKeyPress}/>  
            <button className="create-button" onClick={onCreate}>
                추가
            </button>
        </div>
    );
};

export default InputForm;