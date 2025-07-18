import './App.css'
import { CoffeeMachine } from './components/CoffeeMachine';


export default function App() {
  // We define our coffee machines here.
  // This is where you would "create" an instance of a coffee machine.

  // A basic coffee machine without a grinder.
  const basicCoffeeMachine = {
    name: "Basic Espresso Machine",
    features: {
      // No grinder for this one
    }
  };

  // A premium coffee machine that includes a grinder.
  const premiumCoffeeMachine = {
    name: "Premium Bean-to-Cup",
    features: {
      grinder: true // This machine has a grinder
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">Coffee Machine Inventory</h1>
          <p className="text-lg text-gray-600 mt-2">A demonstration of a flexible component system.</p>
        </header>

        <div className="flex flex-wrap justify-center gap-8">
          {/* Creating the first coffee machine instance */}
          <CoffeeMachine
            name={basicCoffeeMachine.name}
            features={basicCoffeeMachine.features}
          />

          {/* Creating the second coffee machine instance */}
          <CoffeeMachine
            name={premiumCoffeeMachine.name}
            features={premiumCoffeeMachine.features}
          />
        </div>
      </div>
    </div>
  );
}
