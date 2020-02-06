import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Link } from 'react-router-dom';


//import { Route, Redirect } from 'react-router-dom';

const style = {
    backgroundColor: 'white !important'

}


const links_style = {
    color: '#6c8d31 !important'

}

const buttonStyle = {
    backgroundColor: '#6c8d31',
    borderColor: '#6c8d31'

}

const styleForm = {
    margin: 'right',
    align: 'left'
   

}



class NavbarMenu extends React.Component {
    componentDidMount() {
        // this.props.users();
    }

    render() {
        return (
            <div>
                <Navbar bg="white" expand="lg" fixed="top">
                    <Navbar.Brand href="/index"> <img src='' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/jobList" className="btn btn-light" >Discover offers in your area</Link>
                            &nbsp;&nbsp;
                    <Link to="/newApp" className="btn btn-light" >Are you a company?</Link>
                            &nbsp;&nbsp;
                    <Link to="/TBC" className="btn btn-light">Your opinion is important</Link>
                    &nbsp;&nbsp;

                        </Nav>
                        
                        <Form inline>
                            <Nav.Link href="#">
                                <Badge badgeContent={4} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </Nav.Link>


                            <NavDropdown title={sessionStorage.getItem('userName')} id="basic-nav-dropdown" style={links_style}>

                                <NavDropdown.Item href="#action/3.1"> <i class="material-icons">
                                    account_circle
                                </i>My Profile</NavDropdown.Item>

                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/login">Log Out</NavDropdown.Item>
                            </NavDropdown>
                        </Form>
                     
                    </Navbar.Collapse>
                </Navbar>
                <br></br>
            </div>


        );
    }

}

//const connectedJobListPage = connect(mapState, actionCreators)(JobListPage);
export default NavbarMenu;
