import React from 'react'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import reducer from "../reducer/index"
import BoxCon from '../container/BoxContainer'

let store = createStore(reducer, applyMiddleware(thunk))

class App extends React.Component {
    render () {
        return (
            <Provider store={store}><BoxCon></BoxCon></Provider>
        )
    }
}

export default App
