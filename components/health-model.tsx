"use client"
import { useRouter } from 'next/navigation'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

let memberId = 1

export default function HealthFormSection() {
  const router = useRouter()
  const [policyType, setPolicyType] = useState("individual")
  const [members, setMembers] = useState([])

  const ageOptions = Array.from({ length: 100 }, (_, i) => i + 1)

  const canAddMember = (type) => {
    // Allow multiple sons and daughters only
    if (type === "son" || type === "daughter") return true
    return !members.some((m) => m.type === type)
  }

  const addMember = (type:string) => {
    if (canAddMember(type)) {
      setMembers((prev) => [...prev, { id: memberId++, type }])
    }
  }

  const removeMember = (id) => {
    setMembers((prev) => prev.filter((m) => m.id !== id))
  }

  const handlePolicyChange = (value) => {
    setPolicyType(value)
    setMembers([]) // reset members when changing type
  }

  const renderAddButtons = () => {
    if (policyType === "family") {
      return (
        <>
          <Button variant="outline" onClick={() => addMember("spouse")} disabled={!canAddMember("spouse")}>+ Spouse</Button>
          <Button variant="outline" onClick={() => addMember("son")}>+ Son</Button>
          <Button variant="outline" onClick={() => addMember("daughter")}>+ Daughter</Button>
        </>
      )
    }
    if (policyType === "parents") {
      return (
        <>
          <Button variant="outline" onClick={() => addMember("father")} disabled={!canAddMember("father")}>+ Father</Button>
          <Button variant="outline" onClick={() => addMember("mother")} disabled={!canAddMember("mother")}>+ Mother</Button>
        </>
      )
    }
    return null
  }

  return (
    <section id="policy-form" className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-3xl mx-auto shadow-lg border-[rgb(219,234,255)]">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[rgb(21,93,253)] px-6 pt-6">
            Elevate Health Policy
          </h2>

          <CardContent className="p-6 space-y-6">
            {/* Pincode */}
            <div className="space-y-2">
              <Label htmlFor="pincode">PinCode</Label>
              <Input id="pincode" placeholder="Enter your pincode" className="h-12" />
            </div>

            {/* Self Age + For Whom */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Self Age</Label>
                <Select>
                  <SelectTrigger className="w-full h-12">
                    <SelectValue placeholder="Select Age" />
                  </SelectTrigger>
                  <SelectContent>
                    {ageOptions.map((age) => (
                      <SelectItem key={age} value={`${age}`}>{age} Years</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>For Whom?</Label>
                <Select value={policyType} onValueChange={handlePolicyChange}>
                  <SelectTrigger className="w-full h-12">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="individual">Individual</SelectItem>
                    <SelectItem value="family">Family Floater</SelectItem>
                    <SelectItem value="parents">Parents</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Dynamic Add Buttons */}
            {policyType !== "individual" && (
              <div className="flex gap-4 flex-wrap">{renderAddButtons()}</div>
            )}

            {/* Member Fields */}
            {members.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {members.map((member) => (
                  <div key={member.id} className="relative">
                    <Label className="block text-sm capitalize mb-1">
                      {member.type} Age
                    </Label>
                    <Select>
                      <SelectTrigger className="h-12 w-full">
                        <SelectValue placeholder="Select Age" />
                      </SelectTrigger>
                      <SelectContent>
                        {ageOptions.map((age) => (
                          <SelectItem key={age} value={`${age}`}>{age} Years</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <span
                      className="absolute top-2 right-2 text-red-500 cursor-pointer text-lg"
                      onClick={() => removeMember(member.id)}
                    >
                      ✕
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* CTA */}
            <div className="pt-4">
            <Button
                className="w-full bg-[rgb(21,93,253)] hover:bg-[rgb(21,93,253)/90] py-6 text-base md:text-lg"
                onClick={() => router.push('/plans')}
                  >
                      Next
                    </Button>

            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
