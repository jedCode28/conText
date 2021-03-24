import React, { useEffect, useState } from 'react'
import '../index.css';

export const AccountContext = React.createContext();

export const AccountConsumer = AccountContext.Consumer;

const AccountProvider = (props) => {
  const [account, setAccount] = useState(null)
  const [initialLoading, setInitialLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      getData()
    }, 1500)
  }, [])

  const getData = () => {
    setAccount({
      firstName: "Nathan",
      lastName: "Explosion",
      email: "bloodrecuted@dethklok.com",
      avatar: "https://pbs.twimg.com/profile_images/931860097151700992/ks5qfyQk_400x400.jpg"
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