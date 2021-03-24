import React from 'react';
import Navbar from "./components/Navbar";
import AccountProfile from "./components/AccountProfile";
import { Container, } from "semantic-ui-react";
import { Switch, Route, } from "react-router-dom";
import AccountForm from './components/AccountForm';
import './index.css';

const App = () => (
  <>
    <Navbar />
    <Container >
      <Switch>
        <Route
          exact
          path="/"
          render={ () => <>
          <h1>Welcome to your Social Media Site </h1>
          </>
          }
        />
        <Route
          exact
          path="/account/profile"
          render={ () => <AccountProfile /> }
        />
        <Route
          exact
          path="/AccountForm"
          render={ () => <AccountForm /> }
        />
        <Route
          exact
          path="/Friends"
          render={ () => <h2>Your Macbook is offline, please connect to the internet for further services.</h2> }
        />
      </Switch>
    </Container>
  </>
)
export default App;