import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import Image from 'next/image'
import logo from '../public/logo.png'
import Link from 'next/link'
import { useState } from "react";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Demitri da Vinci</title>
        <meta />
        <link />
      </Head>

      <main className="bg-white-700 px-10 md:px-20 dark:bg-gradient-to-b from-sky-700">
        
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-2xl font-richards">Demitri da Vinci</h1>
            
            <ul className="flex items-center">
              
              <li>
                <BsFillMoonStarsFill 
                  onClick={() => setDarkMode(!darkMode)} 
                  className="cursor-pointer text-xl"/>
              </li>
              <li>
                <Link className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="/posts/soon">#comingSoon</Link>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10">
            <h2 className="text-6xl py-2 text-green-300 font-md">Artist</h2>
            <h3 className="text-2xl py-2">inspired by nature.</h3>
            <p className="text-md py-5 leading-8 text-purple-300">Art is a unique field of study. From the stars to the bugs that crawl the earth, this world amazes me. Many great artist have come before me whom i truly look to exceed. This is my perspective or attempt to lay my own path. Thank you for visiting. please, Enjoy.</p>
          </div>

          <div className="text-4xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillYoutube />
            <AiFillLinkedin />
            <AiFillTwitterCircle />
          </div>

          <div className="relative mx-auto xl-auto 2xl-auto bg-gradient-to-b from-yellow-600 mt-20 w-100 h-300 rounded-full ">
            <Image src={logo} objectFit="cover"/>
          </div>
        
        </section>

        <section>
          <div className="text-center">
            <h3 className="text-3xl py-1">Medium</h3>
            <ul className="text-md py-2 leading-8 text-purple-400">
              <li><Link href="/posts/traditional">Traditional</Link></li>
              <li><Link href="/posts/digital">Digital</Link></li>
              </ul>
            <p>Crayons gave me my first intuitive insight that I had a love for making <span className="text-green-300">art</span>. From then I ventured to more technical drawings with graphite and pastel. My absolute two favorite mediums hands down; a tie because for one, the melodic dance of black and white from the graphite with fine points to deep shadows and the full freedom of expression with pastels. Lately I have been heavy on acrylic and watercolor, with some alcohol markers.</p>
            <p>Keeping pace with the world, since 2023, I have started working with drawing digitally. Quite the adventure, with the extensive scope of many possibilities, I am excited to sea what the medium brings to my collection.</p>
          </div>

          <div>
          </div>
        </section>

        <div class="footer">
        </div>


      
      </main>
    </div>
  )
}
