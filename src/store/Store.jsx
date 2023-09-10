import {configureStore} from '@reduxjs/toolkit'
import { setNCard } from './reducer/Info'  

const store = configureStore({
    reducer: {
        setCard : setNCard
    }
})
export {store}