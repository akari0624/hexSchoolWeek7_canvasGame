import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import reducers from './reducers'

import indexRouter from './indexRouter'

const createStoreWithMiddleware = applyMiddleware()(createStore)

const appStore = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={appStore}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={indexRouter}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>, document.querySelector('.container'))
