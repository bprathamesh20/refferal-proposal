'use client'

import { Bell, Settings, ShoppingCart, ChevronDown, CheckCircle, Clock, User, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const orderStatuses = [
  { id: 1, name: "Referral request initiated", completed: true },
  { id: 2, name: "Matching you with referrers", completed: true },
  { id: 3, name: "Profile sent to referrers", completed: true },
  { id: 4, name: "Referral provided", completed: false },
  { id: 5, name: "Order Complete", completed: false },
]

export function ViewOrder() {
  const currentStep = 3 // This would be dynamically set based on the actual order status

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex space-x-4">
            <a className="text-sm font-medium text-gray-600 hover:text-gray-900" href="#">
              Find Jobs
            </a>
            <a className="text-sm font-medium text-gray-600 hover:text-gray-900" href="#">
              Request Referrals
            </a>
            <a className="text-sm font-medium text-gray-600 hover:text-gray-900" href="#">
              Referral Marketplace
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
                Resume Tools
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Resume Builder</DropdownMenuItem>
                <DropdownMenuItem>Resume Review</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a className="text-sm font-medium text-gray-600 hover:text-gray-900" href="#">
              Pricing
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Order History</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
            <span className="sr-only">Settings</span>
          </Button>
          <Button variant="outline">Sign in</Button>
          <Button>Sign up</Button>
        </div>
      </header>
      <main className="flex-1 py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold">View Order</h1>
          <Card>
            <CardHeader>
              <CardTitle>Order Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <Progress value={(currentStep / orderStatuses.length) * 100} className="w-full" />
                <div className="grid gap-6 md:grid-cols-5">
                  {orderStatuses.map((status, index) => (
                    <div key={status.id} className="flex flex-col items-center text-center">
                      <div
                        className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${
                          index < currentStep
                            ? "bg-green-500 border-green-500 text-white"
                            : index === currentStep
                            ? "border-blue-500 text-blue-500"
                            : "border-gray-300 text-gray-300"
                        }`}
                      >
                        {index < currentStep ? (
                          <CheckCircle className="w-6 h-6" />
                        ) : index === currentStep ? (
                          <Clock className="w-6 h-6" />
                        ) : (
                          <span>{status.id}</span>
                        )}
                      </div>
                      <p className="mt-2 text-sm font-medium text-gray-900">{status.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Order Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold mb-2">Job Information</h3>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Briefcase className="w-4 h-4 text-gray-500" />
                      <span>Software Engineer</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-500" />
                      <span>Amazon</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Order Information</h3>
                  <div className="space-y-1">
                    <p>Order ID: #12345</p>
                    <p>Date Placed: September 15, 2023</p>
                    <p>
                      Status: <Badge variant="outline">In Progress</Badge>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="flex justify-between items-center">
            <Button variant="outline">Contact Support</Button>
            <Button>View Application</Button>
          </div>
        </div>
      </main>
    </div>
  )
}

