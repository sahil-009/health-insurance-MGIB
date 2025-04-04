"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Shield } from "lucide-react"
import { motion } from "framer-motion"

export default function PlansPage() {
  const router = useRouter()
  const [userData, setUserData] = useState<any>(null)

  useEffect(() => {
    const data = sessionStorage.getItem("healthForm")
    if (data) setUserData(JSON.parse(data))
  }, [])

  return (
    <div className="bg-[#f6f9ff] min-h-screen">
      {/* Blue Top Header */}
      {/* <div className="bg-[rgb(21,93,253)] text-white py-4 shadow-md">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
          <div className="flex items-center gap-2">
            <Shield className="text-white h-6 w-6" />
            <h1 className="text-xl font-semibold">Elevate Health Insurance</h1>
          </div>
          {userData && (
            <p className="text-sm text-white/90">
              📍 {userData.pincode} | Age: {userData.selfAge} |{" "}
              {userData.policyType?.toUpperCase()}
            </p>
          )}
        </div>
      </div> */}

      {/* Plans Section */}
      <section id="plans" className="py-12 md:py-16 px-4">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
            Choose the Best Plan for You
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card
                  className={`shadow-lg transition-transform hover:scale-105 border ${
                    plan.highlight ? "border-blue-600" : "border-gray-200"
                  }`}
                >
                  <CardContent className="p-0">
                    <div className="bg-blue-50 text-center p-6">
                      <h3 className="font-bold text-lg text-blue-700">
                        {plan.title}
                      </h3>
                      <p className="text-3xl font-bold my-2 text-blue-800">
                        ₹{plan.price}
                        <span className="text-sm font-normal">/year</span>
                      </p>
                      <p className="text-sm text-gray-600">
                        Sum Insured: ₹{plan.cover}
                      </p>
                    </div>

                    <div className="p-6 space-y-3">
                      <ul className="space-y-2">
                        {plan.features.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="text-blue-600 w-5 h-5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white"
                        onClick={() => router.push("/kyc")}
                      >
                        Buy Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}

const plans = [
  {
    title: "Basic Plan",
    price: "5,999",
    cover: "5 Lakhs",
    highlight: false,
    features: [
      "Hospitalization Coverage",
      "Pre & Post Hospitalization",
      "Day Care Procedures",
      "Ambulance Coverage"
    ]
  },
  {
    title: "Premium Plan",
    price: "9,999",
    cover: "10 Lakhs",
    highlight: true,
    features: [
      "All Basic Plan Benefits",
      "Maternity Coverage",
      "Critical Illness Coverage",
      "Annual Health Check-up",
      "No Co-payment"
    ]
  },
  {
    title: "Elite Plan",
    price: "14,999",
    cover: "25 Lakhs",
    highlight: false,
    features: [
      "All Premium Plan Benefits",
      "International Coverage",
      "Unlimited Teleconsultation",
      "OPD Coverage",
      "Wellness Benefits"
    ]
  }
]
