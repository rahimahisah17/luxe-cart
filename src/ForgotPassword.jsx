import { useState } from 'react'
import { Link } from 'react-router-dom'

function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    setMessage('')
    setError('')
    setLoading(true)

    try {
      const response = await fetch(
        'http://localhost:5000/api/auth/forgot-password',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Unable to process request')
      }

      setMessage(
        data.message ||
          'If an account exists for this email, a password reset link has been sent.'
      )
    } catch (error) {
      setError(
        error.message ||
          'Unable to connect to the server.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-10">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <Link
          to="/"
          className="text-2xl font-black text-slate-900"
        >
          Luxe<span className="text-amber-500">Cart</span>
        </Link>

        <h1 className="mt-8 text-3xl font-black text-slate-800">
          Forgot Password?
        </h1>

        <p className="mt-2 text-slate-500">
          Enter your email address and we'll help you reset your password.
        </p>

        {message && (
          <div className="mt-6 rounded-xl bg-green-50 p-4 text-sm font-semibold text-green-700">
            {message}
          </div>
        )}

        {error && (
          <div className="mt-6 rounded-xl bg-red-50 p-4 text-sm font-semibold text-red-600">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
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
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-slate-950 px-6 py-3 font-bold text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Remember your password?{' '}
          <Link
            to="/login"
            className="font-semibold text-amber-600 hover:text-amber-700"
          >
            Back to Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}

export default ForgotPassword
