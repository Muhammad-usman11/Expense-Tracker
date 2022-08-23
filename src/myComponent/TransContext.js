import { createContext } from "react"


const initialTransaction = [
    {amount: 500 , desc:"Cash"},
    {amount: -40 , desc:"Books"},
    {amount: -200 , desc:"Camera"}
]

export const transactionContext = createContext(initialTransaction)



