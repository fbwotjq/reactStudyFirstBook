import React, { Component } from 'react';
import PageTemplate from './PageTemplate'
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const initialTodos = new Array(500).fill(0).map(
        (foo, index) => (
            {id: index, text: `일정 ${index}`, done: false}
        )
    );

class App extends Component {

    state = {
        input: '',
        todos: /*[
            {id: 0, text: '리엑트 공부하기', done: true},
            {id: 1, text: '컴포넌트 스타일링 해보기', done: false}
        ]*/initialTodos,
        globalId: 1
    }
    //id = 1;
    getId = () => {
        const idx = this.state.globalId + 1;
        this.setState({globalId: idx});
        return idx;
    }

    handleToggle = (id) => {

        const { todos } = this.state;
        const index = todos.findIndex(todo => todo.id === id);

        const toggled = {
            ...todos[index],
            done: !todos[index].done
        };

        this.setState({
            todos: [
                ...todos.slice(0, index),
                toggled,
                ...todos.slice(index + 1, todos.length)
            ]
        });
        //console.log("handleToggle");

    }

    handleRemove = (id) => {

        const { todos } = this.state;
        const index = todos.findIndex(todo => todo.id === id);

        this.setState({
            todos: [
                ...todos.slice(0, index),
                ...todos.slice(index + 1, todos.length)
            ]
        });
        //console.log("handleRemove");

    }

    handleChange = (e) => {
        const { value } = e.target;
        this.setState({
            input: value
        });
    }

    handleInsert = () => {
        const { todos, input } = this.state;
        const newTodo = {
            text: input,
            done: false,
            id: this.getId()
        };
        this.setState({
            todos: [...todos, newTodo],
            input: ''
        });
    }

    render() {

        const { input, todos } = this.state;
        const { 
            handleChange, handleInsert, handleToggle, handleRemove
        } = this;
        
        return (
            <PageTemplate>
                <TodoInput onChange={handleChange} 
                        onInsert={handleInsert} 
                        value={input} />
                <TodoList todos={todos} 
                    onToggle={handleToggle}
                    onRemove={handleRemove}/>
            </PageTemplate>
        );
    }   
}

export default App;