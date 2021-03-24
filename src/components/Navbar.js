import React from "react";
import { NavLink, } from "react-router-dom";
import { Menu, } from "semantic-ui-react";
import { AccountConsumer } from "./AccountProvider";
import '../index.css';

const Navbar = () => (
  <AccountConsumer>
    {(value) => (
      <Menu style={{backgroundColor: "#cc9900"}}>
        <NavLink to="/">
          <Menu.Item>
            Home
          </Menu.Item>
        </NavLink>
        <NavLink to="/account/profile">
          <Menu.Item>
            Your Account
          </Menu.Item>
        </NavLink>
        <NavLink to="/Friends">
          <Menu.Item>
            View Friends' Activity
          </Menu.Item>
        </NavLink>
      </Menu> 
    )}
  </AccountConsumer>
)

export default Navbar;