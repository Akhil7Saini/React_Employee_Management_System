import React from 'react'

const TaskCard = ({ task, onUpdateStatus }) => {
  return (
    <div
      className={`rounded-2xl p-6 shadow-lg text-black
        ${task.completed && 'bg-green-400'}
        ${task.failed && 'bg-red-400'}
        ${task.newTask && 'bg-yellow-400'}
        ${task.active && 'bg-blue-400'}
      `}
    >
      {/* HEADER */}
      <div className="flex justify-between items-center mb-3">
        {/* CATEGORY */}
        <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full">
          {task.category}
        </span>

        <span className="text-sm font-semibold">
          {task.taskDate}
        </span>
      </div>

      {/* TITLE */}
      <h2 className="text-xl font-bold underline mb-2">
        {task.taskTitle}
      </h2>

      {/* DESCRIPTION */}
      <p className="mb-4 text-sm">
        {task.taskDescription}
      </p>

      {/* ACTION BUTTONS */}
      <div className="flex gap-3">
        {!task.completed && !task.failed && (
          <>
            <button
              onClick={() => onUpdateStatus('completed')}
              className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded"
            >
              Mark as Completed
            </button>

            <button
              onClick={() => onUpdateStatus('failed')}
              className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 rounded"
            >
              Mark as Failed
            </button>
          </>
        )}

        {task.completed && (
          <span className="bg-green-700 text-white text-xs px-3 py-1 rounded">
            Completed
          </span>
        )}

        {task.failed && (
          <span className="bg-red-700 text-white text-xs px-3 py-1 rounded">
            Failed
          </span>
        )}
      </div>
    </div>
  )
}

export default TaskCard
