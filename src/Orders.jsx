import { Link } from 'react-router-dom'

function Orders() {
  const orders = JSON.parse(localStorage.getItem('orders') || '[]')

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

      {/* Orders */}
      <main className="mx-auto max-w-5xl px-6 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-black text-slate-800">
            My Orders
          </h1>

          <p className="mt-2 text-slate-500">
            View your recent LuxeCart purchases and order details.
          </p>
        </div>

        {orders.length === 0 ? (
          <section className="rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-purple-100 text-4xl">
              📦
            </div>

            <h2 className="mt-6 text-2xl font-bold text-slate-800">
              No orders yet
            </h2>

            <p className="mx-auto mt-2 max-w-md text-slate-500">
              Your completed purchases will appear here once you place your
              first order.
            </p>

            <Link
              to="/"
              className="mt-6 inline-block rounded-xl bg-purple-600 px-6 py-3 font-bold text-white hover:bg-purple-700"
            >
              Start Shopping
            </Link>
          </section>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <section
                key={order.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="flex flex-col gap-4 border-b border-slate-100 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      Order
                    </p>

                    <h2 className="font-bold text-slate-800">
                      #{order.id}
                    </h2>
                  </div>

                  <div className="sm:text-right">
                    <p className="text-sm text-slate-500">
                      {order.date}
                    </p>

                    <span className="mt-1 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                      {order.status || 'Processing'}
                    </span>
                  </div>
                </div>

                <div className="divide-y divide-slate-100">
                  {order.items?.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-4 px-6 py-4"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-16 w-16 rounded-xl object-cover"
                      />

                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-slate-800">
                          {item.name}
                        </h3>

                        <p className="text-sm text-slate-500">
                          Quantity: {item.quantity || 1}
                        </p>
                      </div>

                      <p className="font-bold text-purple-700">
                        ₦{item.price?.toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50 px-6 py-4">
                  <span className="font-semibold text-slate-600">
                    Total
                  </span>

                  <span className="text-lg font-black text-purple-700">
                    ₦{order.total?.toLocaleString()}
                  </span>
                </div>
              </section>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default Orders