import React from 'react';
import Navbar from "./components/Navbar";
import AccountProfile from "./components/AccountProfile";
import { Container, } from "semantic-ui-react";
import { Switch, Route, } from "react-router-dom";
import AccountForm from './components/AccountForm';

const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route
          exact
          path="/"
          render={ () => <h1>Welcome to your Social Media Site </h1> }
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
      </Switch>
    </Container>
  </>
)
export default App;