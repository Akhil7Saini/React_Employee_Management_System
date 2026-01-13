import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider.jsx'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
    e.preventDefault()

    const task = {
      taskTitle,
      taskDescription,
      taskDate,
      asignTo,
      category,
      active: false,
      newTask: true,
      completed: false,
      failed: false
    }

    const updatedEmployees = userData.map(emp => {
      if (emp.firstName === asignTo) {
        return {
          ...emp,
          tasks: [...emp.tasks, task],
          taskCounts: {
            ...emp.taskCounts,
            newTask: emp.taskCounts.newTask + 1
          }
        }
      }
      return emp
    })

    setUserData(updatedEmployees)
    console.log(updatedEmployees)

    // reset form
    setTaskTitle('')
    setCategory('')
    setAsignTo('')
    setTaskDate('')
    setTaskDescription('')
  }


  return (
    <div className="mt-10 bg-slate-950 border border-slate-800 rounded-2xl p-8 shadow-xl">
      <h2 className="text-2xl font-bold text-emerald-400 mb-6">
        Create New Task
      </h2>

      <form
        onSubmit={submitHandler}
        className="flex flex-wrap justify-between gap-8"
      >

        {/* LEFT SECTION */}
        <div className="w-full md:w-[48%] space-y-5">

          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-1">
              Task Title
            </label>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              type="text"
              placeholder="Make a UI design"
              className="w-full rounded-lg bg-slate-900 border border-slate-700 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-1">
              Date
            </label>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              type="date"
              className={`w-full rounded-lg bg-slate-900 border border-slate-700 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                taskDate ? 'text-white' : 'text-slate-400'
              }`}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-1">
              Assign To
            </label>
            <input
              value={asignTo}
              onChange={(e) => setAsignTo(e.target.value)}
              type="text"
              placeholder="Employee name"
              className="w-full rounded-lg bg-slate-900 border border-slate-700 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-1">
              Category
            </label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder="Design, Dev, Testing"
              className="w-full rounded-lg bg-slate-900 border border-slate-700 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full md:w-[48%] flex flex-col">
          <label className="block text-sm font-semibold text-slate-300 mb-1">
            Description
          </label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="flex-1 rounded-lg bg-slate-900 border border-slate-700 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
            placeholder="Describe the task in detail..."
          />

          <button
            type="submit"
            className="mt-6 w-full bg-emerald-500 hover:bg-emerald-600 transition-all py-3 rounded-lg font-semibold text-lg shadow-md"
          >
            Create Task
          </button>
        </div>

      </form>
    </div>
  )
}

export default CreateTask
