import React from "react";

import {Container, Menu} from "semantic-ui-react";

import {Link, withRouter} from "react-router-dom";

import AuthButton from './AuthButton';


const HomepageMenu = withRouter(({fixed, desktop, location}) => (
  <Container>
    <Menu.Item as={Link} to="/" active={location.pathname === '/'}>Home</Menu.Item>
    <Menu.Item as={Link} to="/public" active={location.pathname === '/public'}>Public</Menu.Item>

    <Menu.Item as={Link} to="/protected" active={location.pathname === '/protected'}>Protected</Menu.Item>

    {desktop ? (
      <Menu.Item position='right'>

        <AuthButton fixed={fixed} />

        {/*

        <Button as='a' inverted={!fixed}>
          Log in
        </Button>
        <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
          Sign Up
        </Button>


        */}



      </Menu.Item>
    ) : (
      <div>
        <Menu.Item as={Link} to='/login'>Log in</Menu.Item>
        <Menu.Item as='a'>Sign up</Menu.Item>
      </div>
    )}

  </Container>
));

export default HomepageMenu;