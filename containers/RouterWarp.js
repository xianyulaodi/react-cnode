
import React from 'react'
import NavBar from '../components/navBar'
import '../styles/reset.css'
import '../styles/index.css'

class RouterWarp extends React.Component{
	render(){
		const {children}=this.props
		return (
			<div>
				<NavBar />
				{children}
			</div>
		)
	}
}

export default RouterWarp