import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from './context/CartContext.jsx'

function Checkout() {
  const { cart, cartTotal } = useCart()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
  })

  const [error, setError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }))

    setError('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      state,
    } = formData

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !address.trim() ||
      !city.trim() ||
      !state.trim()
    ) {
      setError('Please complete all delivery information before continuing.')
      return
    }

    navigate('/payment', {
      state: {
        customer: formData,
      },
    })
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            to="/"
            className="text-2xl font-black text-purple-700"
          >
            Luxe<span className="text-pink-500">Cart</span>
          </Link>

          <Link
            to="/cart"
            className="rounded-full bg-purple-100 px-5 py-2 font-semibold text-purple-700 hover:bg-purple-200"
          >
            ← Back to Cart
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-black text-slate-800">
            Checkout
          </h1>

          <p className="mt-2 text-slate-500">
            Enter your delivery information and review your order.
          </p>
        </div>

        {cart.length === 0 ? (
          <section className="rounded-2xl bg-white px-6 py-16 text-center shadow-sm">
            <div className="text-6xl">🛒</div>

            <h2 className="mt-6 text-2xl font-bold text-slate-800">
              Your cart is empty
            </h2>

            <p className="mt-2 text-slate-500">
              Add products to your cart before checking out.
            </p>

            <Link
              to="/"
              className="mt-6 inline-block rounded-xl bg-purple-600 px-6 py-3 font-bold text-white hover:bg-purple-700"
            >
              Continue Shopping
            </Link>
          </section>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="grid gap-8 lg:grid-cols-3"
          >
            {/* Customer information */}
            <section className="rounded-2xl bg-white p-6 shadow-sm lg:col-span-2">
              <h2 className="text-xl font-bold text-slate-800">
                Delivery Information
              </h2>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-slate-700">
                    First Name
                  </label>

                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700">
                    Last Name
                  </label>

                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="0800 000 0000"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Delivery Address
                  </label>

                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Enter your full delivery address"
                    className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700">
                    City
                  </label>

                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700">
                    State
                  </label>

                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="State"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                  />
                </div>
              </div>

              {error && (
                <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                  {error}
                </div>
              )}
            </section>

            {/* Order summary */}
            <section className="h-fit rounded-2xl bg-white p-6 shadow-lg">
              <h2 className="text-xl font-bold text-slate-800">
                Order Summary
              </h2>

              <div className="mt-6 space-y-4">
                {cart.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center gap-3"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-14 w-14 rounded-xl object-cover"
                    />

                    <div className="min-w-0 flex-1">
                      <p className="truncate font-semibold text-slate-800">
                        {product.name}
                      </p>

                      <p className="text-sm text-slate-500">
                        Qty: {product.quantity}
                      </p>
                    </div>

                    <p className="font-semibold text-purple-700">
                      ₦
                      {(
                        product.price * product.quantity
                      ).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-slate-200 pt-5">
                <div className="flex justify-between text-slate-500">
                  <span>Subtotal</span>

                  <span>
                    ₦{cartTotal.toLocaleString()}
                  </span>
                </div>

                <div className="mt-3 flex justify-between text-slate-500">
                  <span>Delivery</span>

                  <span>Free</span>
                </div>

                <div className="mt-5 flex justify-between">
                  <span className="font-bold text-slate-800">
                    Total
                  </span>

                  <span className="text-2xl font-black text-purple-700">
                    ₦{cartTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-xl bg-purple-600 px-6 py-4 font-bold text-white hover:bg-purple-700"
              >
                Continue to Payment →
              </button>
            </section>
          </form>
        )}
      </main>
    </div>
  )
}

export default Checkout