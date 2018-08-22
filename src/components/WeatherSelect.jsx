import React, { Component } from 'react';

class WeatherSelect extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div>
                <select name="" id="" onChange={(event)=>{this.props.locationUpdate(event.target.value)}}>
                    {this.props.locationGroup.map((item)=>{
                        return <option value="" key={item.key} value={item.value}>{item.value}</option>
                    })}
                </select>
            </div>
        );
    }
}

export default WeatherSelect;