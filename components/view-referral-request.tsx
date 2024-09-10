'use client'

import { Bell, Settings, ShoppingCart, ChevronDown, ExternalLink, FileText, User, Briefcase, MapPin, Calendar, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { AppBar } from "./app-bar"

export function ViewReferralRequest() {
  const jobDetails = {
    company: "Amazon",
    position: "Software Development Engineer",
    location: "Seattle, WA",
    type: "Full-time",
    url: "https://www.amazon.jobs/en/jobs/123456",
    postedDate: "2023-09-15",
  }

  const userDetails = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    linkedin: "https://www.linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
  }

  const userBio = `Experienced software engineer with a passion for building scalable web applications. 
  Proficient in JavaScript, React, Node.js, and AWS. Seeking new opportunities to contribute to innovative projects 
  and collaborate with talented teams.`

  return (
    <div className="flex flex-col min-h-screen">
      <AppBar/>
      <main className="flex-1 py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">View Referral Request</h1>
            <div className="flex space-x-4">
              <Button variant="outline">Decline Referral</Button>
              <Button>Provide Referral</Button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Job Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Briefcase className="h-5 w-5 text-gray-500" />
                    <span className="font-semibold">{jobDetails.position}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-gray-500" />
                    <span>{jobDetails.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-gray-500" />
                    <span>Posted on {jobDetails.postedDate}</span>
                  </div>
                  <Badge>{jobDetails.type}</Badge>
                  <Button variant="outline" className="w-full">
                    View Job Posting
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Applicant Bio</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{userBio}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Resume</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <FileText className="h-6 w-6 text-blue-500" />
                      <span>John_Doe_Resume.pdf</span>
                    </div>
                    <Button>
                      View Resume
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Applicant Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="/placeholder.svg" alt={userDetails.name} />
                      <AvatarFallback>{userDetails.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h2 className="text-xl font-semibold">{userDetails.name}</h2>
                      <p className="text-sm text-gray-500">{userDetails.location}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <User className="h-5 w-5 text-gray-500" />
                      <span>{userDetails.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-5 w-5 text-gray-500" />
                      <span>{userDetails.phone}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full">
                      LinkedIn Profile
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="w-full">
                      GitHub Profile
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

