import React, { useState } from 'react'

const Login = ({ handleLogin }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <form
        onSubmit={submitHandler}
        className="w-[380px] bg-slate-950 border border-slate-800 rounded-2xl p-8 shadow-xl"
      >
        <h2 className="text-3xl font-bold text-center text-emerald-400 mb-6">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
        />

        <button className="w-full bg-emerald-500 hover:bg-emerald-600 transition py-3 rounded-lg font-semibold">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
