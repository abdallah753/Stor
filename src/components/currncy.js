import { createContext } from "react"

const CURRNCY_FORMAT = new Intl.NumberFormat(undefined ,{
    currency:'USD',
    style: 'currency',
})

const formatCurrency = (number) => {
    return CURRNCY_FORMAT.format(number)
}

export let Context = createContext()
export default formatCurrency