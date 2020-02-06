import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
import '../static/scss/style.scss';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';


class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                usernameConfirm: '',
                mobile: '',
                landline: '',
                company: '',               
                password: '',
                passwordConfirmation: '',
            },
            submitted: false,
             userEmailConfirm: false,
            passwordConfirm: false  
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    handleKeyUp(event) {
        event.preventDefault();
        if (this.state.user.username == this.state.user.usernameConfirm) {
            this.setState({ userEmailConfirm: true });

        }else{
            this.setState({ userEmailConfirm: false });
        }

        if (this.state.user.password == this.state.user.passwordConfirmation) {
            this.setState({ passwordConfirm: true });

        }else{
            this.setState({ passwordConfirm: false });
        }
      

    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.firstName && user.lastName && user.username && user.usernameConfirm && (user.mobile || user.landline) && user.password && user.passwordConfirmation) {
          
            this.props.register(user);
        }
    }

    render() {
        const { registering } = this.props;
        const { user, submitted, userEmailConfirm, passwordConfirm } = this.state;
        return (
            <div>
            

                <div className="row justify-content-center ">

                    <div className="col-8 shadow p-3 mb-5 bg-white rounded">
                        <img src='' />
                        <h1 className="display-5">Registration Form</h1>
                        <br></br>
                        <form name="form" onSubmit={this.handleSubmit}>
                            <div className="form-row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" maxLength='50' className={'form-control' + (submitted && !user.firstName ? ' is-invalid' : '')+ (submitted && user.firstName ? ' is-valid' : '')} name="firstName" pattern="[a-zA-Z]+" data-toggle="tooltip" data-placement="top" title="Name must contain only letters" value={user.firstName} onChange={this.handleChange} />
                                    {submitted && !user.firstName &&
                                        <div className="invalid-feedback">First Name is required</div>
                                    }
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" maxLength='50' className={'form-control' + (submitted && !user.lastName ? ' is-invalid' : '')+ (submitted && user.lastName ? ' is-valid' : '')} name="lastName" pattern="[a-zA-Z]+" data-toggle="tooltip" data-placement="top" title="Surname must contain only letters" value={user.lastName} onChange={this.handleChange} />
                                    {submitted && !user.lastName &&
                                        <div className="invalid-feedback">Last Name is required</div>
                                    }
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="username">Username/Email Address</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="inputGroupPrepend3">@</span>
                                        </div>
                                        <input type="email" maxLength='50' className={'form-control' + (submitted && !user.username ? ' is-invalid' : '')+ (submitted && user.username ? ' is-valid' : '')} name="username" title="Username must have email format" value={user.username} onChange={this.handleChange} />
                                        {submitted && !user.username &&
                                            <div className="invalid-feedback">Username is required</div>
                                        }
                                    
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label htmlFor="username">Confirm Username/Email Address</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="inputGroupPrepend3">@</span>
                                        </div>
                                        <input type="text" maxLength='50' className={'form-control' + (submitted && !user.usernameConfirm ? ' is-invalid' : '')+ (submitted && user.usernameConfirm ? ' is-valid' : '')+(!userEmailConfirm && user.usernameConfirm ? ' is-invalid' : '')+(userEmailConfirm && user.usernameConfirm ? ' is-valid' : '')} name="usernameConfirm" onKeyUp={this.handleKeyUp} title="Both username fields should match" value={user.usernameConfirm} onChange={this.handleChange} />

                                        {submitted && !user.usernameConfirm &&
                                            <div className="invalid-feedback">Username Confirmation is required</div>
                                        }
                                        {!userEmailConfirm && user.usernameConfirm &&
                                            <div className="invalid-feedback">Username Confirmation doesn't match</div>
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="col-md-6 mb-3">


                                    <label htmlFor="landline">Landline</label>
                                    <input type="text" maxLength='15' className={'form-control' + (submitted && !user.landline && !user.mobile  ? ' is-invalid' : '')+ (submitted && user.landline || user.mobile  ? ' is-valid' : '')} name="landline" pattern="[0-9]+" data-toggle="tooltip" data-placement="top" title="Enter a valid landline phone format" value={user.landline} onChange={this.handleChange} />
                                    {submitted && !user.landline && !user.mobile &&
                                        <div className="invalid-feedback">Landline of Mobile Phone is required</div>
                                    }
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label htmlFor="mobile">Mobile Phone</label>
                                    <input type="text" maxLength='15' className={'form-control' + (submitted && !user.mobile && !user.landline ? ' is-invalid' : '') + (submitted && user.mobile || user.landline  ? ' is-valid' : '')} name="mobile" pattern="[0-9]+" data-toggle="tooltip" data-placement="top" title="Enter a valid mobile phone format" value={user.mobile} onChange={this.handleChange} />
                                    {submitted && !user.mobile && !user.landline &&
                                        <div className="invalid-feedback">Landline of Mobile Phone is required</div>
                                    }
                                </div>

                                <div className="col">
                                    <label htmlFor="company">Company Name</label>
                                    <input type="text" maxLength='50' className='form-control' name="company" data-toggle="tooltip" data-placement="top" title="Company Name is not a mandatory field" value={user.company} onChange={this.handleChange} />

                                </div>
                            </div>
                            <br></br>
                            <div className="form-row">
                                <div className="col-md-6 mb-3">


                                    <label htmlFor="password">Password</label>
                                    <input type="password" maxLength='25' className={'form-control' + (submitted && !user.password ? ' is-invalid' : '')+ (submitted && user.password ? ' is-valid' : '')} name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" data-toggle="tooltip" data-placement="top" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" value={user.password} onChange={this.handleChange} />
                                    <small id="passwordHelpInline" className="text-muted">
                                        Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters
                                         </small>
                                    {submitted && !user.password &&
                                        <div className="invalid-feedback">Password is required</div>
                                    }
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label htmlFor="password">Confirm Password</label>
                                    <input type="password" maxLength='25' className={'form-control' + (submitted && !user.passwordConfirmation ? ' is-invalid' : '')+ (submitted && user.passwordConfirmation ? ' is-valid' : '')+(!passwordConfirm && user.passwordConfirmation ? ' is-invalid' : '')+(passwordConfirm && user.passwordConfirmation ? ' is-valid' : '')} name="passwordConfirmation" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" onKeyUp={this.handleKeyUp} data-toggle="tooltip" data-placement="top" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" value={user.passwordConfirmation} onChange={this.handleChange} />
                                    {submitted && !user.passwordConfirmation &&
                                        <div className="invalid-feedback">Password Confirmation is required</div>
                                    }
                                    {!passwordConfirm && user.passwordConfirmation &&
                                            <div className="invalid-feedback">Password Confirmation doesn't match</div>
                                        }
                                </div>


                            </div>
                            <br></br>
                            <div className="row justify-content-center">
                                <button className="btn btn-primary">Save</button>
                               
                                {registering &&
                                    <div className="spinner-border text-secondary" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    // <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                }
                                <Link to="/login" className="btn btn-link">Cancel</Link>
                            </div>
                        </form>
                    </div>
                </div>
 
                <footer>
                  
                    By signing up, you agree to our <a href="" target="_blank">Privacy Policy</a>
                   
                </footer>

            </div>
        );
    }
}

function mapState(state) {
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    register: userActions.register
}

const connectedRegisterPage = connect(mapState, actionCreators)(RegisterPage);
export { connectedRegisterPage as RegisterPage };