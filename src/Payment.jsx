import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from './context/CartContext.jsx'

function Payment() {
  const { cart, cartTotal } = useCart()
  const location = useLocation()
  const customer = location.state?.customer

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  if (!customer) {
    return (
      <div className="min-h-screen bg-slate-50">
        <nav className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
            <Link to="/" className="text-2xl font-black text-slate-900">
              Luxe<span className="text-slate-500">Cart</span>
            </Link>

            <Link
              to="/checkout"
              className="rounded-full bg-slate-100 px-5 py-2 font-semibold text-slate-700 hover:bg-slate-200"
            >
              ← Back to Checkout
            </Link>
          </div>
        </nav>

        <main className="mx-auto max-w-2xl px-6 py-16">
          <section className="rounded-2xl bg-white p-10 text-center shadow-lg">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 text-4xl">
              💳
            </div>

            <h1 className="mt-6 text-2xl font-black text-slate-800">
              Checkout information required
            </h1>

            <p className="mt-3 text-slate-500">
              Please complete your delivery information before proceeding to payment.
            </p>

            <Link
              to="/checkout"
              className="mt-6 inline-block rounded-xl bg-slate-900 px-6 py-3 font-bold text-white hover:bg-slate-800"
            >
              Return to Checkout
            </Link>
          </section>
        </main>
      </div>
    )
  }

  const handlePayment = async (event) => {
    event.preventDefault()

    setError('')
    setLoading(true)

    try {
      const response = await fetch(
        'http://localhost:5000/api/payment/initialize',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: customer.email,
            amount: cartTotal,
          }),
        }
      )

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || 'Unable to initialize payment'
        )
      }

      window.location.href = data.authorization_url
    } catch (error) {
      console.error('Payment error:', error)

      setError(
        error.message ||
          'Something went wrong while starting payment.'
      )

      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            to="/"
            className="text-2xl font-black text-slate-900"
          >
            Luxe<span className="text-slate-500">Cart</span>
          </Link>

          <Link
            to="/checkout"
            className="rounded-full bg-slate-100 px-5 py-2 font-semibold text-slate-700 hover:bg-slate-200"
          >
            ← Back to Checkout
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-black text-slate-900">
            Secure Payment
          </h1>

          <p className="mt-2 text-slate-500">
            You will be redirected to Paystack to complete your test payment.
          </p>
        </div>

        <form
          onSubmit={handlePayment}
          className="grid gap-8 lg:grid-cols-3"
        >
          <section className="rounded-2xl bg-white p-8 shadow-sm lg:col-span-2">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-800">
                Payment
              </h2>

              <span className="rounded-full bg-green-50 px-3 py-1 text-sm font-semibold text-green-600">
                🔒 Secure
              </span>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-900 text-2xl text-white">
                  ₦
                </div>

                <div>
                  <h3 className="font-bold text-slate-800">
                    Pay with Paystack
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    You will be securely redirected to Paystack to complete this test transaction.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-700">
              <strong>Test Mode:</strong> This is a test transaction.
              No real money will be charged.
            </div>

            {error && (
              <div className="mt-6 rounded-xl bg-red-50 p-4 text-sm font-semibold text-red-600">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading || cart.length === 0}
              className="mt-6 w-full rounded-xl bg-slate-900 px-6 py-4 font-bold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? 'Connecting to Paystack...'
                : `Continue to Paystack — ₦${cartTotal.toLocaleString()}`}
            </button>
          </section>

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

                  <p className="font-semibold text-slate-800">
                    ₦{(
                      product.price * product.quantity
                    ).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-slate-200 pt-5">
              <div className="flex justify-between text-slate-500">
                <span>Subtotal</span>
                <span>₦{cartTotal.toLocaleString()}</span>
              </div>

              <div className="mt-3 flex justify-between text-slate-500">
                <span>Delivery</span>
                <span>Free</span>
              </div>

              <div className="mt-5 flex justify-between">
                <span className="font-bold text-slate-800">
                  Total
                </span>

                <span className="text-2xl font-black text-slate-900">
                  ₦{cartTotal.toLocaleString()}
                </span>
              </div>
            </div>
          </section>
        </form>
      </main>
    </div>
  )
}

export default Payment
