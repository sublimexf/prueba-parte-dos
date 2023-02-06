import { configureStore } from "@reduxjs/toolkit"
import heroesSlice from "./heroesSlice"

export const store = configureStore({
    reducer: {
        heroes: heroesSlice
    }
})

export default store

