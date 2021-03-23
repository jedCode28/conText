import React from 'react';
import Account from "./Account";
import AccountForm from './AccountForm';
 

const AccountProfile = (props) => {
  return(
    <>
    <Account />
    <h3>Change Account Info:</h3>
    <AccountForm />
    </>
  )
}
export default AccountProfile;