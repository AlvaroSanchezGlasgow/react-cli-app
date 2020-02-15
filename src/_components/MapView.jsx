import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


const style = {
    width: '100%',
    height: '400px'
}


class MapView extends React.Component {
    componentDidMount() {

    }
    render() {
        return (
           
                <div className="card" color="#de7008" style={style} >
                   
                    <h2>Google Maps Goes</h2>
                   <Map google={this.props.google} zoom={14}>
 
                            <Marker onClick={this.onMarkerClick} name={'Current location'} />

                            <InfoWindow onClose={this.onInfoWindowClose}>
                            <div>
                                <h1>{'Current location'}</h1>
                            </div>
                            </InfoWindow>
                    </Map>
           
                    
                </div>


                );
            }
        }
        
  export default GoogleApiWrapper({
            apiKey: ("")
          })(MapView)