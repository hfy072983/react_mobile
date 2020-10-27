
import {applyMiddleware,createStore} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import {composeWithDevTools} from 'redux-devtools-extension'

let middleware=applyMiddleware(thunk)
if(process.env.NODE_ENV==='development'){
    middleware=composeWithDevTools(middleware)
}

const store=createStore(reducers,middleware)
export default store