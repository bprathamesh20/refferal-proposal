'use client'

import { AppBar } from "@/components/app-bar"
import {  MapPin, Users, ExternalLink, Facebook, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export function CompanyPage({ companyName }: { companyName: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    toast({
      title: "Request submitted",
      description: "Your request has been submitted. We will get back to you soon.",
    })
    setIsOpen(false)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <AppBar />
      <main className="flex-1 py-12 px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <div className="flex items-start space-x-6">
                <img
                  alt={`${companyName} logo`}
                  className="rounded-lg"
                  height="100"
                  src="https://logo.clearbit.com/microsoft.com"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold">Get a job referral to {companyName}</h1>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <MapPin className="h-4 w-4" />
                    <span>Washington, United States of America</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Users className="h-4 w-4" />
                    <span>50+ Referrers</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">Commerce</Badge>
                    <Badge variant="secondary">Gaming</Badge>
                    <Badge variant="secondary">Tech</Badge>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-2xl font-bold">₹5000</span>
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                  <DialogTrigger asChild>
                    <Button>Refer me to {companyName}</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Request Referral to {companyName}</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="jobUrl" className="block text-sm font-medium text-gray-700">
                          Job URL
                        </label>
                        <Input id="jobUrl" type="url" placeholder="https://company.com/job" required />
                      </div>
                      <div>
                        <label htmlFor="cv" className="block text-sm font-medium text-gray-700">
                          Upload CV
                        </label>
                        <Input id="cv" type="file" accept=".pdf,.doc,.docx" required />
                      </div>
                      <div>
                        <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                          Bio
                        </label>
                        <Input id="bio" placeholder="Brief introduction about yourself" required />
                      </div>
                      <Button type="submit" className="w-full">Submit Request</Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Description</h2>
                <p className="text-gray-600">
                  Amazon.com, Inc. engages in the retail sale of consumer products and subscriptions in North America and
                  internationally. The company operates through three segments: North America, International, and Amazon Web
                  Services (AWS). It sells merchandise and content purchased for resale from third-party sellers through physical and
                  online stores. The company also manufactures and sells electronic devices, including Kindle, Fire tablets, Fire TVs,
                  Rings, and Echo and other devices; provides Kindle Direct Publishing, an online service that allows independent
                  authors and publishers to make their books available in the Kindle Store; and develops and produces media content.
                  In addition, it offers programs that enable sellers to sell their products on its websites, as well as its stores; and
                  programs that allow authors, musicians, filmmakers, Twitch streamers, skill and app developers, and others to publish
                  and sell content. Further, the company provides compute, storage, database, analytics, machine learning, and other
                  services, as well as fulfillment, advertising, publishing, and digital content subscriptions. Additionally, it offers Amazon
                  Prime, a membership program, which provides free shipping of various items; access to streaming of movies and
                  series; and other services. The company serves consumers, sellers, developers, enterprises, and content creators.
                  Amazon.com, Inc. was incorporated in 1994 and is headquartered in Seattle, Washington.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>About</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Careers Page</h3>
                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                      www.amazon.jobs
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon">
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Twitter className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-purple-100">
                <CardContent className="space-y-4 p-6">
                  <h3 className="text-xl font-semibold text-center">
                    Already working at {companyName}?
                  </h3>
                  <p className="text-center text-gray-700">
                    Become a referrer and get paid!
                  </p>
                  <Button className="w-full" variant="secondary">
                    Apply now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

