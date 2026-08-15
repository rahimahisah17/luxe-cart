import { Link, useLocation } from 'react-router-dom'

function OrderSuccess() {
  const location = useLocation()

  const customer = location.state?.customer
  const orderTotal = location.state?.orderTotal || 0
  const items = location.state?.items || []

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
            to="/"
            className="rounded-full bg-purple-100 px-5 py-2 font-semibold text-purple-700 hover:bg-purple-200"
          >
            Continue Shopping
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-6 py-12">
        {/* Success message */}
        <section className="rounded-3xl bg-white px-6 py-12 text-center shadow-lg">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-5xl text-green-600">
            ✓
          </div>

          <h1 className="mt-6 text-3xl font-black text-slate-800">
            Order Placed Successfully!
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-slate-500">
            Thank you for shopping with LuxeCart. Your order has been
            received and is being prepared for delivery.
          </p>

          <div className="mx-auto mt-6 inline-flex rounded-full bg-purple-50 px-5 py-2 font-bold text-purple-700">
            Order #{Math.floor(100000 + Math.random() * 900000)}
          </div>
        </section>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {/* Customer information */}
          <section className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800">
              Delivery Information
            </h2>

            {customer ? (
              <div className="mt-5 space-y-3 text-slate-600">
                <p>
                  <span className="font-semibold text-slate-800">
                    Name:
                  </span>{' '}
                  {customer.firstName} {customer.lastName}
                </p>

                <p>
                  <span className="font-semibold text-slate-800">
                    Email:
                  </span>{' '}
                  {customer.email}
                </p>

                <p>
                  <span className="font-semibold text-slate-800">
                    Phone:
                  </span>{' '}
                  {customer.phone}
                </p>

                <p>
                  <span className="font-semibold text-slate-800">
                    Address:
                  </span>{' '}
                  {customer.address}, {customer.city}, {customer.state}
                </p>
              </div>
            ) : (
              <p className="mt-5 text-slate-500">
                Delivery information is unavailable.
              </p>
            )}
          </section>

          {/* Order summary */}
          <section className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800">
              Order Summary
            </h2>

            <div className="mt-5 space-y-4">
              {items.map((product) => (
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

            <div className="mt-6 flex justify-between border-t border-slate-200 pt-5">
              <span className="font-bold text-slate-800">
                Total Paid
              </span>

              <span className="text-2xl font-black text-purple-700">
                ₦{orderTotal.toLocaleString()}
              </span>
            </div>
          </section>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-block rounded-xl bg-purple-600 px-8 py-4 font-bold text-white hover:bg-purple-700"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    </div>
  )
}

export default OrderSuccess