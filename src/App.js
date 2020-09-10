import React, { Component } from 'react';
import TodoList from './components/TodoList';
import InputForm from './components/InputForm';
import TodoItemList from './components/TodoItemList';

class App extends Component {

  id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    input: '',
    todos: [
      { id: 0, text: ' 리액트 소개', checked: false },
      { id: 1, text: ' 리액트 소개', checked: true },
      { id: 2, text: ' 리액트 소개', checked: false }
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    });
  }

  // 할 일을 목록에 추가하는 메소드(input 비우고 배열에 todo 추가)
  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '', // 인풋 비우고
      // concat(배열끼리 합쳐줌)을 사용하여 배열에 추가
      todos: todos.concat({
        id: this.id++,  // id값을 하나 증가시켜서
        text: input,
        checked: false  // 기본값은 체크 안된 상태로
      })
    });
  }

  // 엔터키를 누르면 위의 할일 추가 메소드 호출하는 메소드
  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if(e.key === 'Enter') {  // 이벤트의 key 값을 가져와서 엔터인지 확인
      this.handleCreate();
    }
  }

  // 선택한 할 일 항목을 삭제하는 메소드
  handleRemove = (id) => {  // 매개변수로 id값을 가져옴
    const { todos } = this.state;  // state 값을 가져와서 상수에 할당, 이 때 어떤 값을 가져올 지 하나로 꼭 찝지 않아도 가능한가보다
    this.setState({
      todos: todos.filter(todo => todo.id !== id)  // 배열.filter(조건) 활용해서 선택한 항목만 뺀 배열을 생성하여 state 값 수정
    });
  }

  // 토글 기능 메소드
  handleToggle = (id) => {  // 매개변수로 id값을 가져옴
    const { todos } = this.state;

    // 파라미터로 받은 id를 가지고 몇번째 아이템인지 찾습니다.
    const index = todos.findIndex(todo => todo.id === id);  // 배열.findIndex(조건) 활용해서 선택한 id와 같은 id를 가진 항목이 몇번째에 있는지 찾음
    const selected = todos[index]; // 위의 과정으로 찾아낸 인덱스 번호에 해당하는 항목을 가져옴 -> 선택한 항목 가져옴

    const nextTodos = [...todos]; // ...을 활용해서 배열안에 있는 모든 원소를 가져옴, 즉 배열을 복사

    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextTodos[index] = {  // 선택한 항목을 복사해온 배열에서 선택하고
      ...selected,  // 선택한 항목의 모든 속성 값 가져옴(?) 
      checked: !selected.checked  // 선택한 항목의 checked값의 반대를 checked에 저장
    };

    this.setState({
      todos: nextTodos  // 체크값을 반대로 변경한 배열로 덮어쓰기
    });
  }

  render() {
    const { input, todos } = this.state;
    const { 
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove 
    } = this;

    return (
      <TodoList form={(
        <InputForm  // InputForm의 파라미터로 각각 할당
          value={input}  // {this.state.input}
          onKeyPress={handleKeyPress}  // {this.handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
        )}>
        <TodoItemList
          todos={todos}  // 하위 컴포넌트(TodoItemList)에게 배열 전달
          onToggle={handleToggle}
          onRemove={handleRemove}
        />
      </TodoList>
    );
  }
}

export default App;
