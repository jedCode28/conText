import React, { useEffect, useState } from 'react'

export const AccountContext = React.createContext();

export const AccountConsumer = AccountContext.Consumer;

const AccountProvider = (props) => {
  const [account, setAccount] = useState(null)
  const [initialLoading, setInitialLoading] = useState(true)

  useEffect(()=>{
    console.log("in use effect accProv")
    setTimeout(()=>{
      getData()
    }, 1500)
  }, [])

  const getData = () => {
    setAccount({
      firstName: "Nathan",
      lastName: "Explosion",
      email: "bloodrecuted@dethklok.com"
    })
    setInitialLoading(false)
  }

  return(
    <AccountContext.Provider value={{...account, updateAccount: setAccount, initialLoading}}>
      {props.children}
    </AccountContext.Provider>
  )

}
export default AccountProvider