import from './index.scss'
import React from 'react'
import {render} from 'react-dom'
import { Router, Route,hashHistory,IndexRedirect } from 'react-router'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'


const store = createStore((state = {}, action)=>{
    return state;
})
class App extends React.Component{
    render(){
        let a=Object.assign({},{name:"Hello World"})
        return (
            <h1>{a.name}</h1>
        )
    }
}
const routes = (
    <Route path="/" component={App}>
    </Route>
)

render(
    (
        <Provider store={store}>
            <Router routes={routes} history={hashHistory}/>
        </Provider>
    )
    ,document.getElementById("demo"))
