"use client"

import { useState } from "react"
import { Shield, Users, Clock, CheckCircle, Hospital, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import dynamic from "next/dynamic"
import HealthFormSection from "@/components/health-model"

import { useRouter } from 'next/navigation'
// Dynamically import the 3D component with no SSR to avoid hydration issues
const HealthModel = dynamic(() => import("@/components/health-model"), { ssr: false })

export default function Home() {

  const router = useRouter();
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
          <Button className="bg-white text-[rgb(21,93,253)] hover:bg-[rgb(219,234,255)]" onClick={() => router.push('/kyc')}>Login</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="h-[80vh] py-16 bg-[rgb(219,234,255)]">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[rgb(21,93,253)] mb-4">
              Health Protection with Peace of Mind
            </h1>
            <p className="text-lg mb-8">
              Comprehensive health insurance with no medical tests. Get covered in minutes and enjoy a worry-free
              healthcare journey.
            </p>
            <Button 
              className="bg-[rgb(21,93,253)] text-white hover:bg-[rgb(21,93,253)/90] px-8 py-6 text-lg"
              onClick={() => {
                const formSection = document.getElementById('policy-form');
                if (formSection) {
                  formSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get a Free Quote
            </Button>
          </div>
          <div className="h-[400px] flex justify-center">
            <HealthModel />
          </div>
        </div>
      </section>

      {/* Policy Selection
      <HealthFormSection /> */}

      {/* Features */}
      <section className="py-16 bg-[rgb(219,234,255)]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[rgb(21,93,253)] mb-12">
            Why Choose Elevate Health Policy?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-[rgb(219,234,255)] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Hospital className="h-8 w-8 text-[rgb(21,93,253)]" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-[rgb(21,93,253)]">Cashless Hospitals</h3>
                <p>Access to 10,000+ cashless hospitals across India for hassle-free treatment</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-[rgb(219,234,255)] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-[rgb(21,93,253)]" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-[rgb(21,93,253)]">Quick Claims</h3>
                <p>Fast claim settlement with minimal documentation and digital processing</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-[rgb(219,234,255)] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-[rgb(21,93,253)]" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-[rgb(21,93,253)]">Family Coverage</h3>
                <p>Comprehensive coverage for your entire family under a single policy</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-[rgb(219,234,255)] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-[rgb(21,93,253)]" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-[rgb(21,93,253)]">No Claim Bonus</h3>
                <p>Get up to 50% bonus on sum insured for claim-free years</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[rgb(21,93,253)] mb-12">Our Health Insurance Plans</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border border-[rgb(219,234,255)] hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-[rgb(219,234,255)] p-6 text-center">
                  <h3 className="font-bold text-xl text-[rgb(21,93,253)]">Basic Plan</h3>
                  <p className="text-4xl font-bold my-4">
                    ₹5,999<span className="text-sm font-normal">/year</span>
                  </p>
                  <p>Sum Insured: ₹5 Lakhs</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[rgb(21,93,253)]" />
                      <span>Hospitalization Coverage</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[rgb(21,93,253)]" />
                      <span>Pre & Post Hospitalization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[rgb(21,93,253)]" />
                      <span>Day Care Procedures</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[rgb(21,93,253)]" />
                      <span>Ambulance Coverage</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6 bg-[rgb(21,93,253)] hover:bg-[rgb(21,93,253)/90]">Buy Now</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[rgb(21,93,253)] hover:shadow-lg transition-shadow relative">
              <div className="absolute top-0 right-0 bg-[rgb(21,93,253)] text-white px-4 py-1 text-sm font-medium">
                Popular
              </div>
              <CardContent className="p-0">
                <div className="bg-[rgb(219,234,255)] p-6 text-center">
                  <h3 className="font-bold text-xl text-[rgb(21,93,253)]">Premium Plan</h3>
                  <p className="text-4xl font-bold my-4">
                    ₹9,999<span className="text-sm font-normal">/year</span>
                  </p>
                  <p>Sum Insured: ₹10 Lakhs</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[rgb(21,93,253)]" />
                      <span>All Basic Plan Benefits</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[rgb(21,93,253)]" />
                      <span>Maternity Coverage</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[rgb(21,93,253)]" />
                      <span>Critical Illness Coverage</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[rgb(21,93,253)]" />
                      <span>Annual Health Check-up</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[rgb(21,93,253)]" />
                      <span>No Co-payment</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6 bg-[rgb(21,93,253)] hover:bg-[rgb(21,93,253)/90]">Buy Now</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-[rgb(219,234,255)] hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-[rgb(219,234,255)] p-6 text-center">
                  <h3 className="font-bold text-xl text-[rgb(21,93,253)]">Elite Plan</h3>
                  <p className="text-4xl font-bold my-4">
                    ₹14,999<span className="text-sm font-normal">/year</span>
                  </p>
                  <p>Sum Insured: ₹25 Lakhs</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[rgb(21,93,253)]" />
                      <span>All Premium Plan Benefits</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[rgb(21,93,253)]" />
                      <span>International Coverage</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[rgb(21,93,253)]" />
                      <span>Unlimited Teleconsultation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[rgb(21,93,253)]" />
                      <span>OPD Coverage</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[rgb(21,93,253)]" />
                      <span>Wellness Benefits</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6 bg-[rgb(21,93,253)] hover:bg-[rgb(21,93,253)/90]">Buy Now</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-[rgb(219,234,255)]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[rgb(21,93,253)] mb-12">What Our Customers Say</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-4">
                  "The claim process was incredibly smooth. My hospital bills were settled directly, and I didn't have
                  to worry about paperwork during my recovery."
                </p>
                <div className="font-medium">Rahul Sharma</div>
                <div className="text-sm text-gray-500">Delhi</div>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-4">
                  "I've been with Elevate Health for 3 years now. Their family floater plan gives us complete peace of
                  mind knowing that my entire family is protected."
                </p>
                <div className="font-medium">Priya Patel</div>
                <div className="text-sm text-gray-500">Mumbai</div>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-4">
                  "The customer service team is exceptional. They guided me through the entire process and helped me
                  choose the right plan for my parents."
                </p>
                <div className="font-medium">Arun Verma</div>
                <div className="text-sm text-gray-500">Bangalore</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[rgb(21,93,253)] mb-4">Ready to Secure Your Health?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Get comprehensive health coverage starting at just ₹5,999 per year. No medical tests required.
          </p>
          <Button 
            className="bg-[rgb(21,93,253)] hover:bg-[rgb(21,93,253)/90] px-8 py-6 text-lg"
            onClick={() => {
              const formSection = document.getElementById('policy-form');
              if (formSection) {
                formSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Get a Free Quote Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[rgb(21,93,253)] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-6 w-6" />
                <span className="text-lg font-bold">Elevate Health</span>
              </div>
              <p className="mb-4">Comprehensive health insurance solutions for individuals and families.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-[rgb(219,234,255)]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="hover:text-[rgb(219,234,255)]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="hover:text-[rgb(219,234,255)]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-[rgb(219,234,255)]">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#plans" className="hover:text-[rgb(219,234,255)]">
                    Plans
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[rgb(219,234,255)]">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[rgb(219,234,255)]">
                    Claims
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[rgb(219,234,255)]">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Our Plans</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#plans" className="hover:text-[rgb(219,234,255)]">
                    Individual Health
                  </a>
                </li>
                <li>
                  <a href="#plans" className="hover:text-[rgb(219,234,255)]">
                    Family Floater
                  </a>
                </li>
                <li>
                  <a href="#plans" className="hover:text-[rgb(219,234,255)]">
                    Senior Citizen
                  </a>
                </li>
                <li>
                  <a href="#plans" className="hover:text-[rgb(219,234,255)]">
                    Critical Illness
                  </a>
                </li>
                <li>
                  <a href="#plans" className="hover:text-[rgb(219,234,255)]">
                    Maternity
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>1800-123-4567</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>support@elevatehealth.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>123 Business Park, Mumbai, India</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Elevate Health Insurance. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}