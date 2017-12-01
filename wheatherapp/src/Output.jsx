import React, {Component} from 'react';
import './style.css';

class Output extends Component {


    render(){
        let location = {name: '', weather: [{icon: '', description: ''}], main: {temp: ''},
                        sys: {country: ''}};
        if (this.props.location !== null) {
            location = this.props.location;
        }

        return (
            <div className="weather">
               <h2 className="city" id="city">{location.name + ', ' + location.sys.country}</h2>
               <img className="icon" id="icon" src={"http://openweathermap.org/img/w/" + location.weather[0].icon + ".png"} alt=""/>
               <h3 className="info">{location.weather[0].description}</h3>
               <h3 className="degrees" id="ic">{(location.main.temp - 273.15).toFixed(1) +"\xB0C"}</h3>
            </div>
        )
    }

}

export default Output;
