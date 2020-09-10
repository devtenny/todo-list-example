import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    render() {
        const { text, checked, id, onToggle, onRemove } = this.props;  // 상위 TodoItemList로 부터 가져옴 

        return (
            // 상위 컴포넌트에서 전달해온 id 값 대입
            <div className="todo-item" onClick={() => onToggle(id)}> 
                <div className="remove" 
                onClick={(e) => {e.stopPropagation();  // 상위 태그의 이벤트가 발생하지 않도록 함
                                 onRemove(id)}
                }>&times;</div>
                {/* `${}`사용해서 js 코드 작성(템플릿 리터럴), checked값이 true면 checked 클래스명 추가 */}
                {/* <div className={`todo-text ${checked && 'checked'}`}>  */}
                <div className={`todo-text ${checked ? ' checked' : ''}`}> 
                    <div>{ text }</div>
                </div>
                {
                    // checked && (<div className="check-mark">✓</div>)
                    checked ? (<div className="check-mark">✓</div>) : ''  // checked값이 true면 체크마크 추가
                }
            </div>
        );
    }
}
export default TodoItem;