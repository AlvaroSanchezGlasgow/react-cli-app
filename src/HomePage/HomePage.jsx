import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NavbarMenu from '../_components/NavbarMenu';


import InfoList from '../_components/InfoList';
import EventsList from '../_components/EventsList';
import { userActions } from '../_actions';

const style = {
    width: '100%',
    margin: 'auto'

}

class HomePage extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const { user, users } = this.props;
        return (

            <div>
                <NavbarMenu />
                <img src='' width="100%;"></img>

                <div style={style}>
                    <br></br>
                    <div className="row justify-content-left">
                        
                        <div className="col border-left">
                        <EventsList />
                        </div>
                        <div className="col border-left">
                            
                            <InfoList />

                        </div>
                    </div>

                </div>
            </div>
            /*<div className="col-md-6 col-md-offset-3">
                <h1>Hi {user.firstName}!</h1>
                <p>You're logged in with React!!</p>
                <h3>All registered users:</h3>
                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <ul>
                        {users.items.map((user, index) =>
                            <li key={user.id}>
                                {user.firstName + ' ' + user.lastName}
                                {
                                    user.deleting ? <em> - Deleting...</em>
                                    : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                    : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                }
                            </li>
                        )}
                    </ul>
                }
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>*/
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };