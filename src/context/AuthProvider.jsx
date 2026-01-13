import React, { useEffect, useState, createContext } from 'react'
import { setLocalStorage, getLocalStorage } from '../utils/localStorage.jsx'

export const AuthContext = createContext()


const AuthProvider = ({children}) => {

  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const {employees, admin} = getLocalStorage()
    // setUserData({employees, admin})
    setUserData(employees)
  }, [])

  return (
    <div>
      <AuthContext.Provider value={[userData, setUserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
