import React, { Component } from 'react';
import Buttons from '../components/Buttons';
import getRandomColor from '../lib/getRandomColor';
import CounterListContainer from './CounterListContainer';

//import CounterContainer from './CounterContainer';

import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {
    render() {
        const { onCreate, onRemove } = this.props;
        /*<div><CounterContainer /></div>*/ 
        return (
            <div className="App">
                <Buttons 
                    onCreate={onCreate}
                    onRemove={onRemove}
                />
                <CounterListContainer />
            </div>
        );
    }
}

const mapToDispatch = (dispatch) => ({
    onCreate: () => dispatch(actions.create(getRandomColor())),
    onRemove: () => dispatch(actions.remove())
});

export default connect(null, mapToDispatch)(App);