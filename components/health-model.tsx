"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export default function HealthFormSection() {
  const [policyType, setPolicyType] = useState("individual")

  return (
    <section id="policy-form" className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Ensure this heading is visible - added background and padding for testing */}
        <Card className="max-w-3xl mx-aut mt-80 md:mt-48 shadow-lg border-[rgb(219,234,255)]">
  <h2 className="text-2xl md:text-3xl font-bold text-center text-[rgb(21,93,253)] px-6 pt-6 md:px-8 md:pt-8">
    Elevate Health Policy
  </h2>
  </Card>

        <Card className="max-w-4xl w-full shadow-lg border-[rgb(219,234,255)]">
          <CardContent className="p-0">
            <div className="bg-[rgb(219,234,255)] px-6 py-4 md:px-8 md:py-6">
              <Tabs defaultValue="individual" onValueChange={setPolicyType}>
                <TabsList className="grid grid-cols-2 bg-white">
                  <TabsTrigger
                    value="individual"
                    className="data-[state=active]:bg-[rgb(21,93,253)] data-[state=active]:text-white py-3 text-sm md:text-base"
                  >
                    Individual Policy
                  </TabsTrigger>
                  <TabsTrigger
                    value="family"
                    className="data-[state=active]:bg-[rgb(21,93,253)] data-[state=active]:text-white py-3 text-sm md:text-base"
                  >
                    Family Floater
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="individual" className="mt-4 md:mt-6">
                  <p className="text-center text-sm md:text-base text-gray-600">One policy, one person</p>
                </TabsContent>

                <TabsContent value="family" className="mt-4 md:mt-6">
                  <p className="text-center text-sm md:text-base text-gray-600">One policy, multiple family members</p>
                </TabsContent>
              </Tabs>
            </div>

            <div className="px-6 py-4 md:px-8 md:py-6 space-y-6 md:space-y-8">
              <div>
                <h3 className="font-medium text-base md:text-lg mb-3 md:mb-4 text-gray-800">Select age group</h3>
                <RadioGroup defaultValue="adult" className="grid grid-cols-2 text-xs md:grid-cols-4 gap-3 md:gap-4">
                  <div className="flex items-center space-x-3 border rounded-lg p-3 hover:bg-[rgb(219,234,255)] cursor-pointer">
                    <RadioGroupItem value="adult" id="adult" />
                    <Label htmlFor="adult" className="text-xs">Adult (18-45)</Label>
                  </div>
                  <div className="flex items-center space-x-3 border rounded-lg p-3 hover:bg-[rgb(219,234,255)] cursor-pointer">
                    <RadioGroupItem value="senior" id="senior" />
                    <Label htmlFor="senior" className="text-xs">Senior (46-65)</Label>
                  </div>
                  <div className="flex items-center space-x-3 border rounded-lg p-3 hover:bg-[rgb(219,234,255)] cursor-pointer">
                    <RadioGroupItem value="child" id="child" />
                    <Label htmlFor="child" className="text-xs">Child (0-17)</Label>
                  </div>
                  <div className="flex items-center space-x-3 border rounded-lg p-3 hover:bg-[rgb(219,234,255)] cursor-pointer">
                    <RadioGroupItem value="senior-plus" id="senior-plus" />
                    <Label htmlFor="senior-plus" className="text-xs">Senior+ (66+)</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <Label htmlFor="pincode" className="text-sm md:text-base">Pincode</Label>
                  <Input 
                    id="pincode" 
                    placeholder="Enter your pincode" 
                    className="text-base h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mobile" className="text-sm md:text-base">Mobile Number</Label>
                  <Input 
                    id="mobile" 
                    placeholder="Enter your mobile number" 
                    className="text-base h-12"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox id="terms" className="mt-1" />
                  <label htmlFor="terms" className="text-sm md:text-base leading-snug">
                    I agree to the{" "}
                    <a href="#" className="text-[rgb(21,93,253)] underline">
                      terms and conditions
                    </a>
                  </label>
                </div>
                <div className="flex items-start space-x-3">
                  <Checkbox id="contact" className="mt-1" />
                  <label htmlFor="contact" className="text-sm md:text-base leading-snug">
                    I authorize Elevate Health to contact me via SMS/WhatsApp/Email
                  </label>
                </div>
              </div>

              <Button 
                className="w-full bg-[rgb(21,93,253)] hover:bg-[rgb(21,93,253)/90] py-6 text-base md:text-lg"
                onClick={() => {
                  const plansSection = document.getElementById('plans');
                  if (plansSection) {
                    plansSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                View Plans
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
} 