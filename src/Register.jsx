import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const requirements = {
    lowercase: /[a-z]/.test(password),
    uppercase: /[A-Z]/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
    number: /[0-9]/.test(password),
    length: password.length >= 8,
  }

  const passwordIsValid = Object.values(requirements).every(Boolean)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')

    if (!passwordIsValid) {
      setError('Please meet all password requirements.')
      return
    }

    setLoading(true)

    try {
      const response = await fetch(
        'http://localhost:5000/api/auth/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed')
      }

      navigate('/login')
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const Requirement = ({ met, children }) => (
    <li
      className={`flex items-center gap-2 text-sm ${
        met ? 'text-green-500' : 'text-slate-400'
      }`}
    >
      <span className="text-base">
        {met ? '●' : '●'}
      </span>
      {children}
    </li>
  )

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-10">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <Link
          to="/"
          className="text-2xl font-black text-purple-700"
        >
          Luxe<span className="text-pink-500">Cart</span>
        </Link>

        <h2 className="mt-8 text-3xl font-black text-slate-800">
          Create your account
        </h2>

        <p className="mt-2 text-slate-500">
          Join LuxeCart and start shopping.
        </p>

        {error && (
          <div className="mt-6 rounded-lg bg-red-50 p-4 text-sm font-medium text-red-600">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block font-semibold text-slate-700">
              Full Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Your name"
              required
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-slate-700">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              required
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-slate-700">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Create a strong password"
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-3 pr-12 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-slate-400 hover:text-purple-600"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>

            <ul className="mt-3 space-y-1.5">
              <Requirement met={requirements.lowercase}>
                One lowercase letter
              </Requirement>

              <Requirement met={requirements.uppercase}>
                One uppercase letter
              </Requirement>

              <Requirement met={requirements.special}>
                One special character
              </Requirement>

              <Requirement met={requirements.number}>
                One number
              </Requirement>

              <Requirement met={requirements.length}>
                8 characters minimum
              </Requirement>
            </ul>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-purple-600 px-6 py-3 font-bold text-white hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? 'Creating account...' : 'Create Account'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account?{' '}
          <Link
            to="/login"
            className="font-semibold text-purple-600 hover:text-purple-800"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register