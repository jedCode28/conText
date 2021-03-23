import { Component } from "react"
import { Form } from "semantic-ui-react"

class AccountClassForm extends Component {

  handleChange=(e, {name, value})=>{
    console.log(e)
    console.log(name)
    console.log(value)
  }

  render(){
    return(
      <Form>
        <Form.Input 
          label="New Username"
          type="text"
          onChange={this.handleChange}
        />
        <Form.Select 
        label="Membership Label"
          options={membershipOptions}
          onChange={this.handleChange}
        />
      </Form>
    )
  }
}

const membershipOptions = [
  { key: "b", text: "Bronze", value:"Bronze"},
  { key: "s", text: "Silver", value:"Silver"},
  { key: "g", text: "Gold", value:"Gold"},
]

export default AccountClassForm