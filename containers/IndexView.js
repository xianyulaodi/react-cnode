import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link  } from 'react-router'
import { bindActionCreators } from 'redux'
import ReactPullLoad from 'react-pullload' //用来制作上拉加载更多,使用方法 https://www.npmjs.com/package/react-pullload
import * as actions from '../actions'

class IndexView extends Component {
  constructor(props) {
    super(props);
    this.state = {
         tabs:[
             {tabName:"全部",id:0,tabType:'all'},
             {tabName:"精华",id:1,tabType:'good'},
             {tabName:"分享",id:2,tabType:'share'},
             {tabName:"问答",id:3,tabType:'ask'},
             {tabName:"招聘",id:4,tabType:'job'},
         ],
         currentIndex:0,
         hasMore: true,
         data:[],
         curpage:1,
         curTabType:'all'
    };
    // this.refreshResolve = null //用于保存刷新或者加载更多的resolve函数 
    this.loadMore = this.loadMore.bind(this);
    this.refresh = this.refresh.bind(this);
    this.changTopicsType = this.changTopicsType.bind(this)
  }
 
  componentWillMount(){
      
  }

  //初始化渲染后触发
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(actions.fetchTopics());
  }

  //每次接受新的props触发
  componentWillReceiveProps(nextProps) {

  }

  shouldComponentUpdate(nextProps, nextState) {
    // 如果这里为false，则不会渲染页面，如果为ture,则重新渲染页面
    return true
  }

  // 这里是下拉刷新
  refresh(resolve, reject) {
      resolve();
  }

  //加载更多 
  loadMore(resolve){

      const curpage=this.state.curpage+1;

      const topicsData=this.props.topics.topicsData || [];
      const concatData=this.state.data.concat(topicsData);

      this.setState({
          curpage:curpage,
          data:concatData
      });
      const curTabType=this.state.curTabType;
      this.props.dispatch(actions.fetchTopics(curpage,curTabType,10));
      resolve();  ///下拉加载成功后需要执行
     
  }

  // 改变首页的主题
  changTopicsType(tabType,tabId) {

    this.props.dispatch(actions.fetchTopics(1,tabType,10));
    this.setState({
      currentIndex:tabId,
      curTabType:tabType,
      data:[]
    })
  }
  
  check_item_index(index){

      return index===this.state.currentIndex ? "Tab_item atcive" : "Tab_item";
  }

  
  render() {
    const{ topics } = this.props;
    const topicsData=topics.topicsData || [];
    const { hasMore,data } = this.state;
    const renderData=data.concat(topicsData);
    
    return (
      <div>
        <nav className="indexNav">
          {
            this.state.tabs.map((ele,index)=>
              <li key={index} onClick={this.changTopicsType.bind(this,ele.tabType,ele.id)} className={this.check_item_index(index) }  >{ele.tabName}</li>
          )}
        </nav>
        <ReactPullLoad
          downEnough={150} 
          onRefresh={this.refresh.bind(this)} 
          onLoadMore={this.loadMore.bind(this)} 
          hasMore={hasMore}>
          <div className="item-list">
              {
                renderData.map((ele,index) => (
                  <li key={index}><Link to={`/detail/${ele.id}`}>{ele.title}</Link></li>
                ))
              }
          </div>
        </ReactPullLoad>
      </div>
    )
  }
}


function mapStateToProps(state) {
  // 这里很重要，这里需要用到的状态都要返回，不然无法实现
  const { topics } = state || {}
  return {
    topics
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(TodoActions, dispatch)
//   }
// }
export default connect(
  mapStateToProps
  // mapDispatchToProps
)(IndexView)

