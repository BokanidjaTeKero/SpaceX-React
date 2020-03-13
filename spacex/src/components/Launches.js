import React, { Component } from 'react';
import Launch from './Launch';
import LaCard from './LaCard';
import './Launches.css';

class Launches extends Component {

    constructor() {
        super();
    
        this.state = {
            launches: [],
            request: 'https://api.spacexdata.com/v3/launches',
            launch: {},
            launchReq: 'https://api.spacexdata.com/v3/launches/1',
            searchedData: [],
            click: false
        };
    }
  
    componentDidMount() {

        this.showFlights(this.state.request);
        this.defaultFlight(this.state.launchReq);
        
        this.setState({
            launches: this.state.launches,
            click : this.state.click,
        })
    }

    
    sholudComponentUpdate( nextProps, nextState ) {
        if ( nextState.launches.length !== this.state.launches.length
             && nextState.launch.length !== this.state.launch.length ) {
			return true
		}
		return false
  }

    showFlights(req) { 
        let request = req;
      
        fetch(request)
          .then( response =>  response.json())
          .then( myJson => {
            this.setState({
              launches : myJson,
              searchedData: myJson
            })
          })
    }


    defaultFlight(req) { 
        let request = req;
      
        fetch(request)
          .then( response =>  response.json())
          .then( myJson => {
            this.setState({
              launch : myJson,
            })
          })
    }

    showFlight(req) { 
        let request = `https://api.spacexdata.com/v3/launches/${req}`;
      
        fetch(request)
          .then( response =>  response.json())
          .then( myJson => {
            this.setState({
              launch : myJson,
            })
          })
    }

    select = (id) => {
        
        this.showFlight(id);
        this.setState({
            click : true,
        })
    }

    search = ( e ) => {
        const word = e.target.value;
        const searchedData = this.state.launches.filter( launch => {
          return launch.mission_name.toLowerCase().includes( word.toLowerCase().trim() )
        })
        this.setState({
            searchedData: searchedData
        })
    }  

    render() {
        const { click, launch, searchedData } = this.state;
        return (
          <div className='body-page-launch'>
            <div className='launchess'>
                <LaCard 
                    cards={ searchedData }
                    select={ this.select }
                    search={ ( e ) => this.search( e ) }
                />
                { click && 
                  <Launch launch={ launch } />
                }
            </div> 
          </div> 
        )
    }
}

export default Launches;