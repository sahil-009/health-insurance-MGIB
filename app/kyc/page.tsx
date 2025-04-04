"use client"

import { useEffect, useState } from "react"
import { Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { motion } from "framer-motion"

export default function KycPage() {
  const [selectedPlan, setSelectedPlan] = useState<{ name: string; price: string } | null>(null)
  const [consent, setConsent] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("selectedPlan")
    if (stored) {
      setSelectedPlan(JSON.parse(stored))
    }
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      {/* <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="bg-[rgb(21,93,253)] text-white py-4"
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8" />
            <span className="text-xl font-bold">Elevate Health Insurance</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#plans" className="hover:underline">
              Plans
            </a>
            <a href="#" className="hover:underline">
              Claims
            </a>
            <a href="#" className="hover:underline">
              About Us
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </nav>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-white text-[rgb(21,93,253)] hover:bg-[rgb(219,234,255)]">Login</Button>
          </motion.div>
        </div>
      </motion.header> */}

      <motion.section 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="py-12 bg-white min-h-screen"
      >
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          {/* Left Column */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div whileHover={{ y: -5 }}>
              <Card className="border-[rgb(219,234,255)]">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-[rgb(21,93,253)]">Premium summary</h3>
                  <div className="text-sm space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-700">{selectedPlan?.name || "Selected Plan"}</span>
                      <span className="font-medium">{selectedPlan?.price || "₹0"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Additional Covers</span>
                      <span className="font-medium">₹460</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Online Discount</span>
                      <span className="font-medium text-[rgb(21,93,253)]">-₹478</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Tax (GST)</span>
                      <span className="font-medium">₹1,636</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 pl-4">
                      <span>CGST (9%)</span>
                      <span>₹818</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 pl-4">
                      <span>SGST (9%)</span>
                      <span>₹818</span>
                    </div>
                    <hr className="my-2 border-[rgb(219,234,255)]" />
                    <div className="flex justify-between font-bold text-[rgb(21,93,253)]">
                      <span>Total Payable</span>
                      <span>₹10,728</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ y: -5 }}>
              <Card className="border-[rgb(219,234,255)]">
                <CardContent className="p-6 text-sm text-gray-700">
                  <h4 className="font-semibold mb-2 text-[rgb(21,93,253)]">Tax deduction for section 80D</h4>
                  <p>As per Income Tax Act 1961...</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>₹25,000 for Self, Spouse, Dependent Children & Parents</li>
                    <li>₹50,000 for Senior Citizens</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div variants={itemVariants} className="col-span-2 space-y-6">
            <motion.div variants={fadeIn}>
              <Card className="border-[rgb(219,234,255)]">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-[rgb(21,93,253)]">Can you help us with some details?</h3>

                  <motion.div 
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="bg-[rgb(219,234,255)] border border-[rgb(21,93,253)/20] rounded-md p-4 flex flex-col md:flex-row justify-between items-center gap-6"
                  >
                    <div className="space-y-2 max-w-md">
                      <h4 className="text-lg font-semibold text-[rgb(21,93,253)]">Update KYC</h4>
                      <p className="text-sm text-gray-700">
                        From Jan 1, 2023, KYC is mandatory to buy insurance. You can complete KYC using:
                        PAN, Aadhaar, CKYC No., or Document Upload.
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <motion.div whileTap={{ scale: 0.9 }}>
                          <Checkbox
                            id="consent"
                            checked={consent}
                            onCheckedChange={(checked) => setConsent(checked === true)}
                          />
                        </motion.div>
                        <label htmlFor="consent" className="text-sm">
                          I hereby give consent to verify and fetch my ID via UIDAI or other methods.
                        </label>
                      </div>
                    </div>

                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        disabled={!consent} 
                        className="bg-[rgb(21,93,253)] hover:bg-[rgb(21,93,253)/90]"
                      >
                        Begin KYC process
                      </Button>
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Accordions */}
            <motion.div variants={fadeIn}>
              <Accordion type="multiple" className="rounded-md border border-[rgb(219,234,255)]">
                <AccordionItem value="adult1">
                  <motion.div whileHover={{ x: 5 }}>
                    <AccordionTrigger className="text-base px-4 py-2 hover:no-underline text-[rgb(21,93,253)]">
                      Adult 1
                    </AccordionTrigger>
                  </motion.div>
                  <AccordionContent className="px-4 pb-4">
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                          <motion.div whileHover={{ scale: 1.01 }}>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[rgb(21,93,253)] focus:border-[rgb(21,93,253)]"
                              placeholder="Enter full name"
                            />
                          </motion.div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                          <motion.div whileHover={{ scale: 1.01 }}>
                            <input
                              type="date"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[rgb(21,93,253)] focus:border-[rgb(21,93,253)]"
                            />
                          </motion.div>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">PAN Number</label>
                        <motion.div whileHover={{ scale: 1.01 }}>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[rgb(21,93,253)] focus:border-[rgb(21,93,253)]"
                            placeholder="Enter PAN number"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="adult2">
                  <motion.div whileHover={{ x: 5 }}>
                    <AccordionTrigger className="text-base px-4 py-2 hover:no-underline text-[rgb(21,93,253)]">
                      Adult 2
                    </AccordionTrigger>
                  </motion.div>
                  <AccordionContent className="px-4 pb-4">
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                          <motion.div whileHover={{ scale: 1.01 }}>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[rgb(21,93,253)] focus:border-[rgb(21,93,253)]"
                              placeholder="Enter full name"
                            />
                          </motion.div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                          <motion.div whileHover={{ scale: 1.01 }}>
                            <input
                              type="date"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[rgb(21,93,253)] focus:border-[rgb(21,93,253)]"
                            />
                          </motion.div>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">PAN Number</label>
                        <motion.div whileHover={{ scale: 1.01 }}>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[rgb(21,93,253)] focus:border-[rgb(21,93,253)]"
                            placeholder="Enter PAN number"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>

            {/* Continue Button */}
            <motion.div 
              variants={itemVariants}
              className="flex justify-end"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="bg-[rgb(21,93,253)] hover:bg-[rgb(21,93,253)/90] px-8 py-4">
                Continue to Payment
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}