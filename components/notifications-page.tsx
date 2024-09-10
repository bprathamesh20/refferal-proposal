'use client'

import { AppBar } from "@/components/app-bar"
import { Bell, Settings, ShoppingCart, ChevronDown, Check, X, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

const notifications = [
  {
    id: 1,
    type: "referral",
    message: "John Doe at Amazon referred you!",
    time: "2 hours ago",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    type: "request",
    message: "Arvind needs a referral for SDE Position at Amazon",
    time: "1 day ago",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    type: "referral",
    message: "Sarah Smith at Google referred you!",
    time: "3 days ago",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export function NotificationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppBar />
      <main className="flex-1 py-12 px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold">Notifications</h1>
          <div className="space-y-4">
            {notifications.map((notification) => (
              <Card key={notification.id}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Avatar>
                      <AvatarImage src={notification.avatar} alt="Avatar" />
                      <AvatarFallback>{notification.message[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium">{notification.message}</p>
                      <p className="text-sm text-gray-500">{notification.time}</p>
                    </div>
                    {notification.type === "request" && (
                      <div className="flex space-x-2 md:flex-row flex-col">
                        <Button size="sm" variant="outline">
                          <Check className="h-4 w-4 mr-1" />
                          Accept
                        </Button>
                        <Button size="sm" variant="outline">
                          <X className="h-4 w-4 mr-1" />
                          Reject
                        </Button>
                        <Link href={`/referral-request/${notification.id}`} passHref>
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                        </Link>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
