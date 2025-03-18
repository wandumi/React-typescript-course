import { ComponentPropsWithoutRef } from "react";

type InputProps = {
    label: string;
    id: string;
} & ComponentPropsWithoutRef<'input'>

function Input({label, id, ...props }:InputProps) {
  return (
    
    <div className="flex flex-col">
        <label htmlFor={id} className="text-sm text-white mb-2">{ label }</label>
        <input 
            id={id}
            className="p-2 border border-gray-300 bg-gray-300 rounded-sm focus:outline-none focus:ring-2 
                    focus:ring-blue-100 text-black mb-4 w-full"
            {...props}
        />
    </div>
  )
}

export default Input