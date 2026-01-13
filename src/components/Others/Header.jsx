import React, { useEffect, useState } from 'react'

const Header = ({ data, changeUser }) => {

  const [userName, setUserName] = useState('')

  useEffect(() => {
    if (!data) {
      setUserName('Admin')
    } else {
      setUserName(data.firstName)
    }
  }, [data])

  const logOutUser = () => {
    localStorage.removeItem('loggedInUser')
    changeUser('')
  }

  return (
    <div className="flex items-center justify-between bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-lg">
      <h1 className="text-xl font-medium text-slate-300">
        Hello <br />
        <span className="text-3xl font-bold text-emerald-400">
          {userName} 👋
        </span>
      </h1>

      <button
        onClick={logOutUser}
        className="bg-red-500 hover:bg-red-600 transition px-6 py-2 rounded-lg font-semibold shadow"
      >
        Log Out
      </button>
    </div>
  )
}

export default Header
