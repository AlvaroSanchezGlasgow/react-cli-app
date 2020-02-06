import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import { UserActivationPage } from '../UserActivationPage';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/scss/style.scss';




class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }

    handleEntailmentRequest(e) {
        e.preventDefault();
    
        this.props.clearAlerts();
    }
    render() {
        const { alert } = this.props;
       


        return (
            <div className="container-fluid">
                <br></br>
                <br></br>
                <br></br>
                <div className="row justify-content-center">

                    <div className="col-9">

                        {alert.message &&

                           <div>
                                <Alert variant="outlined" severity={alert.type}
                                    action={
                                        <Button color="inherit" size="small" onClick={this.handleEntailmentRequest.bind(this)}>
                                            UNDO
                                        </Button>
                                    }
                                >
                                {ReactHtmlParser(alert.message)}
                            </Alert>
                            <br></br>
                            </div>

                        }


                    </div>
                </div>
                <div className="row">

                    <div className="col">
                        <Router history={history}>
                            <Switch>
                                <PrivateRoute exact path="/" component={HomePage} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegisterPage} />
                                <Route path="/activateUser" component={UserActivationPage} />
                                <Redirect from="*" to="/" />
                            </Switch>
                        </Router>
                    </div>

                </div>


            </div>

        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };