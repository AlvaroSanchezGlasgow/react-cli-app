import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import config from 'config';

import { userActions } from '../_actions';

import queryString from 'query-string';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import 'jquery';

const spinnerStyle = {
    width: '6rem',
    height: '6rem'
}

const feedbackMessage = {
   color:'red'
}



class UserActivationPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };
    }

    componentDidMount() {
        const value = queryString.parse(this.props.location.search);

        console.log(value.key);
        if (value.key) {

               this.props.activate(value.key);
   
        }
    }

    render() {
       // const { activatingIn } = this.props;

        return (
            <div>
                <div className="row justify-content-center" >
                    <div className="col-6">
                        <br></br><br></br>
                        <br></br>
                        <center>
                            <img className="img-fluid" src='' />
                            <br></br>
                            <br></br>
                            <h3>Activating your account</h3>
                            <br></br>

                            <div className="spinner-grow" style={spinnerStyle} role="status">
                                <span className="sr-only">Activating your account...</span>
                            </div>
                            <br></br>
                            <br></br>
                            
                                
                            <br></br>
                        </center>
                    </div>
                </div>
                <br></br>
            </div>
        );
    }
}

function mapState(state) {
   // const { activatingIn } = state.activate;
    return {  };
}

const actionCreators = {
    activate: userActions.activate
};

const connectedActivationPage = connect(mapState, actionCreators)(UserActivationPage);
export { connectedActivationPage as UserActivationPage };
//export { UserActivationPage as UserActivationPage };