import { Flex, Heading } from "@radix-ui/themes"

const Navbar = () => {
	return (
		<nav>
			<Flex justify="between">
				{/* Left Part of Nav */}
				<Heading>FinanceTracker</Heading>

				{/* Right Part of Nav */}
				<div></div>
			</Flex>
		</nav>
	)
}

export default Navbar
