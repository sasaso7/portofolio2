import 'nextra-theme-blog/style.css'
import Head from 'next/head'
import '../styles/main.css'
import { useRouter } from 'next/router'
import Particles from '../scripts/particles.jsx'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react'
import Image from 'next/image'

export default function Nextra({ Component, pageProps }) {
  const router = useRouter()
  const [currentClicks, setcurrentClicks] = useState(2)
  const [stopStress, setstopStress] = useState(false)

  const [animationComplete, setAnimationComplete] = useState(false)

  const handleAnimationComplete = () => {
    setAnimationComplete(true)
  }

  useEffect(() => {
    setTimeout(() => setstopStress(false), 4000)
  }, [])

  return (
    <>
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in background"
        quantity={500}
        currentSize={currentClicks}
        shouldCenter={stopStress}
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
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 2, delay: 2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Component {...pageProps} />
          <Analytics />
        </motion.div>
        {animationComplete ? null : (
          <motion.div
            className="intro-text"
            style={{ display: animationComplete ? 'none' : 'flex' }}
          >
            <motion.div
              className="head"
              initial={{x: "-300%"}}
              animate={{
                x: ['-300%', '0%', '0%', '300%']
              }}
              transition={{ duration: 3 }}
              onAnimationComplete={handleAnimationComplete}
            >
              Philip Meisner Pedersen <br></br>
              Portofolio
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
