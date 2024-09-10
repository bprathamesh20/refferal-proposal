import { AppBar } from "@/components/app-bar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Coins } from "lucide-react"

const gifts = [
  { id: 1, name: "Amazon Gift Card", cost: 500, description: "$50 Amazon Gift Card" },
  { id: 2, name: "Starbucks Gift Card", cost: 200, description: "$20 Starbucks Gift Card" },
  { id: 3, name: "Referr Premium", cost: 1000, description: "1 month of Referr Premium" },
  { id: 4, name: "Resume Review", cost: 300, description: "Professional resume review" },
]

export default function MarketplacePage() {
  return (
    <div>
        <AppBar/>
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Marketplace</h1>
      <p className="mb-8">Redeem your coins for exciting gifts and gift cards!</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gifts.map((gift) => (
          <Card key={gift.id}>
            <CardHeader>
              <CardTitle>{gift.name}</CardTitle>
              <CardDescription>{gift.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Coins className="h-5 w-5 text-yellow-500" />
                <span className="text-lg font-semibold">{gift.cost}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Redeem</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
    </div>
  )
}