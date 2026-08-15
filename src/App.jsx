import { Link } from 'react-router-dom'
import { useCart } from './context/CartContext.jsx'
import products from './data/products.js'

function App() {
  const {
    cartCount,
    wishlist,
    addToCart,
    addToWishlist,
    isInWishlist,
  } = useCart()

  const categories = [
    {
      name: 'Electronics',
      image:
        'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=900&q=85',
    },
    {
      name: 'Fashion',
      image:
        'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&q=85',
    },
    {
      name: 'Home',
      image:
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85',
    },
    {
      name: 'Beauty',
      image:
        'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=85',
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="text-3xl font-black tracking-tight">
            <span className="text-slate-950">Luxe</span>
            <span className="text-amber-500">Cart</span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            <Link
              to="/"
              className="font-semibold text-slate-900 hover:text-amber-500"
            >
              Home
            </Link>

            <Link
              to="/orders"
              className="font-semibold text-slate-600 hover:text-amber-500"
            >
              Orders
            </Link>

            <Link
              to="/wishlist"
              className="font-semibold text-slate-600 hover:text-amber-500"
            >
              Wishlist
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="hidden rounded-xl px-4 py-2 font-semibold text-slate-700 hover:bg-slate-100 sm:block"
            >
              Sign In
            </Link>

            <Link
              to="/cart"
              className="relative rounded-xl bg-slate-950 px-4 py-2 font-bold text-white transition hover:bg-slate-800"
            >
              🛒 Cart
              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-amber-400 px-1 text-xs font-black text-slate-950">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-amber-400">
              Shop smarter. Live better.
            </p>

            <h1 className="text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
              Everything you love,
              <span className="block text-amber-400">
                all in one place.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Discover carefully selected fashion, electronics, beauty,
              and home essentials at LuxeCart.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#products"
                className="rounded-xl bg-amber-400 px-7 py-4 font-black text-slate-950 transition hover:bg-amber-300"
              >
                Shop Now
              </a>

              <Link
                to="/register"
                className="rounded-xl border border-white/20 px-7 py-4 font-bold text-white transition hover:bg-white/10"
              >
                Create Account
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=85"
              alt="LuxeCart shopping collection"
              className="h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-amber-500">
              Explore
            </p>
            <h2 className="mt-2 text-3xl font-black">
              Shop by Category
            </h2>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <a
              key={category.name}
              href="#products"
              className="group relative overflow-hidden rounded-2xl bg-slate-900"
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-black">
                  {category.name}
                </h3>
                <p className="mt-1 text-sm text-slate-200">
                  Explore collection →
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-amber-500">
                Our collection
              </p>

              <h2 className="mt-2 text-3xl font-black">
                Featured Products
              </h2>
            </div>

            <span className="text-sm font-semibold text-slate-500">
              {products.length} products
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <article
                key={product.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      isInWishlist(product.id)
                        ? null
                        : addToWishlist(product)
                    }
                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-lg shadow transition hover:scale-105"
                    aria-label="Add to wishlist"
                  >
                    {isInWishlist(product.id) ? '❤️' : '♡'}
                  </button>

                  <span className="absolute left-4 top-4 rounded-full bg-slate-950 px-3 py-1 text-xs font-bold text-white">
                    {product.category}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="truncate text-lg font-bold text-slate-900">
                      {product.name}
                    </h3>

                    <span className="shrink-0 text-sm font-semibold text-amber-500">
                      ★ {product.rating}
                    </span>
                  </div>

                  <p className="mt-3 text-2xl font-black text-slate-950">
                    ₦{product.price.toLocaleString()}
                  </p>

                  <button
                    type="button"
                    onClick={() => addToCart(product)}
                    className="mt-5 w-full rounded-xl bg-slate-950 px-5 py-3 font-bold text-white transition hover:bg-amber-400 hover:text-slate-950"
                  >
                    Add to Cart
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 px-6 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <div className="text-2xl font-black">
              Luxe<span className="text-amber-400">Cart</span>
            </div>
            <p className="mt-2 text-sm text-slate-400">
              Your modern shopping experience.
            </p>
          </div>

          <div className="flex gap-5 text-sm text-slate-400">
            <Link to="/profile" className="hover:text-white">
              Account
            </Link>
            <Link to="/settings" className="hover:text-white">
              Settings
            </Link>
            <Link to="/wishlist" className="hover:text-white">
              Wishlist
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
