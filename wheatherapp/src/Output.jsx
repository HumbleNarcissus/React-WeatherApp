import React, {Component} from 'react';

class Output extends Component {
    constructor(props) {
        super(props);
        this.state = { imageStatus: 'loading' };
      }

      handleImageLoaded() {
        this.setState({ imageStatus: 'loaded' });
      }

      handleImageErrored() {
        this.setState({ imageStatus: 'failed to load' });
      }
    render(){
        let location = {name: '', weather: [{icon: '', description: ''}], main: {temp: ''}};
        if (this.props.location !== null) {
            location = this.props.location;
        }

        return (
            <div className="weather">
               <div className="city">{location.name}</div>
               <img className="icon" src={"http://openweathermap.org/img/w/" + location.weather[0].icon + ".png"}
                   onLoad={this.handleImageLoaded.bind(this)}
                   onError={this.handleImageErrored.bind(this)} alt=''
               />
               <div className="info">{location.weather[0].description}</div>
               <div className="degrees">{location.main.temp}</div>
            </div>

        )
    }

}

export default Output;
