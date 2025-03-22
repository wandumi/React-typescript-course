
import './App.css'
import Input from './Input'
import Button from './Button'
import Form, { type FormHandle }from './Form.tsx'
import { useRef } from 'react'

function App() {
  const customForm = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    const extractedData = data as {
      name: string;
      age: number;
      surname: string;
    };

    console.log(extractedData)
    customForm.current?.clear();
  }

  return (
    <>
      <main className="flex flex-col items-center justify-between min-h-screen bg-white m-5 ">
        <div className='bg-sky-900 p-10 w-full md:w-1/2 rounded-lg'>
          
          <Form onSave={handleSave} ref={customForm}>

            <Input type="text" id="name" name="name" label='Name' placeholder='Enter your name'></Input>
            
            <Input type="text" id="surname" name="surname" label='SurName' placeholder='Enter your surname'></Input>

            <Input type="number" id="age" name="age" label='Age' placeholder='Enter your age'></Input>
            
            <Button>Submit</Button>
          </Form>

        </div>
      </main>
    </>
  )
}

export default App
