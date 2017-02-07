 // Created by xianyulaodi on 2017/01/23.
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Router, Route,IndexRoute, hashHistory,browserHistory,Link  } from 'react-router'
import { bindActionCreators } from 'redux'
import RouterWarp from './RouterWarp'
import IndexView from './IndexView'
import Detail from '../containers/detail/Detail'
import My from '../containers/my/my'
import News from '../containers/news/news'
import Publish from '../containers/publish/publish'

class App extends Component {

  render() {

    return ( 

      <Router history={this.props.history}>
        <Route path="/" component={RouterWarp}>
          <IndexRoute component={IndexView} />
          <Route path="detail/:id" component={Detail} />
          <Route path="my" component={My} />
          <Route path="news" component={News} />
          <Route path="publish" component={Publish} />
        </Route> 
      </Router> 

      )
    }
}

export default App;
