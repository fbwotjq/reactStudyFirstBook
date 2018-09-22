import React, { Component } from "react";
import PropTypes from 'prop-types'

class MyComponent extends Component {
    static defaultProps =  {
        name: '볼빨간 귀요미'
    }
    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number.isRequired
    }
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }
    render() {
        return (
            <div>
                <p>React.js를 통해 나의 새롭고 멋진 컴포넌트를 중입니다. {this.props.name}</p>
                <p>저는 {this.props.age}살입니다.</p>
                <p>숫자: {this.state.number}</p>
                <button onClick={()=>{
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>더하기</button>
            </div>
        )
    }
}

// 올드한 방법
//MyComponent.defaultProps = {
//    name: '볼빨간 귀요미'
//}

export default MyComponent;