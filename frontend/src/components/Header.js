import React from 'react';
import {Route} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import SearchBox from './SearchBox'
import {logout} from '../actions/userActions'
import { Link } from 'react-router-dom';

const Header = () => {
  const dispatch =useDispatch()
  const userLogin = useSelector((state)=>state.userLogin)
  const {userInfo} = userLogin

  const logoutHandler = () =>{
    dispatch(logout())
  }
    return (
        <header>
            <Navbar bg="white" variant="light" expand="lg" className='shadow' collapseOnSelect>
            <Container className='p-3'>
              <LinkContainer to='/'>
               <Navbar.Brand className="brand"><img src='./images/logo1.png' alt="" style={{height: '50px'}}></img>Altriga</Navbar.Brand>
              </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Route render={({history})=> <SearchBox history={history}/>}/>
                  <Nav className="ms-auto">
                  {/* <Route render={({history})=> <SearchBox history={history}/>}/> */}
                    <LinkContainer to='/cart'>
                    <Nav.Link><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
                    </LinkContainer>
                    
                    {userInfo ? (
                      <NavDropdown title={userInfo.name} id='username'>
                        <LinkContainer to='/profile'>
                        <NavDropdown.Item>Profile</NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                      </NavDropdown>
                    ) : <LinkContainer to='/login'>
                    <Nav.Link className="login">Login</Nav.Link>
                    </LinkContainer>}
                    {userInfo && userInfo.isAdmin && (
                      <NavDropdown title='Admin' id='adminmenu'>
                      <LinkContainer to='/admin/userlist'>
                      <NavDropdown.Item>Users</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to='/admin/productlist'>
                      <NavDropdown.Item>Products</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to='/admin/orderlist'>
                      <NavDropdown.Item>Orders</NavDropdown.Item>
                      </LinkContainer>
                     
                    </NavDropdown>
                    )}
                  </Nav>
              </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    )
}

export default Header