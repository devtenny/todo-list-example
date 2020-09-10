import React from 'react';
import './TodoList.css';

const TodoList = ({form, children}) => {
    return (
        <main className="todo-list">
            <div className="title">
                오늘 할 일
            </div>
            <section className="form">
                { form }
            </section>
            <section className="todos">
                { children }
            </section>
        </main>
    )
}
export default TodoList;