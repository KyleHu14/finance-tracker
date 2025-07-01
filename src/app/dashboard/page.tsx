import CreateTransactionButton from "@/components/CreateTransactionButton/CreateTransactionButton"
import PageLayout from "@/components/Layouts/PageLayout/PageLayout"

export default function Dashboard() {
	return (
		<PageLayout>
			<CreateTransactionButton text="Add Transaction" />
		</PageLayout>
	)
}
