import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Palette,
  Music,
  Calendar,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";
import Footer from "@/components/Footer";

export default function ArtistLandingPage() {
  return (
    <div>
      <Head>
        <title>Demitri da Vinci</title>
        <meta />
        <link />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-orange-100 to-indigo-100">
        <header className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Artist's showcase piece"
              layout="fill"
              objectFit="cover"
              className="opacity-50"
            />
          </div>
          <nav className="fixed top-0 left-0 right-0 z-10 flex justify-between items-center p-6 text-black">
            <Link href="/" className="text-2xl font-bold">
              Demitri
            </Link>
            <div className="space-x-4">
              <Link href="#about" className="hover:text-purple-700">
                About
              </Link>
              <Link href="#gallery" className="hover:text-purple-700">
                Gallery
              </Link>
              <Link href="#events" className="hover:text-purple-700">
                Events
              </Link>
              <Link href="#contact" className="hover:text-purple-700">
                Contact
              </Link>
            </div>
          </nav>
          <div className="relative z-10 text-center">
            <h1 className="text-6xl font-extrabold text-black mb-4">
              Demitri Da Vinci
            </h1>
            <p className="text-2xl text-purple-800 mb-8">
              Exploring the boundaries of color and form
            </p>
            <Button className="bg-gradient-to-r from-purple-600 to-black hover:bg-purple-700 text-white">
              Explore My Work
            </Button>
          </div>
        </header>
        <main>
          <section id="about" className="py-20 px-6 md:px-12 lg:px-24 bg-white">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-purple-900">
                  About the Artist
                </h2>
                <p className="text-lg text-gray-700">
                  Demitri is a visionary creator pushing the boundaries of
                  contemporary art. With a unique blend of traditional
                  techniques and modern digital tools, their work explores
                  themes of identity, nature, and the human experience in the
                  digital age.
                </p>
                <div className="flex items-center space-x-4">
                  <Palette className="text-purple-600 w-8 h-8" />
                  <span className="text-purple-900 font-semibold">
                    10+ Years of Artistic Journey
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <Music className="text-purple-600 w-8 h-8" />
                  <span className="text-purple-900 font-semibold">
                    Multidisciplinary Approach
                  </span>
                </div>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl transform rotate-3">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Artist at work"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </section>

          <section
            id="gallery"
            className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-indigo-100 to-purple-100"
          >
            <h2 className="text-4xl font-bold text-center text-purple-900 mb-12">
              Gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="relative aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Image
                    src={`/placeholder.svg?height=400&width=400&text=Artwork${
                      i + 1
                    }`}
                    alt={`Artwork ${i + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button
                variant="outline"
                className="bg-white text-purple-600 border-purple-600 hover:bg-purple-100"
              >
                View Full Gallery
              </Button>
            </div>
          </section>

          <section
            id="events"
            className="py-20 px-6 md:px-12 lg:px-24 bg-white"
          >
            <h2 className="text-4xl font-bold text-center text-purple-900 mb-12">
              Upcoming Events
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <Calendar className="text-purple-600 w-6 h-6" />
                    <span className="text-purple-900 font-semibold">
                      June {15 + i}, 2025
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-purple-800 mb-2">
                    Exhibition: The Color of Dreams
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Join us for an immersive journey through ArtistName's latest
                    collection, exploring the vivid landscapes of the
                    subconscious mind.
                  </p>
                  <Button
                    variant="outline"
                    className="bg-white text-purple-600 border-purple-600 hover:bg-purple-100"
                  >
                    Learn More
                  </Button>
                </div>
              ))}
            </div>
          </section>

          <section
            id="contact"
            className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-purple-100 to-indigo-100"
          >
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-purple-900 mb-6">
                Stay Connected
              </h2>
              <p className="text-lg text-purple-800 mb-8">
                Subscribe to my newsletter for exclusive updates,
                behind-the-scenes content, and early access to new releases.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-sm flex-1"
                />
                <Button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                >
                  Subscribe
                </Button>
              </form>
              <div className="flex justify-center space-x-6">
                <Link
                  href="#"
                  className="text-purple-600 hover:text-purple-800"
                >
                  <Instagram className="w-8 h-8" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="#"
                  className="text-purple-600 hover:text-purple-800"
                >
                  <Twitter className="w-8 h-8" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="text-purple-600 hover:text-purple-800"
                >
                  <Facebook className="w-8 h-8" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
