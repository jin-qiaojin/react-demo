import React, { Component } from 'react';

class WeatherPanel extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            template: 'NA'
        }

        this.getTemperature = this.getTemperature.bind(this)
    }
    
    getTemperature(){
        var random = Math.random() * 1000
        this.setState({
            template: random
        })
    }

    render() {
        const {location} = this.props
        return (
            <div>
                <p>{location}现在的温度是{this.state.template}</p>
                <button onClick={this.getTemperature}>点击我改变温度</button>
            </div>
        );
    }
}

export default WeatherPanel;