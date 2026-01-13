import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider.jsx'
import TaskCard from './TaskCard.jsx'

const TaskList = ({ data }) => {
  const [employees, setEmployees] = useContext(AuthContext)

  const updateTaskStatus = (taskIndex, status) => {
    const updatedEmployees = employees.map(emp => {
      if (emp.email === data.email) {
        const updatedTasks = emp.tasks.map((task, idx) => {
          if (idx === taskIndex) {
            return {
              ...task,
              completed: status === 'completed',
              failed: status === 'failed',
              active: false,
              newTask: false
            }
          }
          return task
        })

        const counts = {
          newTask: updatedTasks.filter(t => t.newTask).length,
          active: updatedTasks.filter(t => t.active).length,
          completed: updatedTasks.filter(t => t.completed).length,
          failed: updatedTasks.filter(t => t.failed).length
        }

        return {
          ...emp,
          tasks: updatedTasks,
          taskCounts: counts
        }
      }
      return emp
    })

    setEmployees(updatedEmployees)
    localStorage.setItem('employees', JSON.stringify(updatedEmployees))
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {data.tasks.map((task, idx) => (
        <TaskCard
          key={idx}
          task={task}
          onUpdateStatus={(status) => updateTaskStatus(idx, status)}
        />
      ))}
    </div>
  )
}

export default TaskList
