import React from 'react';
import { Link } from 'react-router-dom';
import NavbarMenu from '../_components/NavbarMenu';

import FavoriteIcon from '@material-ui/icons/Favorite';
import QuickFilters from '../_components/QuickFilters';
import EventsList from '../_components/EventsList';
import MapView from '../_components/MapView';


const style = {
    width: '100%',
    margin: 'auto'
}
const selectStyle = {
    width: '100%'
}


class HomePage extends React.Component {
    componentDidMount() {
        
    }

    render() {
        const { user, users } = this.props;
        return (

            <div>
            
                <NavbarMenu />
                <div className="container" style={style}>
                <center>
                <form>
                   
                    
                    <div class="form-row justify-content-right">
    <div class="col">
    <label for="exampleInputEmail1">What do you fancy today?</label>
    <select class="form-control" id="exampleFormControlSelect1" style={selectStyle}>
      <option>Spanish Food</option>
      <option>Italian Food</option>
      <option>Indian Food</option>
      <option>Oriental Food</option>
      <option>Sushi</option>
    </select>
    </div>
    <div class="col">
    <label for="exampleInputEmail1">Select Area</label>
    <select class="form-control" id="exampleFormControlSelect1" style={selectStyle}>
      <option>West End</option>
      <option>East End</option>
      <option>City Center</option>
      <option>South Side</option>
      <option>North</option>
      <option>Maryhill</option>
    </select>
    </div>
  </div>
  
  </form>
  </center>         
  <br></br>
                <hr></hr>
                    <br></br>
                    <div className="row justify-content-left">
                   
                        
                        <div className="col">
                          
                                <div className="card" color="#de7008">
                                    <div className="card-body">
                                    <QuickFilters />
                                        <EventsList />
                                    </div>
                                </div>
                        </div>

                        <div className="col">
                           
                      
                                <div className="card" color="#de7008">
                                    <div className="card-body">
                                    <MapView />
                                    </div>
                                </div>
                                        
                                    </div>
                                </div>
                        </div>
                    </div>
                
         
            
           
        );
    }
}
export {HomePage};