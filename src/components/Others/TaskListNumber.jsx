import React from 'react'

const TaskListNumber = ({ data }) => {
  return (
    <div className="grid grid-cols-4 gap-6">
      <div className="bg-blue-500/20 rounded-xl p-6">
        <h2 className="text-3xl font-bold text-blue-400">
          {data.taskCounts.newTask}
        </h2>
        <p className="text-slate-300 mt-1">New Tasks</p>
      </div>

      <div className="bg-yellow-500/20 rounded-xl p-6">
        <h2 className="text-3xl font-bold text-yellow-400">
          {data.taskCounts.active}
        </h2>
        <p className="text-slate-300 mt-1">Active</p>
      </div>

      <div className="bg-emerald-500/20 rounded-xl p-6">
        <h2 className="text-3xl font-bold text-emerald-400">
          {data.taskCounts.completed}
        </h2>
        <p className="text-slate-300 mt-1">Completed</p>
      </div>

      <div className="bg-red-500/20 rounded-xl p-6">
        <h2 className="text-3xl font-bold text-red-400">
          {data.taskCounts.failed}
        </h2>
        <p className="text-slate-300 mt-1">Failed</p>
      </div>
    </div>
  )
}

export default TaskListNumber
