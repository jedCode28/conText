import React, { useContext, useState } from 'react'
import { Form, } from "semantic-ui-react"
import { AccountContext } from './AccountProvider'

const AccountForm = (props) => {
  const { firstName, lastName, email, avatar, updateAccount } = useContext(AccountContext)
  const [ user, setUser ] = useState({firstName, lastName, email, avatar })

  const handleChange = (e, { name, value }) => {
    setUser({
      ...user,
      [name]: value
    })
  }
  const handleSubmit = (e) => {
    updateAccount({...user})
  }

  return(
    <>
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
      <Form.Input 
        label="Profile Avatar"
        value={user.avatar}
        type='url'
        name='avatar'
        onChange={handleChange}
      />
      <Form.Button>add</Form.Button>
    </Form>
    </>
  )
}
export default AccountForm