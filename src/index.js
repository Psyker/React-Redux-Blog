im
import ReactDOM from 'react-dom';
import React from 'react';
import {createStore} from 'redux';

const defaultState = {checked: false};
const reducer = function (state = defaultState, action) {
    switch (action.type) {
        case 'TOGGLE':
            return {...state, checked: !state.checked};
        default:
            break;
    }
    return state;
};
const store = createStore(reducer);

class App extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        const onClick = () => {
            store.dispatch({ type : 'TOGGLE' })
        };
        return (
            <div>
                <h1>To-Dos</h1>
                <div>
                    Learn Redux &nbsp;
                    <input
                        type="checkbox"
                        checked={!!this.state.checked}
                        onClick={onClick}
                    />
                </div>
                { this.state.checked ? (<h2>Done !</h2>) : null }
            </div>
        );
    }

    componentWillMount() {
        store.subscribe(() => this.setState(store.getState()))
    }
}

ReactDOM.render((
    <App />
), document.getElementById('root'));
