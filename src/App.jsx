import { useState } from "react";
import { PlusIcon, MinusIcon, ArrowPathIcon } from "@heroicons/react/24/solid";

function App() {
  const {count, increment, decrement, reset} = useCounter(0, 1);

  return (
    <main className="w-20 mx-auto my-60">
      <div className="my-4 text-center py-2 text-xl font-medium text-gray-900 bg-gray-100 border-t border-b border-gray-200">{count}</div>      
      <div className="flex justify-center rounded-md" role="group">
        <button onClick={decrement} type="button" className="rounded-s-lg">
          <MinusIcon className="h-6 w-6" />
        </button>
        <button onClick={reset} type="button" className=""><ArrowPathIcon className="h-6 w-6" /></button>
        <button onClick={increment} type="button" className="rounded-e-lg">
          <PlusIcon className="h-6 w-6" />
        </button>
      </div>
    </main>
  )
}
export default App;

// Custom Hook
function useCounter(initialValue, steps) {
  const [count, setCount] = useState(initialValue);

  return {
    count,
    increment: () => setCount(count + steps),
    decrement: () => setCount(count > 0 ? count - steps : count),
    reset: () => setCount(initialValue)
  }
}