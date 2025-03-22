import { forwardRef, ComponentPropsWithoutRef } from "react";

type InputProps = {
    label: string;
    id: string;
} & ComponentPropsWithoutRef<'input'>

const Input = forwardRef<HTMLInputElement, InputProps>(function Input({label, id, ...props }, ref) {
  return (
    
    <div className="flex flex-col">
        <label htmlFor={id} className="text-sm text-white mb-2">{ label }</label>
        <input 
            id={id}
            className="p-2 border border-gray-300 bg-gray-300 rounded-sm focus:outline-none focus:ring-2 
                    focus:ring-blue-100 text-black mb-4 w-full"
            {...props}
            ref={ref}
            name={id}
        />
    </div>
  )
})

export default Input