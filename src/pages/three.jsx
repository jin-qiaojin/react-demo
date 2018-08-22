import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class three extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.props.history.push('/one')
  }
  
  render() {
    return (
      <div>
        <p>第三个页面</p>
        <Link to="/two">跳转到第二个页面</Link>
        <button onClick={this.handleClick}>跳转到第一个页面</button>
      </div>
    )
  }
}

