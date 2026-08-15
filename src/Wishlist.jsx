import { Link } from 'react-router-dom'
import { useCart } from './context/CartContext.jsx'

function Wishlist() {
  const {
    wishlist,
    addToCart,
    removeFromWishlist,
  } = useCart()

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

      {/* Wishlist */}
      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-black text-slate-800">
            My Wishlist
          </h1>

          <p className="mt-2 text-slate-500">
            Save products you love and come back to them later.
          </p>
        </div>

        {wishlist.length === 0 ? (
          <section className="rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-pink-100 text-4xl text-pink-500">
              ♡
            </div>

            <h2 className="mt-6 text-2xl font-bold text-slate-800">
              Your wishlist is empty
            </h2>

            <p className="mx-auto mt-2 max-w-md text-slate-500">
              Products you save will appear here so you can easily find them
              later.
            </p>

            <Link
              to="/"
              className="mt-6 inline-block rounded-xl bg-purple-600 px-6 py-3 font-bold text-white hover:bg-purple-700"
            >
              Explore Products
            </Link>
          </section>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {wishlist.map((product) => (
              <div
                key={product.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-300 hover:scale-105"
                  />

                  <button
                    onClick={() =>
                      removeFromWishlist(product.id)
                    }
                    aria-label="Remove from wishlist"
                    className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-xl text-pink-500 shadow-md transition hover:scale-110"
                  >
                    ♥
                  </button>
                </div>

                <div className="p-5">
                  <p className="text-sm font-medium text-purple-600">
                    {product.category}
                  </p>

                  <h3 className="mt-1 font-bold text-slate-800">
                    {product.name}
                  </h3>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <span className="text-lg font-black text-purple-700">
                      ₦{product.price.toLocaleString()}
                    </span>

                    <button
                      onClick={() => addToCart(product)}
                      className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-700"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default Wishlist