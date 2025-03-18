import { type ReactNode } from 'react'

type InfoBoxProps = {
    mode: 'hint' | 'warning';
    severity?: 'low' | 'medium' | 'high';
    children: ReactNode;
}

function InfoBox({ mode, children }: InfoBoxProps) {
    if (mode === 'hint') {
        return (
            <aside className="border-amber-500 border mt-5 text-center p-4 rounded-lg">
                <h2 className="font-bold text-amber-600">Hint</h2>
                <p className='text-amber-600'>{children}</p>
            </aside>
        )
    } 
    
    return (
        <aside className="bg-amber-300 text-black p-4 rounded-lg mt-5">
            <h2 className="font-bold">Warning</h2>
            <p>{children}</p>
        </aside>
    )
}

export default InfoBox