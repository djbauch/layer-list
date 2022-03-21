import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers/reducer'
import {composeWithDevTools} from '@redux-devtools/extension/src/logOnlyInProduction'

const middleware = [thunk]

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))
export default store