import { Button, Text } from "@radix-ui/themes"
import Navbar from "./components/Navbar"

export default function Home() {
	return (
		<>
			<Navbar />
			<Text>Hello from Radix Themes :)</Text>
			<Button>Lets go</Button>
		</>
	)
}
