import React, {useContext} from "react";
import { Card, } from "semantic-ui-react";
import { AccountContext, } from "./AccountProvider";

const Account = () => {
        const {lastName, firstName, email} = useContext(AccountContext)
        
        return (
        <Card>
            <Card.Content>                          
            <Card.Header>{firstName }{lastName}</Card.Header>
            <Card.Meta>
                Email: {email}
            </Card.Meta>
            </Card.Content>
        </Card>
        )
}

export default Account;


// import React from "react";
// import { Card, } from "semantic-ui-react";
// const Account = () => (
//   <Card>
//     <Card.Content>
//       <Card.Header>username</Card.Header>
//       <Card.Meta>
//         Date Joined: dateJoined
//       </Card.Meta>
//     </Card.Content>
//     <Card.Content>
//       <p>Membership Level: membershipLevel</p>
//     </Card.Content>
//   </Card>
// )
// export default Account;