import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

@withRouter
class SubNews extends Component {
    constructor(props) {
        super(props);
        this.changeLink = this.changeLink.bind(this)
    }
    
    changeLink(){
        console.log(this.props.history)
        this.props.history.push('/one/11')
    }

    render() {
        return (
            <div>
                this is page subNew
                <button onClick={this.changeLink}>点击跳转路由，跳转到第三个页面</button>
            </div>
        );
    }
}

export default SubNews;