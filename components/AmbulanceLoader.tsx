"use client"

import { motion } from "framer-motion"
import { FaHeartbeat, FaShieldAlt, FaSearch, FaClipboardCheck, FaSync } from "react-icons/fa"
import { useEffect, useState } from "react"

export default function PolicyFinderLoader() {
  const [progress, setProgress] = useState(0)
  const [isReloading, setIsReloading] = useState(false)
  const [searchStep, setSearchStep] = useState(0)
  
  const searchSteps = [
    "Analyzing your profile...",
    "Checking 142 available plans...",
    "Comparing coverage options...",
    "Calculating premium savings...",
    "Verifying eligibility...",
    "Finalizing best matches..."
  ]

  useEffect(() => {
    // Main loading sequence
    const loadInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(loadInterval)
          return 100
        }
        return prev + 2
      })
    }, 150)

    // Step changer
    const stepInterval = setInterval(() => {
      setSearchStep(prev => (prev >= searchSteps.length - 1 ? 0 : prev + 1))
    }, 2000)

    // Simulate reload after completion
    const reloadTimeout = setTimeout(() => {
      setIsReloading(true)
      setTimeout(() => {
        setProgress(0)
        setIsReloading(false)
      }, 1500)
    }, 10000) // Reload after 10 seconds

    return () => {
      clearInterval(loadInterval)
      clearInterval(stepInterval)
      clearTimeout(reloadTimeout)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/95 backdrop-blur-md">
      <div className="flex flex-col items-center gap-8 p-8 max-w-md w-full">
        {/* Animated header */}
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            className="p-4 rounded-full bg-blue-50 text-blue-600"
            animate={{ 
              rotate: isReloading ? 360 : 0,
              scale: isReloading ? [1, 1.1, 1] : 1
            }}
            transition={{ 
              rotate: { duration: 1.5, repeat: isReloading ? Infinity : 0, ease: "linear" },
              scale: { duration: 0.5, repeat: isReloading ? Infinity : 0 }
            }}
          >
            {isReloading ? (
              <FaSync className="text-3xl" />
            ) : (
              <FaShieldAlt className="text-3xl" />
            )}
          </motion.div>
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            {isReloading ? "Refreshing Policies..." : "Finding Your Perfect Health Plan"}
          </h2>
        </motion.div>

        {/* Animated search process */}
        <div className="w-full space-y-6">
          {/* Progress bar with pulse animation */}
          <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
            <motion.div 
              className="h-2.5 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Search steps with icon animation */}
          <motion.div 
            className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              animate={{ 
                x: [0, 5, 0],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity 
              }}
            >
              <FaSearch className="text-blue-500 text-xl" />
            </motion.div>
            <div>
              <p className="font-medium text-gray-700">{searchSteps[searchStep]}</p>
              <p className="text-sm text-gray-500 mt-1">
                {Math.min(progress, 100)}% complete
              </p>
            </div>
          </motion.div>

          {/* Policy cards animation */}
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                className="h-20 bg-white rounded-lg border border-gray-200 flex flex-col items-center justify-center p-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: [0.5, 1, 0.5],
                  y: [10, 0, 10],
                  scale: [0.95, 1, 0.95]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  delay: item * 0.3
                }}
              >
                <FaHeartbeat className="text-red-400 mb-1" />
                <div className="h-2 bg-gray-200 rounded-full w-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-green-400 rounded-full"
                    animate={{ width: ["0%", "100%", "0%"] }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: item * 0.3
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer with disclaimer */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1 }}
        >
          <p className="text-xs text-gray-500">
            Searching through 42 providers for optimal coverage
          </p>
          {progress >= 90 && !isReloading && (
            <motion.p
              className="text-sm text-blue-600 mt-2 flex items-center justify-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <FaClipboardCheck />
              Almost done! Verifying final details...
            </motion.p>
          )}
        </motion.div>
      </div>
    </div>
  )
}