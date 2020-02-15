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


class HomePage extends React.Component {
    componentDidMount() {
        
    }

    render() {
        const { user, users } = this.props;
        return (

            <div>
            
                <NavbarMenu />
                                    <QuickFilters />
                <div className="container" style={style}>
                    <br></br>
                    <div className="row justify-content-left">
                   
                        
                        <div className="col">
                          
                                <div className="card" color="#de7008">
                                    <div className="card-body">
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