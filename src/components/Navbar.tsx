import { auth } from "@clerk/nextjs/server"

import { Button } from "@/components/ui/button"
import { SignInButton, UserButton } from "@clerk/nextjs"
import { DollarSign } from "lucide-react"

const Navbar = async () => {
	const { userId } = await auth()

	return (
		<nav className="flex items-center justify-between py-4 max-w-7xl mx-auto">
			<div className="flex items-center space-x-2">
				<DollarSign className="h-8 w-8 text-emerald-600" />
				<span className="text-xl font-bold text-slate-900">
					FinanceTracker
				</span>
			</div>
			<div className="flex items-center space-x-4">
				{userId ? (
					<UserButton/>
				) : (
					<SignInButton>
						<Button className="font-semibold">Sign in</Button>
					</SignInButton>
				)}
			</div>
		</nav>
	)
}

export default Navbar
