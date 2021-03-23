import React, { useContext, useState } from 'react'
import { Form, } from "semantic-ui-react"
import { AccountContext } from './AccountProvider'

const AccountForm = (props) => {
  const { firstName, lastName, email, avatar, updateAccount } = useContext(AccountContext)
  const [ user, setUser ] = useState({firstName, lastName, email, avatar })

  const handleChange = (e, { name, value }) => {
    console.log('handleChange')
    setUser({
      ...user,
      [name]: value
    })
    console.log(user.firstName)
  }
  const handleSubmit = (e) => {
    updateAccount({...user})
    console.log('handleSubmit')
  }

  return(
    <>
    <h1>{props.header}</h1>
    <Form onSubmit={handleSubmit}>
      <Form.Input 
        label="First Name"
        value={user.firstName}
        type='text'
        name='firstName'
        onChange={handleChange}
      />
      <Form.Input 
        label="Last Name"
        value={user.lastName}
        type='text'
        name='lastName'
        onChange={handleChange}
      />
      <Form.Input 
        label="Email"
        value={user.email}
        type='email'
        name='email'
        onChange={handleChange}
      />
      <Form.Button>add</Form.Button>
    </Form>
    </>
  )
}
export default AccountForm