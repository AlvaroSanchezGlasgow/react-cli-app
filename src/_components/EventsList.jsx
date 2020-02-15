import React, { Component } from "react";
import { Link } from 'react-router-dom';

import FavoriteIcon from '@material-ui/icons/Favorite';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';


const style = {
    display: 'flex',
    width: '18rem'

}

const toExpire = {
   color: 'red !important',
    

}



class EventsList extends React.Component {
    componentDidMount() {
        //  this.props.getUsers();
    }
    render() {
        return (
            <div>
              
                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action shadow-sm p-3 mb-5 bg-white rounded">
                        <div className="d-flex w-100 justify-content-between">
                    
                            <h5 className="mb-1">Offer Number 1</h5>
                            
                            <small><font color="green">Expire in 2h 25m</font></small>
                            <a href=""><FavoriteIcon/></a>
                          
                        </div>
                        <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        <small>Area: Donec id elit non mi porta.</small>
                       
                    </a>
                   
                    <a href="#" className="list-group-item list-group-item-action shadow-sm p-3 mb-5 bg-white rounded">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">Offer Number 2</h5>
                            <small className="text-muted"> <font color="red">Expire in 40 mins</font></small>
                            <a href=""><FavoriteIcon/></a>
                        </div>
                        <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        <small className="text-muted">Area: Donec id elit non mi porta.</small>
                    </a>
                   
                    <a href="#" className="list-group-item list-group-item-action shadow-sm p-3 mb-5 bg-white rounded">
                        <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Offer Number 3</h5>
                            <small className="text-muted"><font color="orange">Expire in 1h 13m</font> </small>
                            <a href=""><FavoriteIcon/></a>
                        </div>
                        <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        <small className="text-muted">Area: Donec id elit non mi porta.</small>
                    </a>

                    <a href="#" className="list-group-item list-group-item-action shadow-sm p-3 mb-5 bg-white rounded">
                        <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Offer Number 4</h5>
                        <small className="text-muted"><font color="orange">Expire in 1h 23m</font> </small>
                        <a href=""><FavoriteIcon/></a>
                     </div>
                        <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        <small className="text-muted">Area: Donec id elit non mi porta.</small>
                    </a>

                    <a href="#" className="list-group-item list-group-item-action shadow-sm p-3 mb-5 bg-white rounded">
                        <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Offer Number 5</h5>
                        <small className="text-muted"><font color="orange">Expire in 1 hour</font> </small>
                        <a href=""><FavoriteIcon/></a>
                   
                        </div>
                        <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        <small className="text-muted">Area: Donec id elit non mi porta.</small>
                    </a>

                    <a href="#" className="list-group-item list-group-item-action shadow-sm p-3 mb-5 bg-white rounded">
                        <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Offer Number 3</h5>
                            <small className="text-muted">Expire in 1 hour</small>
                            <a href=""><FavoriteIcon/></a>
                        </div>
                        <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        <small className="text-muted">Area: Donec id elit non mi porta.</small>
                    </a>

                    <a href="#" className="list-group-item list-group-item-action shadow-sm p-3 mb-5 bg-white rounded">
                        <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Offer Number 3</h5>
                            <small className="text-muted">Expire in 1 hour</small>
                            <a href=""><FavoriteIcon/></a>
                        </div>
                        <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        <small className="text-muted">Area: Donec id elit non mi porta.</small>
                    </a>

                    <a href="#" className="list-group-item list-group-item-action shadow-sm p-3 mb-5 bg-white rounded">
                        <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Offer Number 3</h5>
                            <small className="text-muted">Expire in 1 hour</small>
                            <a href=""><FavoriteIcon/></a>
                        </div>
                        <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        <small className="text-muted">Area: Donec id elit non mi porta.</small>
                    </a>

                    <a href="#" className="list-group-item list-group-item-action shadow-sm p-3 mb-5 bg-white rounded">
                        <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Offer Number 3</h5>
                            <small className="text-muted">Expire in 1 hour</small>
                            <a href=""><FavoriteIcon/></a>
                        </div>
                        <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        <small className="text-muted">Area: Donec id elit non mi porta.</small>
                    </a>

                    <a href="#" className="list-group-item list-group-item-action shadow-sm p-3 mb-5 bg-white rounded">
                        <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Offer Number 3</h5>
                            <small className="text-muted">Expire in 1 hour</small>
                            <a href=""><FavoriteIcon/></a>
                        </div>
                        <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        <small className="text-muted">Area: Donec id elit non mi porta.</small>
                    </a>

                    <a href="#" className="list-group-item list-group-item-action shadow-sm p-3 mb-5 bg-white rounded">
                        <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Offer Number 3</h5>
                            <small className="text-muted">Expire in 1 hour</small>
                            <a href=""><FavoriteIcon/></a>
                        </div>
                        <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        <small className="text-muted">Area: Donec id elit non mi porta.</small>
                        </a>
                   
                </div>
            </div>


        );
    }
}


export default EventsList;
//export { EventsPage as EventsPage };