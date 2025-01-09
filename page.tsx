import { DollarCard } from "./components/dollar-card"
import { dollarRates } from "./data"

export default function DollarRatesPage() {
  return (
    <div className="min-h-screen bg-black p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {dollarRates.map((rate) => (
          <DollarCard key={rate.id} data={rate} />
        ))}
      </div>
    </div>
  )
}

