'use client'

import { AppBar } from "@/components/app-bar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const companies = [
  {
    name: "Microsoft",
    logo: "https://logo.clearbit.com/microsoft.com",
    availableReferrers: 15,
    successfulReferrals: 42,
    fields: ["Tech", "Cloud", "Software"],
  },
  {
    name: "Google",
    logo: "https://logo.clearbit.com/google.com",
    availableReferrers: 23,
    successfulReferrals: 78,
    fields: ["Tech", "AI", "Advertising"],
  },
  {
    name: "Apple",
    logo: "https://logo.clearbit.com/apple.com",
    availableReferrers: 18,
    successfulReferrals: 56,
    fields: ["Tech", "Hardware", "Software"],
  },
  {
    name: "Amazon",
    logo: "https://logo.clearbit.com/amazon.com",
    availableReferrers: 20,
    successfulReferrals: 65,
    fields: ["E-commerce", "Retail", "Logistics"],
  },
  {
    name: "Facebook",
    logo: "https://logo.clearbit.com/facebook.com",
    availableReferrers: 12,
    successfulReferrals: 38,
    fields: ["Social Media", "Advertising", "Tech"],
  },
  {
    name: "Netflix",
    logo: "https://logo.clearbit.com/netflix.com",
    availableReferrers: 8,
    successfulReferrals: 25,
    fields: ["Entertainment", "Streaming", "Media"],
  },
  {
    name: "Tesla",
    logo: "https://logo.clearbit.com/tesla.com",
    availableReferrers: 10,
    successfulReferrals: 30,
    fields: ["Electric Vehicles", "Autonomous", "Tech"],
  },
  {
    name: "Twitter",
    logo: "https://logo.clearbit.com/twitter.com",
    availableReferrers: 7,
    successfulReferrals: 22,
    fields: ["Social Media", "News", "Tech"],
  },
  {
    name: "Uber",
    logo: "https://logo.clearbit.com/uber.com",
    availableReferrers: 9,
    successfulReferrals: 28,
    fields: ["Ride Sharing", "Logistics", "Tech"],
  },
]

export function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppBar />
      <main className="flex-1 py-12 px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Find referrers for top companies</h1>
            <h2 className="text-3xl font-bold tracking-tight text-blue-600">and boost your career.</h2>
            <p className="text-lg text-gray-600">
              Browse our list of top companies and connect with referrers who can help you land your dream job.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company, index) => (
              <div key={index} className="border rounded-lg p-6 space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <img src={company.logo} alt={`${company.name} logo`} className="w-12 h-12 rounded" />
                    <div>
                      <h3 className="font-semibold text-lg">{company.name}</h3>
                      <p className="text-sm text-gray-600">
                        {company.availableReferrers} referrers available
                      </p>
                    </div>
                  </div>
                  <div className=" text-sm text-gray-600">
                  {company.successfulReferrals} successful referrals
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {company.fields.map((field, fieldIndex) => (
                      <Badge key={fieldIndex} variant="secondary">{field}</Badge>
                    ))}
                  </div>
                </div>
                <Link href={`/company/${company.name.toLowerCase()}`} passHref>
                  <Button className="w-full mt-4">Find referrers</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
