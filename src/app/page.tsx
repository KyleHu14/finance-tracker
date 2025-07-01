import {
	ArrowRight,
	BarChart3,
	DollarSign,
	PieChart,
	TrendingUp,
} from "lucide-react"
import Link from "next/link"
import PageLayout from "../components/PageLayout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
	return (
		<PageLayout>
			<main className="max-w-7xl mx-auto px-6 py-16">
				<div className="text-center space-y-8">
					<div className="space-y-4">
						<h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
							Take Control of Your
							<span className="text-emerald-600 block">
								Financial Future
							</span>
						</h1>
						<p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
							Track expenses, monitor budgets, and achieve your
							financial goals with our simple yet powerful finance
							tracking application.
						</p>
					</div>

					{/* CTA Buttons */}
					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
						<Button className="text-lg px-8 py-3">
							Start Tracking Free
							<ArrowRight className="ml-2 h-5 w-5" />
						</Button>
					</div>
				</div>

				{/* Feature Cards */}
				<div className="grid md:grid-cols-3 gap-8 mt-20">
					<Card className="border-slate-200 hover:shadow-lg transition-shadow">
						<CardContent className="p-6 text-center space-y-4">
							<div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto">
								<BarChart3 className="h-6 w-6 text-emerald-600" />
							</div>
							<h3 className="text-xl font-semibold text-slate-900">
								Expense Tracking
							</h3>
							<p className="text-slate-600">
								Effortlessly categorize and monitor your daily
								expenses with intuitive tracking tools.
							</p>
						</CardContent>
					</Card>

					<Card className="border-slate-200 hover:shadow-lg transition-shadow">
						<CardContent className="p-6 text-center space-y-4">
							<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
								<PieChart className="h-6 w-6 text-blue-600" />
							</div>
							<h3 className="text-xl font-semibold text-slate-900">
								Budget Planning
							</h3>
							<p className="text-slate-600">
								Set realistic budgets and receive alerts when
								youre approaching your limits.
							</p>
						</CardContent>
					</Card>

					<Card className="border-slate-200 hover:shadow-lg transition-shadow">
						<CardContent className="p-6 text-center space-y-4">
							<div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto">
								<TrendingUp className="h-6 w-6 text-purple-600" />
							</div>
							<h3 className="text-xl font-semibold text-slate-900">
								Financial Insights
							</h3>
							<p className="text-slate-600">
								Get detailed reports and insights to make
								informed financial decisions.
							</p>
						</CardContent>
					</Card>
				</div>

				{/* Final CTA */}
				<div className="text-center mt-20 space-y-6">
					<h2 className="text-3xl font-bold text-slate-900">
						Ready to Transform Your Finances?
					</h2>
					<p className="text-lg text-slate-600 max-w-xl mx-auto">
						Join thousands of users who have already taken control
						of their financial future.
					</p>
					<Button className="text-lg px-8 py-3">
						Get Started Today
						<ArrowRight className="ml-2 h-5 w-5" />
					</Button>
				</div>
			</main>

			{/* Footer */}
			<footer className="border-t border-slate-200 mt-20">
				<div className="max-w-7xl mx-auto px-6 py-8">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
						<div className="flex items-center space-x-2">
							<DollarSign className="h-6 w-6 text-emerald-600" />
							<span className="font-semibold text-slate-900">
								FinanceTracker
							</span>
						</div>
						<div className="flex space-x-6 text-sm text-slate-600">
							<Link href="#" className="hover:text-slate-900">
								Privacy Policy
							</Link>
							<Link href="#" className="hover:text-slate-900">
								Terms of Service
							</Link>
							<Link href="#" className="hover:text-slate-900">
								Contact
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</PageLayout>
	)
}
