import React from 'react'

const NewTask = ({ task }) => {
  return (
    <div className="flex-shrink-0 w-[360px] bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6 shadow-lg">
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs font-semibold text-blue-400 uppercase">
          New Task
        </span>
        <span className="text-xs text-slate-400">
          {task.taskDate}
        </span>
      </div>

      <h3 className="text-xl font-bold text-blue-400 mb-2">
        {task.taskTitle}
      </h3>

      <p className="text-slate-300 text-sm mb-4">
        {task.taskDescription}
      </p>

      <span className="inline-block text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
        {task.category}
      </span>
    </div>
  )
}

export default NewTask
