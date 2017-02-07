import React from 'react'
import {hashHistory,Link,IndexLink } from 'react-router'

class NavBar extends React.Component {


  render() {
    const {film} = this.props
    const styles = {};
     styles.link = {
       color: '#ccc'
     }
     styles.activeLink = {
       ...styles.link,  // ...的意思是相当于拿到了styles.link里面的全部属性
       color:'#ffa6a6'
     }
    return (
    <ul className="navBar">
        {/**<li onClick={() => hashHistory.push('/')} styles={styles.link}  activeStyle={styles.activeLink} >首页</li>**/}
        <li><IndexLink  to="/"  style={styles.link}  activeStyle={styles.activeLink} className="index-nav-tab" >首页</IndexLink></li>
        <li><Link to="/publish" style={styles.link}  activeStyle={styles.activeLink} className="index-nav-tab" >发表</Link></li>
        <li><Link to="/news"    style={styles.link}  activeStyle={styles.activeLink} className="index-nav-tab" >消息</Link></li>
        <li><Link to="/my"      style={styles.link}  activeStyle={styles.activeLink} className="index-nav-tab" >我的</Link></li>
    </ul>
    )
  }
}

export default NavBar
