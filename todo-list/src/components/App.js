import React, { Component } from 'react';
import PageTemplate from './PageTemplate'
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {

    state = {
        input: ''
    }

    handleChange = (e) => {
        const { valuer } = e.target;
        this.setState({
            input: valuer
        });
    }

    render() {

        const { input } = this.state;
        const { handleChange } = this;

        return (
            <PageTemplate>
                <TodoInput onChange={handleChange} value={input}/>
                <TodoList />
            </PageTemplate>
        );
    }   
}

export default App;