import Navbar from "./Navbar"

interface PageLayoutProps {
    children: React.ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
	return (
		<main className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
            <div className="max-w-7xl mx-auto px-6 ">
                <Navbar />
                {children}
            </div>
		</main>
	)
}