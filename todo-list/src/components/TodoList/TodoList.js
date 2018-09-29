import React, { Component } from 'react';
import TodoItem from '../TodoItem';

class TodoList extends Component {

    render() {
        const { todos, onToggle, onRemove } = this.props;
        const todoList = todos.map(
            todo => (
                <TodoItem
                    key={todo.id}
                    done={todo.done}
                    onToggle={() => onToggle(todo.id)}
                    onRemove={() => onRemove(todo.id)}>
                    {todo.text}
                </TodoItem>
            )
        );
        return (
            <div>
                { 
                /*
                <TodoItem done>리액트 공부하기</TodoItem>
                <TodoItem>컴포넌트 스타일 공부해 보기</TodoItem>
                */
                }
                {todoList}
            </div>
        );
    }
}

export default TodoList;