
import './App.css'
import Input from './components/NewProject/Input'

function App() {


  return (
    <>
      <main className="flex flex-col items-center justify-between min-h-screen bg-white m-5 ">
        <div className='bg-sky-900 p-10 w-full md:w-1/2 rounded-lg'>

          <Input type="text" id="name" label='Name' placeholder='Enter your name'></Input>
          
          <Input type="text" id="surname" label='SurName' placeholder='Enter your surname'></Input>

          <Input type="number" id="age" label='Age' placeholder='Enter your age'></Input>
          
        </div>
      </main>
    </>
  )
}

export default App
