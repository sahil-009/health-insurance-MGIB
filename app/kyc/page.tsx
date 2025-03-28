"use client"

import { useSearchParams } from "next/navigation"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export default function KycPage() {
  const searchParams = useSearchParams()
  const selectedPlan = searchParams.get("plan")
  const selectedPrice = searchParams.get("price")

  const [consent, setConsent] = useState(false)

  return (
    <section className="py-12 bg-white min-h-screen">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4">Premium summary</h3>
              <div className="text-sm space-y-2">
                <div className="flex justify-between">
                  <span>{selectedPlan || "Selected Plan"}</span>
                  <span>{selectedPrice || "₹0"}</span>
                </div>
                <div className="flex justify-between">
                  <span>Additional Covers</span>
                  <span>₹460</span>
                </div>
                <div className="flex justify-between">
                  <span>Online Discount</span>
                  <span>-₹478</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (GST)</span>
                  <span>₹1,636</span>
                </div>
                <div className="flex justify-between text-xs text-gray-500 pl-4">
                  <span>CGST (9%)</span>
                  <span>₹818</span>
                </div>
                <div className="flex justify-between text-xs text-gray-500 pl-4">
                  <span>SGST (9%)</span>
                  <span>₹818</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between font-bold">
                  <span>Total Payable</span>
                  <span>₹10,728</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-sm text-gray-700">
              <h4 className="font-semibold mb-2">Tax deduction for section 80D</h4>
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
          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">Can you help us with some details?</h3>

              <div className="bg-[#f9f9f9] border rounded-md p-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="space-y-2 max-w-md">
                  <h4 className="text-lg font-semibold text-[#e26c00]">Update KYC</h4>
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

                <Button disabled={!consent} className="bg-[#e26c00] hover:bg-[#c45e00]">
                  Begin KYC process
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Accordions */}
          <Accordion type="multiple" className="rounded-md border">
            <AccordionItem value="adult1">
              <AccordionTrigger className="text-base px-4 py-2">Adult 1</AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                {/* Add adult 1 details */}
                <p>Adult 1 form or KYC section...</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="adult2">
              <AccordionTrigger className="text-base px-4 py-2">Adult 2</AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                {/* Add adult 2 details */}
                <p>Adult 2 form or KYC section...</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
