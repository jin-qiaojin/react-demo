import React, { Component } from 'react';
import SubNews from "../components/subNews";
import WeatherPanel from '../components/WeatherPanel'
import WeatherSelect from '../components/WeatherSelect'

class one extends Component {
    constructor(props) {
        super(props);
        this.locationUpdate = this.locationUpdate.bind(this)
        this.state = {
            location: '上海'
        }
    }
    
    locationUpdate(location){
        this.setState({
            location: location
        })
    }

    render() {
        let locationGroup = [{
            key: '1',
            value: '上海'
        },{
            key: '2',
            value: '广州'
        },{
            key: '3',
            value: '深圳'
        }]
        console.log(this)
        console.log(this.props.match.params.id)
        return (
            <div>
                first page
                <SubNews />
                <WeatherPanel location={this.state.location}/>
                <WeatherSelect locationGroup={locationGroup} locationUpdate={this.locationUpdate}></WeatherSelect>
            </div>
        );
    }
}

export default one;