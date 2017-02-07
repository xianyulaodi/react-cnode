
// import React from 'react';
// import {render} from 'react-dom';
// import { Provider } from 'react-redux'
// import { browserHistory } from 'react-router'
// import { syncHistoryWithStore } from 'react-router-redux'
// import configureStore from './store/configureStore'

// import { createStore } from 'redux';

// import App from './containers/App'

// const store = configureStore();
// const history = syncHistoryWithStore(browserHistory, store)
// console.log(store)

// render(
//       <Provider store={store}>
//         <App history={history}/>
//       </Provider>,

//   document.getElementById('root')
// );


import 'babel-core/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
// import { Router, Route,IndexRoute, hashHistory,browserHistory  } from 'react-router'
import App from './containers/App'
import configureStore from './store/configureStore'
import { browserHistory,hashHistory} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

const store = configureStore()
// const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <App history={hashHistory} />
  </Provider>,
  document.getElementById('root')
)

// Provider存在的意义在于：想通过context的方式将唯一的数据源store传递给任意想访问的子孙组件