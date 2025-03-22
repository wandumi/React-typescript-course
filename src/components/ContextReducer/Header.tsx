

import { useTimersContext } from "../../store/timers-context.tsx"
import Button from '../NewProject/Button.tsx'

function Header() {
  const timersCtx = useTimersContext();

  return (
    <header>
      <h1>React Timer</h1>
      <Button>{ timersCtx.isRunning ? 'Stop' : 'Start'}</Button>
    </header>
  )
}

export default Header