import { type ReactNode } from 'react'

type HeaderProps = {
    image: {
        src: string,
        alt: string
    },
    children: ReactNode
}

function Header({image, children}: HeaderProps) {
    return (
        <header className="flex items-center justify-between text-white mb-6">
            <div className="flex-shrink-0">
                <img {...image} className="h-24 w-24 object-contain" />
            </div>
            <div className="flex-grow text-left">{children}</div>
        </header>
  )
}

export default Header