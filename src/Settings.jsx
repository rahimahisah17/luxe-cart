import { useState } from 'react'
import { Link } from 'react-router-dom'

function Settings() {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user')

    return storedUser
      ? JSON.parse(storedUser)
      : {
          name: '',
          email: '',
          profilePhoto: '',
        }
  })

  const [name, setName] = useState(user.name || '')

  const [photo, setPhoto] = useState(
    user.profilePhoto ||
      localStorage.getItem('profilePhoto') ||
      ''
  )

  const [emailNotifications, setEmailNotifications] = useState(true)
  const [orderNotifications, setOrderNotifications] = useState(true)
  const [saved, setSaved] = useState(false)

  const initials = name
    ? name
        .split(' ')
        .map((part) => part[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
    : 'U'

  const handlePhotoChange = (event) => {
    const file = event.target.files[0]

    if (!file) {
      return
    }

    if (!file.type.startsWith('image/')) {
      alert('Please choose a valid image file.')
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      alert('Please choose an image smaller than 5MB.')
      return
    }

    const reader = new FileReader()

    reader.onloadend = () => {
      const imageData = reader.result

      setPhoto(imageData)
      localStorage.setItem('profilePhoto', imageData)
    }

    reader.readAsDataURL(file)
  }

  const removePhoto = () => {
    setPhoto('')
    localStorage.removeItem('profilePhoto')
  }

  const handleSave = () => {
    const updatedUser = {
      ...user,
      name,
      profilePhoto: photo,
    }

    localStorage.setItem('user', JSON.stringify(updatedUser))

    if (photo) {
      localStorage.setItem('profilePhoto', photo)
    } else {
      localStorage.removeItem('profilePhoto')
    }

    setUser(updatedUser)
    setSaved(true)

    setTimeout(() => {
      setSaved(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-black text-stone-100">

      {/* Header */}
      <header className="border-b border-stone-800 bg-black">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-400/60 bg-stone-950">
              <svg
                viewBox="0 0 48 48"
                className="h-6 w-6 text-amber-300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 15H38L35 36H13L10 15Z"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 18V13C18 8.5 21 6 24 6C27 6 30 8.5 30 13V18"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="text-2xl font-black tracking-tight">
              Luxe<span className="text-amber-300">Cart</span>
            </div>
          </Link>

          <Link
            to="/"
            className="font-semibold text-amber-300 transition hover:text-amber-200"
          >
            ← Back to Store
          </Link>

        </div>
      </header>

      {/* Page */}
      <main className="mx-auto max-w-6xl px-6 py-10">

        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-300">
            Account
          </p>

          <h1 className="mt-2 text-3xl font-black text-stone-100">
            Settings
          </h1>

          <p className="mt-2 text-stone-500">
            Manage your profile, security, and notification preferences.
          </p>
        </div>

        {saved && (
          <div className="mb-6 rounded-xl border border-green-800 bg-green-950/40 px-5 py-4 font-medium text-green-400">
            ✓ Your profile has been updated successfully.
          </div>
        )}

        <div className="grid gap-8 lg:grid-cols-[240px_1fr]">

          {/* Sidebar */}
          <aside className="h-fit rounded-2xl border border-stone-800 bg-stone-950 p-3">

            <div className="rounded-xl bg-amber-300/10 px-4 py-3 font-semibold text-amber-300">
              ⚙️ Account Settings
            </div>

            <div className="px-4 py-3 text-stone-500">
              Profile
            </div>

            <div className="px-4 py-3 text-stone-500">
              Security
            </div>

            <div className="px-4 py-3 text-stone-500">
              Notifications
            </div>

          </aside>

          {/* Content */}
          <div className="space-y-8">

            {/* Profile */}
            <section className="rounded-2xl border border-stone-800 bg-stone-950 p-6">

              <div className="border-b border-stone-800 pb-5">
                <h2 className="text-xl font-bold text-stone-100">
                  Profile
                </h2>

                <p className="mt-1 text-sm text-stone-500">
                  Update your personal information and profile photo.
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-8 sm:flex-row sm:items-center">

                {/* Profile photo */}
                <div className="text-center">

                  {photo ? (
                    <img
                      src={photo}
                      alt={user.name || 'Profile'}
                      className="mx-auto h-28 w-28 rounded-full object-cover ring-4 ring-amber-300/20"
                    />
                  ) : (
                    <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-amber-300 text-3xl font-bold text-black">
                      {initials}
                    </div>
                  )}

                  <div className="mt-4 flex flex-col gap-2">

                    <label className="cursor-pointer rounded-lg bg-amber-300 px-4 py-2 text-sm font-semibold text-black transition hover:bg-amber-200">
                      Upload Photo

                      <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoChange}
                        className="hidden"
                      />
                    </label>

                    {photo && (
                      <button
                        type="button"
                        onClick={removePhoto}
                        className="text-sm font-medium text-red-400 hover:text-red-300"
                      >
                        Remove Photo
                      </button>
                    )}

                  </div>

                  <p className="mt-2 text-xs text-stone-600">
                    JPG, PNG or WebP · Max 5MB
                  </p>

                </div>

                {/* Profile fields */}
                <div className="flex-1 space-y-5">

                  <div>
                    <label className="mb-2 block font-semibold text-stone-300">
                      Full Name
                    </label>

                    <input
                      type="text"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      className="w-full rounded-xl border border-stone-700 bg-black px-4 py-3 text-stone-100 outline-none transition focus:border-amber-300 focus:ring-2 focus:ring-amber-300/10"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block font-semibold text-stone-300">
                      Email Address
                    </label>

                    <input
                      type="email"
                      value={user.email || ''}
                      disabled
                      className="w-full cursor-not-allowed rounded-xl border border-stone-800 bg-stone-900 px-4 py-3 text-stone-500"
                    />

                    <p className="mt-2 text-xs text-stone-600">
                      Email changes will require verification.
                    </p>
                  </div>

                </div>

              </div>

              <div className="mt-8 border-t border-stone-800 pt-5">

                <button
                  type="button"
                  onClick={handleSave}
                  className="rounded-xl bg-amber-300 px-6 py-3 font-bold text-black transition hover:bg-amber-200"
                >
                  Save Changes
                </button>

              </div>

            </section>

            {/* Security */}
            <section className="rounded-2xl border border-stone-800 bg-stone-950 p-6">

              <div className="border-b border-stone-800 pb-5">
                <h2 className="text-xl font-bold text-stone-100">
                  Security
                </h2>

                <p className="mt-1 text-sm text-stone-500">
                  Manage your password and account security.
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between gap-6">

                <div>
                  <h3 className="font-bold text-stone-100">
                    Password
                  </h3>

                  <p className="mt-1 text-sm text-stone-500">
                    Keep your account secure with a strong password.
                  </p>
                </div>

                <Link
                  to="/forgot-password"
                  className="shrink-0 rounded-xl border border-stone-700 px-5 py-3 font-semibold text-amber-300 transition hover:border-amber-300/50 hover:bg-stone-900"
                >
                  Change Password
                </Link>

              </div>

            </section>

            {/* Notifications */}
            <section className="rounded-2xl border border-stone-800 bg-stone-950 p-6">

              <div className="border-b border-stone-800 pb-5">
                <h2 className="text-xl font-bold text-stone-100">
                  Notifications
                </h2>

                <p className="mt-1 text-sm text-stone-500">
                  Choose which notifications you'd like to receive.
                </p>
              </div>

              <div className="mt-6 space-y-6">

                <label className="flex cursor-pointer items-center justify-between gap-6">

                  <div>
                    <h3 className="font-semibold text-stone-100">
                      Email Notifications
                    </h3>

                    <p className="mt-1 text-sm text-stone-500">
                      Receive useful updates and promotions by email.
                    </p>
                  </div>

                  <input
                    type="checkbox"
                    checked={emailNotifications}
                    onChange={(event) =>
                      setEmailNotifications(event.target.checked)
                    }
                    className="h-5 w-5 accent-amber-300"
                  />

                </label>

                <label className="flex cursor-pointer items-center justify-between gap-6">

                  <div>
                    <h3 className="font-semibold text-stone-100">
                      Order Updates
                    </h3>

                    <p className="mt-1 text-sm text-stone-500">
                      Get notified when your orders are confirmed,
                      shipped, or delivered.
                    </p>
                  </div>

                  <input
                    type="checkbox"
                    checked={orderNotifications}
                    onChange={(event) =>
                      setOrderNotifications(event.target.checked)
                    }
                    className="h-5 w-5 accent-amber-300"
                  />

                </label>

              </div>

            </section>

            {/* Account information */}
            <section className="rounded-2xl border border-stone-800 bg-stone-950 p-6">

              <h2 className="text-xl font-bold text-stone-100">
                Account Information
              </h2>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">

                <div className="rounded-xl bg-black p-4">
                  <p className="text-sm text-stone-500">
                    Account Type
                  </p>

                  <p className="mt-1 font-bold text-stone-100">
                    Customer
                  </p>
                </div>

                <div className="rounded-xl bg-black p-4">
                  <p className="text-sm text-stone-500">
                    Authentication
                  </p>

                  <p className="mt-1 font-bold text-stone-100">
                    Email & Password
                  </p>
                </div>

              </div>

            </section>

          </div>
        </div>
      </main>
    </div>
  )
}

export default Settings