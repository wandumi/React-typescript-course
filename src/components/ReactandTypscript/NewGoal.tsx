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
    className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg space-y-2"
  >
    <div className="flex flex-col">
      <label htmlFor="goal" className="text-lg text-black font-semibold mb-2">Your Goal</label>
      <input 
        id="goal" 
        type="text" 
        ref={goal} 
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 
                        focus:ring-blue-400 text-black"
        placeholder="Enter your goal"
      />
    </div>
    
    <div className="flex flex-col">
      <label htmlFor="summary" className="text-lg text-black font-semibold mb-2">Short Summary</label>
      <input 
        id="summary" 
        type="text" 
        ref={summary} 
        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 
                  focus:ring-blue-400 text-black"
        placeholder="Short summary of your goal"
      />
    </div>

    <div className="flex justify-center">
      <button 
        type="submit" 
        className="w-full px-6 py-2 bg-gray-600 text-white font-semibold rounded-lg 
                  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Add Goal
      </button>
    </div>
  </form>
}

export default NewGoal