import React, {Component} from 'react';
import Output from './Output'
import './style.css'

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        query: '',
        location: null
      };
    }

    search(){
        const FETCH_URL = "http://api.openweathermap.org/data/2.5/weather?q=" + this.state.query + "&appid=a77341d2973ec5002d7d4020c6782679";
        fetch(FETCH_URL, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            const location = json;
            this.setState({location});
        });

    }

    render() {
        return(
            <div className="wrapper">
                  <div className="search">
                    <h1>WeatherApp</h1>
                    <div className="input-group">
                       <input type="text" className="form-control" placeholder="Enter email"
                          value={this.state.query} onChange={ event => {this.setState({query: event.target.value})} }
                          onKeyPress = {event => {
                              if (event.key === 'Enter' && this.state.query !== ''){
                                  this.search();
                              }
                          }}
                        />
                       <span className="input-group-btn">
                           <button className="btn btn-secondary" type="button" onClick={
                               () => {
                                   if (this.state.query !== ''){ this.search()}
                           }}>
                            Search</button>
                       </span>
                   </div>
                   <Output
                       location={this.state.location}
                   />
                  </div>
                  <div className="footer">
                    <p>Author: <a href="https://github.com/HumbleNarcissus">Maciej Tarach</a></p>
                  </div>
                </div>

        )
    }
}

export default App;
