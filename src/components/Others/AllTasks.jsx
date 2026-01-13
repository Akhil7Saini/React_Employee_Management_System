import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider.jsx'

const AllTasks = () => {
  const [userData] = useContext(AuthContext)

  // SAFETY GUARD (required)
  if (!userData) {
    return (
      <div className="text-slate-400 p-6">
        Loading employees...
      </div>
    )
  }

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-lg">
      <div className="grid grid-cols-5 text-slate-300 font-semibold mb-4">
        <span>Employee</span>
        <span className="text-blue-400">New</span>
        <span className="text-yellow-400">Active</span>
        <span className="text-emerald-400">Completed</span>
        <span className="text-red-400">Failed</span>
      </div>

      <div className="space-y-3 max-h-64 overflow-auto">
        {userData.map((emp, idx) => (
          <div
            key={idx}
            className="grid grid-cols-5 items-center bg-slate-900 rounded-lg px-4 py-2"
          >
            <span className="text-white">{emp.firstName}</span>
            <span className="text-blue-400">{emp.taskCounts.newTask}</span>
            <span className="text-yellow-400">{emp.taskCounts.active}</span>
            <span className="text-emerald-400">{emp.taskCounts.completed}</span>
            <span className="text-red-400">{emp.taskCounts.failed}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllTasks
