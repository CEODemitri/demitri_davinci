import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-purple-900 text-white py-12 px-6 md:px-12 lg:px-24">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 grid-rows-8 gap-8">
            <div className="col-span-3">
              <h3 className="text-2xl font-bold mb-4">ArtistName</h3>
              <p className="text-purple-200">
                Pushing the boundaries of art and imagination, one creation at a
                time.
              </p>
            </div>
            
            <div className="row-start-5 col-start-1 col-span-3">
              <h4 className="text-xl font-semibold mb-4">Contact</h4>
              <address className="not-italic text-purple-200">
                <p>123 Art Studio Lane</p>
                <p>Creativity City, AC 12345</p>
                <p>Email: hello@artistname.com</p>
              </address>
            </div>

            <div className="row-start-5 col-start-9 col-span-3">
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="flex gap-8 align-center">
                <li>
                  <Link
                    href="#about"
                    className="text-purple-200 hover:text-white"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#gallery"
                    className="text-purple-200 hover:text-white"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="#events"
                    className="text-purple-200 hover:text-white"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-purple-200 hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-purple-800 text-center text-purple-300">
            <p>
              &copy; {new Date().getFullYear()} ArtistName. All rights reserved.
            </p>
          </div>
        </footer>
    )
}