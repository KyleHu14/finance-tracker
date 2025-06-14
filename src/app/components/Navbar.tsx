import { Button } from "@/components/ui/button"
import { DollarSign } from "lucide-react"

const Navbar = () => {
	return (
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <DollarSign className="h-8 w-8 text-emerald-600" />
          <span className="text-xl font-bold text-slate-900">FinanceTracker</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-slate-600 hover:text-slate-900">
            About
          </Button>
          <Button variant="ghost" className="text-slate-600 hover:text-slate-900">
            Features
          </Button>
          <Button variant="outline" className="border-slate-300">
            Sign In
          </Button>
          <Button className="bg-primary">Get Started</Button>
        </div>
      </nav>
	)
}

export default Navbar
