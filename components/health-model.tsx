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
    <section id="policy-form" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl -mt-10 font-bold text-center text-[rgb(21,93,253)] mb-12">Elevate Health Policy</h2>

        <Card className="max-w-4xl -mt-8 mx-auto shadow-lg border-[rgb(219,234,255)] overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-[rgb(219,234,255)] p-6">
              <Tabs defaultValue="individual" onValueChange={setPolicyType}>
                <TabsList className="grid grid-cols-2 bg-white">
                  <TabsTrigger
                    value="individual"
                    className="data-[state=active]:bg-[rgb(21,93,253)] data-[state=active]:text-white"
                  >
                    Individual Policy
                  </TabsTrigger>
                  <TabsTrigger
                    value="family"
                    className="data-[state=active]:bg-[rgb(21,93,253)] data-[state=active]:text-white"
                  >
                    Family Floater
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="individual" className="mt-6">
                  <p className="text-center mb-4">One policy, one person</p>
                </TabsContent>

                <TabsContent value="family" className="mt-6">
                  <p className="text-center mb-4">One policy, multiple family members</p>
                </TabsContent>
              </Tabs>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <h3 className="font-medium mb-3">Select age group</h3>
                <RadioGroup defaultValue="adult" className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-[rgb(219,234,255)] cursor-pointer">
                    <RadioGroupItem value="adult" id="adult" />
                    <Label htmlFor="adult">Adult (18-45)</Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-[rgb(219,234,255)] cursor-pointer">
                    <RadioGroupItem value="senior" id="senior" />
                    <Label htmlFor="senior">Senior (46-65)</Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-[rgb(219,234,255)] cursor-pointer">
                    <RadioGroupItem value="child" id="child" />
                    <Label htmlFor="child">Child (0-17)</Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-[rgb(219,234,255)] cursor-pointer">
                    <RadioGroupItem value="senior-plus" id="senior-plus" />
                    <Label htmlFor="senior-plus">Senior+ (66+)</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="pincode">Pincode</Label>
                  <Input id="pincode" placeholder="Enter your pincode" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="mobile">Mobile Number</Label>
                  <Input id="mobile" placeholder="Enter your mobile number" className="mt-1" />
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label htmlFor="terms" className="text-sm">
                    I agree to the{" "}
                    <a href="#" className="text-[rgb(21,93,253)]">
                      terms and conditions
                    </a>
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="contact" />
                  <label htmlFor="contact" className="text-sm">
                    I authorize Elevate Health to contact me via SMS/WhatsApp/Email
                  </label>
                </div>
              </div>

              <Button 
                className="w-full bg-[rgb(21,93,253)] hover:bg-[rgb(21,93,253)/90]"
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