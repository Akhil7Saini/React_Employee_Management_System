import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider.jsx'
import Header from '../Others/Header.jsx'
import TaskListNumber from '../Others/TaskListNumber.jsx'
import TaskList from '../TaskList/TaskList.jsx'

const EmployeeDashboard = ({ changeUser }) => {
  const [employees] = useContext(AuthContext)

  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
  const employeeEmail = loggedInUser?.data?.email

  const employeeData = employees?.find(
    (emp) => emp.email === employeeEmail
  )

  if (!employeeData) return null

  return (
    <div className="p-10 bg-[#0b1220] min-h-screen">
      <Header data={employeeData} changeUser={changeUser} />
      <TaskListNumber data={employeeData} />
      <TaskList data={employeeData} />
    </div>
  )
}

export default EmployeeDashboard
