import React from 'react'
import Header from '../Others/Header.jsx'
import CreateTask from '../Others/CreateTask.jsx'
import AllTasks from '../Others/AllTasks.jsx'

const AdminDashboard = ({ changeUser }) => {
  return (
    <div className="min-h-screen bg-slate-900 p-10 space-y-10">
      <Header changeUser={changeUser} />
      <CreateTask />
      <AllTasks />
    </div>
  )
}

export default AdminDashboard
