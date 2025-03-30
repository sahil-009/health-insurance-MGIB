"use client"

import { motion } from "framer-motion"
import { FaAmbulance, FaCircle } from "react-icons/fa"

export default function AmbulanceLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="flex flex-col items-center gap-6">
        {/* Moving ambulance */}
        <motion.div
          className="relative text-[5rem] text-red-600"
          initial={{ x: "-100vw" }}
          animate={{ x: "100vw" }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          <FaAmbulance className="drop-shadow-xl" />
          <motion.div
            className="absolute bottom-1 left-[0.7rem] text-gray-800 text-[1rem]"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }}
          >
            <FaCircle />
          </motion.div>
          <motion.div
            className="absolute bottom-1 left-[3.2rem] text-gray-800 text-[1rem]"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }}
          >
            <FaCircle />
          </motion.div>
        </motion.div>

        <p className="text-lg md:text-xl font-semibold text-gray-800 tracking-wide">
          🩺 Finding your best policy...
        </p>
      </div>
    </div>
  )
}
