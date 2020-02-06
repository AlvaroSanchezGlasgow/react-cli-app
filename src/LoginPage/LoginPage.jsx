import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import 'jquery';



const style = {
    backgroundColor: '#6c8d31',
    borderColor: '#6c8d31'

}

const inputStyle = {
    width: '50%'

}

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.logout();

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password);
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div>
                <div className="row justify-content-center" >
                    <div className="col-6">
                        <br></br><br></br>
                        <br></br>
                        
                            <form name="form" onSubmit={this.handleSubmit} className="shadow p-3 mb-5 bg-white rounded">

                            <img className="img-fluid" src='' />
                            
                           
                            <h1 className="display-5">User Login</h1>
                            <center>
                                    <br></br>
                                    
                            <small>Don't have an account?  <a href="/register">Create your account</a>, it takes less than a minute</small>
                                    <br></br>
                                    <br></br>
                                <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                                    
                                    <label htmlFor="username">Username</label>
                                    <input type="email" className={'form-control' + (submitted && !username ? ' is-invalid' : '')} maxLength='50' style={inputStyle} name="username" value={username} onChange={this.handleChange} />
                                    {submitted && !username &&
                                        <div className="invalid-feedback">Username is required</div>
                                    }
                                </div>
                               
                                <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className={'form-control' + (submitted && !password ? ' is-invalid' : '')} maxLength='25' style={inputStyle} name="password" value={password} onChange={this.handleChange} />
                                    {submitted && !password &&
                                        <div className="invalid-feedback">Password is required</div>
                                    }
                                </div>
                                <br></br>
                                <br></br>
                                <div className="form-group">
                                    <button className="btn btn-primary">Login </button>

                                    {loggingIn &&
                                        <div className="spinner-border text-secondary" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                        //<img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />

                                    }
                                    <small id="passwordHelpInline" className="text-muted">
                                        <Link to="/passwordReset" className="btn btn-link">Forgot Password?</Link>
                                    </small>

                                   

                                    


                                    <br></br>
                                </div>
                                </center>
                            </form>
                     
                    </div>
                </div>

                <br></br>

                <hr width="80%"></hr>
                
                    <br></br>
                    
            </div>
        );
    }
}

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
export { connectedLoginPage as LoginPage };