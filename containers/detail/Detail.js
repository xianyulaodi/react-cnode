import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchTopicDetail } from '../../actions/index'

class Detail extends Component {
  constructor(props) {
    super(props)
    this.state={
        data:{
          title:'',
          summary:'',
          images:{medium:''}
        }
    }
  }
  componentWillMount(){
     
  }
  //初始化渲染后触发
  componentDidMount() {
      // 拿到有首页传过来id参数，然后请求到详情页
    const { params,dispatch } = this.props;
    dispatch(fetchTopicDetail(params.id));
   
  }

  render() {
    const {detail}=this.props;
    return (
      <div>
          <p>{detail.title}</p>
          <div dangerouslySetInnerHTML={{__html:detail.content}} ></div>
      </div>
    )
  }
}

// 改变了什么状态，就返回什么
const mapStateToProps = (state,ownProps) =>{
  const detail = state.detail || {}
  return {
    id: ownProps.params.id,
    detail
  }
}
export default connect(mapStateToProps)(Detail)

