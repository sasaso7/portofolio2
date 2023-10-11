import { useState } from 'react'
import { motion } from "framer-motion";
import { useRouter } from 'next/router';

export function InitialAnimation({ children }) {
    const [count, setCount] = useState(0)
    return (
      <div onClick={() => setCount(count + 1)} className="boxContainer">
                <motion.div
                      className="box"
      animate={{
        scale: [4, 1, 0],
  
      }}
      whileTap={{ scale: 0.8}}
      transition={{ delay: 1.5 }}
      />
      {children}
      </div>
    )
  }
export const goToProjects = () => {
    const router = useRouter();
    router.push("posts");
}
