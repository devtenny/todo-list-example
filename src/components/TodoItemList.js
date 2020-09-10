import React, { Component } from 'react';
import TodoItem from './TodoItem'

class TodoItemList extends Component {
    render() {
        const { todos, onToggle, onRemove } = this.props;  // 상위 컴포넌트(App)에서 가져온!
        
        const todoList = todos.map(  // todos 배열에서 map() 활용하여 모든 요소에 대입(foreach 같은 역할)해서 가져온 것들을 todoList에 대입
            ({id, text, checked}) => (  // 요소 하나씩 다 가져와야 되기 때문에 map이용해서 반복
              <TodoItem
                id={id}
                text={text}
                checked={checked}
                onToggle={onToggle}
                onRemove={onRemove}
              />
            )
          );

        return (
            <div>
                { todoList } 
            </div>
        );
    }
}
export default TodoItemList;