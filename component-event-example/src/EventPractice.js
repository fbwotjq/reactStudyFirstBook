import React, { Component } from 'react';

class EventPractice extends Component {

    state = {
        message: '',
        username: ''
    }

    //Property Initializer Syntax - babel의 transform-class-propteries 문법 사용하므로 주석을 써도 됨
    /*
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    */

    /*
    handleChange(e) {
        this.setState({
            message: e.target.value
        });
    }

    handleClick() {
        alert(this.state.message);
        this.setState({
            message: ''
        });
    }
    */
    //Property Initializer Syntax - babel의 transform-class-propteries 문법 사용
    handleChange = (e) => {
        /*
        name="message" 에만 이벤트 할당 했을 때
        this.setState({
            message: e.target.value
        });
        */
        this.setState({
            [e.target.name]: e.target.value
        });    
    }
    handleClick = () => {
        /*
        name="message" 에만 이벤트 할당 했을 때   
        alert(this.state.message);
        this.setState({
            message: ''
        });
        */
        alert(this.state.username + ":" +this.state.message);
        this.setState({
            message: '',
            username: ''
        });
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input type="text" name="username" placeholder="이름을 입력" value={this.state.username} onChange={this.handleChange}/> 
                <input type="text" name="message" placeholder="아무거나 입력하세요." 
                value={this.state.message}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
                /*
                onChange={
                    (e) => {
                        //console.log(e);
                        //console.log(e.target.value);
                        this.setState({
                            message: e.target.value
                        })
                    }
                */
                />
                <button onClick={this.handleClick}
                /*
                onClick={
                    () => {
                        alert(this.state.message);
                        this.setState({
                            message: ''
                        })
                    }
                }*/>확인</button>
            </div>
        )
    }
}

export default EventPractice;