import React, { useState, useEffect, useContext } from 'react'
import Login from './components/Auth/Login.jsx'
import EmployeeDashboard from './components/Dashboards/EmployeeDashboard.jsx'
import AdminDashboard from './components/Dashboards/AdminDashboard.jsx'
import { AuthContext } from './context/AuthProvider.jsx'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  const [employees] = useContext(AuthContext)

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser')

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser)
      setUser(parsedUser.role)

      if (parsedUser.role === 'employee') {
        setLoggedInUserData(parsedUser.data)
      }
    }
  }, [])


  const handleLogin = (email, password) => {
    // ADMIN LOGIN
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin')
      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({ role: 'admin' })
      )
      return
    }

    // EMPLOYEE LOGIN
    if (employees) {
      const employee = employees.find(
        (e) => e.email === email && e.password === password
      )

      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)

        localStorage.setItem(
          'loggedInUser',
          JSON.stringify({
            role: 'employee',
            data: employee
          })
        )
        return
      }
    }

    alert('Invalid Credentials')
  }

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user === 'admin' && (
        <AdminDashboard changeUser={setUser} />
      )}

      {user === 'employee' && (
        <EmployeeDashboard changeUser={setUser} />
      )}

    </>
  )
}

export default App
