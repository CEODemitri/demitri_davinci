import Link from 'next/link';
import Image from 'next/image'
import owl from './owl.jpg'
import bleach from './bleach.jpg'



export default function NextPost() {
  return (
    <main className="bg-white-700 px-10 md:px-20 lg:px-40">
        <div bg-gradient-to-r from-green-500 to-teal-500>
          <h2 className="text-center">
            <Link href="/">Back to home</Link>
          </h2>
          <h1 className="text-center"py-2>Next Post</h1>

          <div className="lg:flex gap-20">
            <div className="text-center shadow-lg p-10 rounded-lg my-10">
              <Image object-position="center" object-fit="contain" src={owl} />
              <h3 className="font-richards py-4 text-lg font-medium pt-8 pb-2">owlmagination</h3>
              <p>
                45sketch using artflow. From reference
              </p>
              <p className="text-purple-300 py-1">Graphite</p>
              <p className="text-purple-300 py-1">Acrylic</p>
              <p className="text-purple-300 py-1">Chalk</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image object-position="center" object-fit="contain" position="" src={bleach} />
              <h3 className="font-richards py-4 text-lg font-medium pt-8 pb-2">soul reaper ion</h3>
              <p>
                3daysketch using infinitePainter. From reference
              </p>
              <p className="text-purple-300 py-1">Graphite</p>
              <p className="text-purple-300 py-1">Acrylic</p>
              <p className="text-purple-300 py-1">Spray</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image object-position="center" object-fit="cover" src={bleach} />
              <h3 className="font-richards py-4 text-lg font-medium pt-8 pb-2">soul reaper ion</h3>
              <p>
                3daysketch using infinitePainter. From reference
              </p>
              <p className="text-purple-300 py-1">Graphite</p>
              <p className="text-purple-300 py-1">Acrylic</p>
              <p className="text-purple-300 py-1">Spray</p>
            </div>

          </div> 
        </div>
    </main>
  );
}