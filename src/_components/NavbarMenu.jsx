import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Link } from 'react-router-dom';
import logo from '../static/images/logo_square.png';


//import { Route, Redirect } from 'react-router-dom';

const style = {
    //backgroundColor: 'white !important'

}


const links_style = {
    color: '#FFE01B !important'

}

const buttonStyle = {
    

}

const styleForm = {
    margin: 'right',
    align: 'left'
}

const imgStyle = {
    width : '30%',
  
}

class NavbarMenu extends React.Component {
    componentDidMount() {
        // this.props.users();
    }

    render() {
        return (
            <div>
                <Navbar bg="white" expand="lg" fixed="top" >
                    <Navbar.Brand href="/">
                        <img src={logo} style={imgStyle} className="d-inline-block align-top" />
                   
                    </Navbar.Brand>
                    <Form inline>
                        <NavDropdown title={sessionStorage.getItem('userName')} id="basic-nav-dropdown" style={links_style}>
                            <NavDropdown.Item>Glasgow - West End</NavDropdown.Item>
                                 <NavDropdown.Item href="#action/3.1"> <i class="material-icons">
                                    account_circle
                                </i>My Profile</NavDropdown.Item>
                                
                                <NavDropdown.Item href="/">My Favourites</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/login">Log Out</NavDropdown.Item>
                        </NavDropdown>
                        </Form>
                    </Navbar>
  <br />
                <center>
                <Navbar bg="white" expand="lg" >
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        
                        <Nav.Link href="https://theglasgowfoodtour.com" target="_Blank">Visit our Blog</Nav.Link>
                        <Nav.Link href="mailto:contact@theglasgowapp.com?subject=Enquiries">Let´s keep in touch</Nav.Link>
                        
                        </Nav>
                
                       
                    </Navbar.Collapse>
                </Navbar>
                </center>
               
                
            </div>



        );
    }

}

//const connectedJobListPage = connect(mapState, actionCreators)(JobListPage);
export default NavbarMenu;
