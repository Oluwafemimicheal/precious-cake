import { Cake, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-0">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-purple-600 to-fuchsia-600 text-white shadow-lg shadow-black/20">
                <Cake size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-bold">PreciousCake</h2>
                <p className="text-sm text-slate-400">Luxury cakes & sweet experiences</p>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-7 text-slate-300">
              We bake unforgettable moments with handcrafted cakes, pastries and event desserts made to delight every guest.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Explore</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Our Services</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>Custom Cakes</li>
              <li>Pastry Catering</li>
              <li>Event Desserts</li>
              <li>Wedding Collections</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Contact</h3>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-purple-400" />
                <p>123 Bakery Street, Ikoyi, Lagos</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-purple-400" />
                <p>+234 123 456 7890</p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-purple-400" />
                <p>hello@preciouscake.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>PreciousCake © {new Date().getFullYear()}. Crafted with love for every celebration.</p>
        </div>
      </div>
    </footer>
  )
}
