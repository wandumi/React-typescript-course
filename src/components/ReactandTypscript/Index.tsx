
import './App.css'
import Header from './Header'
import CourseGoalList from './CourseGoalList'
import NewGoal from './NewGoal'
import svg from './assets/react.svg'
import { useState } from 'react'

type CourseGoal = {
  title: string,
  description: string,
  id: number
}

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleAddGoal = (goal: string, summary: string) => {
    setGoals(prevGoals => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary
      }
      return [...prevGoals, newGoal]
    })
  } 

  function handleDeleteGoal(id: number){
    setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id))
  }

  return (
    <>
      <main className="flex items-center justify-center min-h-screen bg-white m-10">
        <div className="bg-black p-8 rounded-lg shadow-xl w-full max-w-2xl text-white">
          <Header image={{ src: svg, alt: "list of goals" }}>
            <h1 className="text-center text-2xl font-semibold">Your Course Goals</h1>
          </Header>

          <NewGoal onAddGoal={handleAddGoal} />
        
          {goals.length > 0 && <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />}

        </div>
      </main>
    </>
  )
}

export default App
