import { Link } from 'react-router-dom'
import { useCart } from './context/CartContext.jsx'

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    cartTotal,
  } = useCart()

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link to="/" className="text-2xl font-black text-purple-700">
            Luxe<span className="text-pink-500">Cart</span>
          </Link>

          <Link
            to="/"
            className="rounded-full bg-purple-100 px-5 py-2 font-semibold text-purple-700 hover:bg-purple-200"
          >
            ← Continue Shopping
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-4xl font-black text-slate-800">
          Your Cart
        </h2>

        {cart.length === 0 ? (
          <div className="mt-8 rounded-2xl bg-white p-12 text-center shadow-lg">
            <div className="text-6xl">🛒</div>

            <h3 className="mt-5 text-2xl font-bold text-slate-800">
              Your cart is empty
            </h3>

            <p className="mt-2 text-slate-500">
              Browse our products and add something you love.
            </p>

            <Link
              to="/"
              className="mt-6 inline-block rounded-xl bg-purple-600 px-6 py-3 font-bold text-white hover:bg-purple-700"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <div className="space-y-4 lg:col-span-2">
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-5 rounded-2xl bg-white p-5 shadow-sm"
                >
                  <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-5xl">
                    {product.emoji}
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-medium text-purple-600">
                      {product.category}
                    </p>

                    <h3 className="mt-1 text-lg font-bold text-slate-800">
                      {product.name}
                    </h3>

                    <p className="mt-1 font-bold text-purple-700">
                      ₦{product.price.toLocaleString()}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decreaseQuantity(product.id)}
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-lg font-bold text-slate-700 hover:bg-slate-200"
                    >
                      −
                    </button>

                    <span className="w-6 text-center font-bold text-slate-800">
                      {product.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(product.id)}
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-100 text-lg font-bold text-purple-700 hover:bg-purple-200"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="rounded-lg bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-100"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="h-fit rounded-2xl bg-white p-6 shadow-lg">
              <h3 className="text-xl font-bold text-slate-800">
                Order Summary
              </h3>

              <div className="mt-6 flex justify-between border-b border-slate-200 pb-4">
                <span className="text-slate-500">Items</span>

                <span className="font-semibold text-slate-800">
                  {cart.reduce(
                    (total, product) => total + product.quantity,
                    0
                  )}
                </span>
              </div>

              <div className="mt-4 flex justify-between">
                <span className="font-semibold text-slate-700">
                  Total
                </span>

                <span className="text-2xl font-black text-purple-700">
                  ₦{cartTotal.toLocaleString()}
                </span>
              </div>

              <Link
                to="/checkout"
                className="mt-6 block w-full rounded-xl bg-purple-600 px-6 py-4 text-center font-bold text-white hover:bg-purple-700"
                >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default Cart