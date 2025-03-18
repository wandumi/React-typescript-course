import { useRef, type FormEvent } from 'react'

type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void
}

function NewGoal({onAddGoal}: NewGoalProps) {

    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null)

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const enteredGoal = goal.current!.value;
        const enteredSummary = goal.current!.value;

        event.currentTarget.reset();
        onAddGoal(enteredGoal, enteredSummary)

    }

    return  <form 
    onSubmit={handleSubmit} 
    className="max-w-2xl mx-auto rounded-sm space-y-2"
  >
    <div className="flex flex-col">
      <label htmlFor="goal" className="text-sm text-white">Your Goal</label>
      <input 
        id="goal" 
        type="text" 
        ref={goal} 
                className="p-2 border border-gray-300  bg-gray-300 rounded-sm focus:outline-none focus:ring-2 
                        focus:ring-blue-100 text-black mb-4"
        placeholder="Enter your goal"
      />
    </div>
    
    <div className="flex flex-col">
      <label htmlFor="summary" className="text-sm text-white">Short Summary</label>
      <input 
        id="summary" 
        type="text" 
        ref={summary} 
        className="p-2 border border-gray-300 bg-gray-300 rounded-sm focus:outline-none focus:ring-2 
                  focus:ring-blue-100 text-black mb-4"
        placeholder="Short summary of your goal"
      />
    </div>

    <div className="flex justify-center">
      <button 
        type="submit" 
        className="w-full px-6 py-2 bg-yellow-200 text-black font-semibold rounded-sm 
                  hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Add Goal
      </button>
    </div>
  </form>
}

export default NewGoal