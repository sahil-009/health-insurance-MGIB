"use client"

import { useEffect, useState } from "react"
import { Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export default function KycPage() {
  const [selectedPlan, setSelectedPlan] = useState<{ name: string; price: string } | null>(null)
  const [consent, setConsent] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("selectedPlan")
    if (stored) {
      setSelectedPlan(JSON.parse(stored))
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[rgb(21,93,253)] text-white py-4">
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
          <Button className="bg-white text-[rgb(21,93,253)] hover:bg-[rgb(219,234,255)]">Login</Button>
        </div>
      </header>

      <section className="py-12 bg-white min-h-screen">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
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
          </div>

          {/* Right Column */}
          <div className="col-span-2 space-y-6">
            <Card className="border-[rgb(219,234,255)]">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-[rgb(21,93,253)]">Can you help us with some details?</h3>

                <div className="bg-[rgb(219,234,255)] border border-[rgb(21,93,253)/20] rounded-md p-4 flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="space-y-2 max-w-md">
                    <h4 className="text-lg font-semibold text-[rgb(21,93,253)]">Update KYC</h4>
                    <p className="text-sm text-gray-700">
                      From Jan 1, 2023, KYC is mandatory to buy insurance. You can complete KYC using:
                      PAN, Aadhaar, CKYC No., or Document Upload.
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Checkbox
                        id="consent"
                        checked={consent}
                        onCheckedChange={(checked) => setConsent(checked === true)}
                      />
                      <label htmlFor="consent" className="text-sm">
                        I hereby give consent to verify and fetch my ID via UIDAI or other methods.
                      </label>
                    </div>
                  </div>

                  <Button 
                    disabled={!consent} 
                    className="bg-[rgb(21,93,253)] hover:bg-[rgb(21,93,253)/90]"
                  >
                    Begin KYC process
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Accordions */}
            <Accordion type="multiple" className="rounded-md border border-[rgb(219,234,255)]">
              <AccordionItem value="adult1">
                <AccordionTrigger className="text-base px-4 py-2 hover:no-underline text-[rgb(21,93,253)]">
                  Adult 1
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[rgb(21,93,253)] focus:border-[rgb(21,93,253)]"
                          placeholder="Enter full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                        <input
                          type="date"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[rgb(21,93,253)] focus:border-[rgb(21,93,253)]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">PAN Number</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[rgb(21,93,253)] focus:border-[rgb(21,93,253)]"
                        placeholder="Enter PAN number"
                      />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="adult2">
                <AccordionTrigger className="text-base px-4 py-2 hover:no-underline text-[rgb(21,93,253)]">
                  Adult 2
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[rgb(21,93,253)] focus:border-[rgb(21,93,253)]"
                          placeholder="Enter full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                        <input
                          type="date"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[rgb(21,93,253)] focus:border-[rgb(21,93,253)]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">PAN Number</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[rgb(21,93,253)] focus:border-[rgb(21,93,253)]"
                        placeholder="Enter PAN number"
                      />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Continue Button */}
            <div className="flex justify-end">
              <Button className="bg-[rgb(21,93,253)] hover:bg-[rgb(21,93,253)/90] px-8 py-4">
                Continue to Payment
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
