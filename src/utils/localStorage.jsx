const employees = [
  {
    id: 1,
    firstName: "Arjun",
    email: "e@1.com",
    password: "123",
    taskCounts: { active: 1, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "UI Update",
        taskDescription: "Update dashboard UI",
        taskDate: "2024-10-10",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Fix",
        taskDescription: "Fix login issue",
        taskDate: "2024-10-08",
        category: "Development"
      }
    ]
  },

  {
    id: 2,
    firstName: "Sneha",
    email: "e@2.com",
    password: "123",
    taskCounts: { active: 1, newTask: 0, completed: 0, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "DB Optimization",
        taskDescription: "Optimize queries",
        taskDate: "2024-10-11",
        category: "Database"
      }
    ]
  },

  {
    id: 3,
    firstName: "Ravi",
    email: "e@3.com",
    password: "123",
    taskCounts: { active: 0, newTask: 0, completed: 0, failed: 1 },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Integrate payment API",
        taskDate: "2024-10-07",
        category: "Backend"
      }
    ]
  },

  {
    id: 4,
    firstName: "Priya",
    email: "e@4.com",
    password: "123",
    taskCounts: { active: 1, newTask: 1, completed: 0, failed: 1 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Docs Writing",
        taskDescription: "Write project docs",
        taskDate: "2024-10-12",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "CI Setup",
        taskDescription: "Setup CI pipeline",
        taskDate: "2024-10-09",
        category: "DevOps"
      }
    ]
  },

  {
    id: 5,
    firstName: "Karan",
    email: "e@5.com",
    password: "123",
    taskCounts: { active: 0, newTask: 0, completed: 1, failed: 0 },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Deploy App",
        taskDescription: "Deploy to production",
        taskDate: "2024-10-06",
        category: "DevOps"
      }
    ]
  },

  {
    id: 6,
    firstName: "Amit",
    email: "e@6.com",
    password: "123",
    taskCounts: { active: 1, newTask: 0, completed: 0, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Testing",
        taskDescription: "Test new features",
        taskDate: "2024-10-13",
        category: "QA"
      }
    ]
  },

  {
    id: 7,
    firstName: "Neha",
    email: "e@7.com",
    password: "123",
    taskCounts: { active: 1, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "PR Review",
        taskDescription: "Review pull requests",
        taskDate: "2024-10-10",
        category: "Development"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "UI Fix",
        taskDescription: "Fix mobile UI issues",
        taskDate: "2024-10-14",
        category: "Frontend"
      }
    ]
  },

  {
    id: 8,
    firstName: "Rohit",
    email: "e@8.com",
    password: "123",
    taskCounts: { active: 0, newTask: 0, completed: 0, failed: 1 },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Server Logs",
        taskDescription: "Analyze error logs",
        taskDate: "2024-10-09",
        category: "Backend"
      }
    ]
  },

  {
    id: 9,
    firstName: "Pooja",
    email: "e@9.com",
    password: "123",
    taskCounts: { active: 1, newTask: 0, completed: 0, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Content Update",
        taskDescription: "Update website content",
        taskDate: "2024-10-15",
        category: "Content"
      }
    ]
  },

  {
    id: 10,
    firstName: "Sahil",
    email: "e@10.com",
    password: "123",
    taskCounts: { active: 1, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client Call",
        taskDescription: "Client feedback discussion",
        taskDate: "2024-10-05",
        category: "Meeting"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Planning",
        taskDescription: "Sprint planning",
        taskDate: "2024-10-16",
        category: "Planning"
      }
    ]
  }
]


const admin = [{
    "id": 1,
    "email": "admin@me.com",
    "password": "123"
  }]



export const setLocalStorage = () =>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees, admin}
}
