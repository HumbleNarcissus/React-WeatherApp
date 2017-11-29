import React, {Component} from 'react';
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
        console.log('this.state', this.state);
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
                              if (event.key === 'Enter'){
                                  this.search();
                              }
                          }}
                        />
                       <span className="input-group-btn">
                           <button className="btn btn-secondary" type="button" onClick={() => this.search()}>
                            Search</button>
                       </span>
                   </div>
                  </div>
                  <div className="weather">
                    <div className="city"></div>
                    <img className="icon" src="" alt=""/>
                    <div className="info"></div>
                    <div className="degrees"></div>
                  </div>
                  <div className="footer">
                    <p>Author: <a href="https://github.com/HumbleNarcissus">Maciej Tarach</a></p>
                  </div>
                </div>

        )
    }
}

export default App;
