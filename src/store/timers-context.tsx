import { createContext, ReactNode, useContext, useReducer } from 'react'

type Timer = {
    name: string;
    duration: number;
}

type TimersState = {
    isRunning: boolean;
    timers: Timer[];
}

const initialState: TimersState = {
    isRunning: true,
    timers: []
}

type TimersContextValue = TimersState & {
    addTimer: (timerData: Timer) => void ,
    startTimer: () => void,
    stopTimers: () => void,
}

export const TimersContext = createContext<TimersContextValue | null>(null);

type TimersContextProviderProps = {
    children: ReactNode;
}

export function useTimersContext() {
    
    const timersCtx = useContext(TimersState)

    if (timersCtx === null) {
        throw new Error('TimersContext is null - that should not be the case!')
    }

    return timersCtx;
}
type Action = {
    type: 'ADD_TIMER' | 'START_TIMERS' | 'STOP_TIMERS';
    paylaod?: Timer
};

function timersReducer(state: TimersState, action: Action): TimersState {
    if (action.type === 'START_TIMERS') {
        return {
            ...state,
            isRunning: true
        }
    }

    if (action.type === 'STOP_TIMERS') {
        return {
            ...state,
            isRunning: false
        }
    }

    if (action.type === 'ADD_TIMERS') {
        return {
            ...state,
            timers: [

            ]
                
            
        }
    }
}

export default function TimersContextProvider({ children }: TimersContextProviderProps) {
    const [timersState, dispatch] = useReducer(timersReducer, initialState);

    const ctx: TimersContextValue = {
        timers: [],
        isRunning: false,
        addTimer(timerData) { },
        setTimers() { },
        stopTimer(){}
    }

    return <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
}