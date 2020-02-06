import React, { Component } from "react";
import { Link } from 'react-router-dom';

//import bgImg from '../images/bg_carousel_v2.jpg';


const style = {
    display: 'flex',
    width: '18rem'

}



class EventsList extends React.Component {
    componentDidMount() {
        //  this.props.getUsers();
    }
    render() {
        return (
            <div>
              
                <div class="list-group">
                    <a href="#" class="list-group-item list-group-item-action shadow-sm p-3 mb-5 bg-white rounded">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">Offer Number 1</h5>
                            <small>Expire in 2 hours</small>
                        </div>
                        <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        <small>Topic: Donec id elit non mi porta.</small>
                    </a>
                   
                    <a href="#" class="list-group-item list-group-item-action shadow-sm p-3 mb-5 bg-white rounded">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">Offer Number 2</h5>
                            <small class="text-muted">Expire in 40 mins</small>
                        </div>
                        <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        <small class="text-muted">Topic: Donec id elit non mi porta.</small>
                    </a>
                   
                    <a href="#" class="list-group-item list-group-item-action shadow-sm p-3 mb-5 bg-white rounded">
                        <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Offer Number 3</h5>
                            <small class="text-muted">Expire in 1 hour</small>
                        </div>
                        <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        <small class="text-muted">Topic: Donec id elit non mi porta.</small>
                    </a>
                   
                    
                    <Link to="/events" >More...</Link>
                    
                </div>
            </div>


        );
    }
}


export default EventsList;
//export { EventsPage as EventsPage };