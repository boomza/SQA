// This is the main component for a single coffee machine.
// It takes 'name' and 'features' as props.

import { BrewingUnit } from './BrewingUnit';
import { Grinder } from './Grinder';

// 'features' is an object containing the optional components.
export const CoffeeMachine = (props: TCoffeeMachineParams) => {
  return (
    <div className="bg-white border border-gray-300 rounded-xl shadow-md p-6 w-full max-w-sm transition-transform hover:scale-105 duration-300">
      <h3 className="text-xl font-bold text-gray-800 mb-4">{props.name}</h3>
      <div className="space-y-3">
        {/* Every machine has a brewing unit */}
        <BrewingUnit />

        {/* Conditionally render the grinder if it exists in features */}
        {props.features.grinder && <Grinder />}

        {/* This is where you could add future modules like a WiFi component */}
        {/* {features.wifi && <WifiModule />} */}
      </div>
    </div>
  );
};

type TCoffeeMachineParams = {
  name: string,
  features: {
    grinder?: boolean
  }
}
