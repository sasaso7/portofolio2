import 'nextra-theme-blog/style.css'
import Head from 'next/head'
import '../styles/main.css'
import { useRouter } from 'next/router'
import Particles from '../scripts/particles.jsx'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


export default function Nextra({ Component, pageProps }) {
  const router = useRouter()
  const [currentClicks, setcurrentClicks] = useState(2)

  return (
    <>
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in background"
        quantity={500}
        currentSize={currentClicks}
      />
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <AnimatePresence>
        <motion.div
          className="slide-out"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  )
}
