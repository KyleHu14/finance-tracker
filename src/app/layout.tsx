import { type Metadata } from "next"
import { ClerkProvider } from "@clerk/nextjs"
import { Geist, Geist_Mono } from "next/font/google"


import "./globals.css"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "Finance Tracker",
	description: "Made by Kyle Hu",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ClerkProvider afterSignOutUrl="/">
			<html lang="en">
				<body
					className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
					{children}
				</body>
			</html>
		</ClerkProvider>
	)
}
