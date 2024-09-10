'use client'

import { AppBar } from "@/components/app-bar"
import { ShoppingBag, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

const orders = [
  {
    id: 1,
    company: "Amazon",
    position: "Software Developer",
    date: "2023-05-15",
    status: "Completed",
    price: "₹5000",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    company: "Google",
    position: "Product Manager",
    date: "2023-05-10",
    status: "In Progress",
    price: "₹3000",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    company: "Microsoft",
    position: "Data Scientist",
    date: "2023-05-05",
    status: "Completed",
    price: "₹7000",
    logo: "/placeholder.svg?height=40&width=40",
  },
]

export function OrderHistoryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppBar />
      <main className="flex-1 py-12 px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold">Order History</h1>
          <div className="space-y-4">
            {orders.map((order) => (
              <Card key={order.id}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Avatar>
                      <AvatarImage src={order.logo} alt={`${order.company} logo`} />
                      <AvatarFallback>{order.company[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium">{order.company} - {order.position}</p>
                      <p className="text-sm text-gray-500">Ordered on: {order.date}</p>
                      <p className="text-sm text-gray-500">Status: {order.status}</p>
                      <p className="text-sm font-medium">Price: {order.price}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Link href={`/order/${order.id}`} passHref>
                        <Button size="sm" variant="outline">
                          <ShoppingBag className="h-4 w-4 mr-1" />
                          View Order
                        </Button>
                      </Link>
                      <Button size="sm" variant="outline">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Job Details
                      </Button>
                    </div>
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