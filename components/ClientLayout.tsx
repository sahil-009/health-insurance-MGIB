"use client"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Header from "@/components/Header"
import AmbulanceLoader from "@/components/AmbulanceLoader"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <>
      {loading && <AmbulanceLoader />}
      <Header />
      <main>{children}</main>
    </>
  )
}
