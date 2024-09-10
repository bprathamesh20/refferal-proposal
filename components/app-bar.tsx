import { Bell, Settings, ShoppingCart, ChevronDown, Coins } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

export function AppBar() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
      <Link href="/">
        <h1 className="text-2xl font-bold">Referr.</h1>
      </Link>
      <div className="flex items-center space-x-4">
        <nav className="hidden md:flex space-x-4">
          <a className="text-sm font-medium text-gray-600 hover:text-gray-900" href="#">
            Request Referrals
          </a>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
              Pricing
              <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Referral</DropdownMenuItem>
              <DropdownMenuItem>Packages</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/marketplace" passHref>
          <div className="flex items-center space-x-2 border rounded-full px-3 py-1 cursor-pointer hover:bg-gray-100 transition-colors">
            <Coins className="h-4 w-4 text-yellow-500" />
            <span className="text-sm font-medium">1000</span>
          </div>
        </Link>
        <Link href="/notifications" passHref>
          <Button variant="ghost" size="icon" >
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
        </Link>
        <Link href="/order-history" passHref>
          <Button variant="ghost" size="icon" >
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Order History</span>
          </Button>
        </Link>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
          <span className="sr-only">Settings</span>
        </Button>
        <Button variant="outline">Sign in</Button>
        <Button>Sign up</Button>
      </div>
    </header>
  )
}
