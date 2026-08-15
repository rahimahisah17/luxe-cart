import { Link } from 'react-router-dom'

function Profile() {
  const user = JSON.parse(localStorage.getItem('user') || '{}')
  const profilePhoto = localStorage.getItem('profilePhoto')

  const initials = user.name
    ? user.name
        .split(' ')
        .map((part) => part[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
    : 'U'

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            to="/"
            className="text-2xl font-black text-purple-700"
          >
            Luxe<span className="text-pink-500">Cart</span>
          </Link>

          <Link
            to="/"
            className="font-semibold text-purple-600 hover:text-purple-800"
          >
            ← Back to Store
          </Link>
        </div>
      </header>

      {/* Profile */}
      <main className="mx-auto max-w-5xl px-6 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-black text-slate-800">
            My Profile
          </h1>

          <p className="mt-2 text-slate-500">
            View and manage your LuxeCart account information.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[280px_1fr]">
          {/* Profile card */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
            {profilePhoto ? (
              <img
                src={profilePhoto}
                alt={user.name || 'Profile'}
                className="mx-auto h-32 w-32 rounded-full object-cover ring-4 ring-purple-100"
              />
            ) : (
              <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-purple-600 text-4xl font-bold text-white ring-4 ring-purple-100">
                {initials}
              </div>
            )}

            <h2 className="mt-5 text-xl font-bold text-slate-800">
              {user.name || 'LuxeCart Customer'}
            </h2>

            <p className="mt-1 break-all text-sm text-slate-500">
              {user.email || 'No email available'}
            </p>

            <Link
              to="/settings"
              className="mt-6 inline-block w-full rounded-xl bg-purple-600 px-5 py-3 font-bold text-white hover:bg-purple-700"
            >
              Edit Profile
            </Link>
          </section>

          {/* Account information */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="border-b border-slate-100 pb-5">
              <h2 className="text-xl font-bold text-slate-800">
                Account Information
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Your current account details.
              </p>
            </div>

            <div className="mt-6 space-y-5">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Full Name
                </p>

                <p className="mt-1 text-lg font-semibold text-slate-800">
                  {user.name || 'Not provided'}
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-slate-500">
                  Email Address
                </p>

                <p className="mt-1 text-lg font-semibold text-slate-800">
                  {user.email || 'Not provided'}
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-slate-500">
                  Account Type
                </p>

                <p className="mt-1 text-lg font-semibold text-slate-800">
                  Customer
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-slate-500">
                  Authentication
                </p>

                <p className="mt-1 text-lg font-semibold text-slate-800">
                  Email & Password
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 border-t border-slate-100 pt-6 sm:grid-cols-2">
              <Link
                to="/orders"
                className="rounded-xl border border-purple-200 px-5 py-3 text-center font-semibold text-purple-600 hover:bg-purple-50"
              >
                View My Orders
              </Link>

              <Link
                to="/settings"
                className="rounded-xl border border-slate-200 px-5 py-3 text-center font-semibold text-slate-700 hover:bg-slate-50"
              >
                Account Settings
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Profile