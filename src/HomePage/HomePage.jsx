import React from 'react';
import { Link } from 'react-router-dom';
import NavbarMenu from '../_components/NavbarMenu';

//import InfoList from '../_components/InfoList';
import EventsList from '../_components/EventsList';


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
                
                <div class="container" style={style}>
                    <br></br>
                    <div className="row justify-content-left">
                        
                        <div className="col">
                        <h1 class="display-4">Offers in your area</h1>
                       
                       
                        <EventsList />
                        </div>
                      
                    </div>

                </div>
            </div>
            
           
        );
    }
}
export {HomePage};