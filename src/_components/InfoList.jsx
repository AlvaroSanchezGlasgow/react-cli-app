import React, { Component } from "react";
import { Link } from 'react-router-dom';

//import bgImg from '../images/bg_carousel_v2.jpg';


const style = {
    display: 'flex',
    width: '100%'

}



class InfoList extends React.Component {
    componentDidMount() {
        //  this.props.getUsers();
    }
    render() {
        return (
            <div className="row">
                <div className="col">

                
                    <div className="card shadow-sm p-3 mb-5 bg-white rounded" style={style}>
                        <div className="card-body">
                            <h5 className="card-title">Where to go?</h5>
                            <h6 className="card-subtitle mb-2 text-muted">The Glasgow Food Tour</h6>
                            <p className="card-text">Recommendations, reviews and more...</p>
                            <a className="btn btn-link" href="https://theglasgowfoodtour.com" target="_blank">Discover more</a>
                        </div>
                    </div>

                    <div className="card shadow-sm p-3 mb-5 bg-white rounded" style={style}>
                        <div className="card-body">
                            <h5 className="card-title">The Hydro Event</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Info</h6>
                            <p className="card-text">Check out next events in the bussiest venue in the worls</p>
                            <a className="btn btn-link" href="https://www.thessehydro.com" target="_blank">Discover more</a>
                        </div>
                    </div>
               
                   
                   
                    
                        <Link to="/other">More...</Link>
                    
                    
                   
                    </div>
                    </div>

           
        );
    }
}


export default InfoList;
//export { InfoPage as InfoPage };