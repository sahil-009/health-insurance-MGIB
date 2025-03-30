"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Shield, Menu, X } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-[rgb(21,93,253)] text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Shield className="h-8 w-8" />
          <span className="text-xl font-bold">Elevate Health Insurance</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="/" className="hover:underline">Home</a>
          <a href="#plans" className="hover:underline">Plans</a>
          <a href="#" className="hover:underline">Claims</a>
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <Button className="hidden md:flex bg-white text-[rgb(21,93,253)] hover:bg-[rgb(219,234,255)]">
          Login
        </Button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[rgb(21,93,253)] py-4 px-4">
          <nav className="flex flex-col gap-4">
            {["Home", "Plans", "Claims", "About Us", "Contact"].map((item) => (
              <a key={item} href="#" className="hover:underline" onClick={() => setMobileMenuOpen(false)}>
                {item}
              </a>
            ))}
            <Button className="bg-white text-[rgb(21,93,253)] hover:bg-[rgb(219,234,255)] w-full">
              Login
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
