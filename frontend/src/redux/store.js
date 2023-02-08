import { configureStore } from "@reduxjs/toolkit"
import getInfoSlice from "./slices/anotherHeroInfoSlice"
import heroesSlice from "./slices/heroesSlice"
import heroSlice from "./slices/heroSlice"
import modalSlice from "./slices/showModal"
import responseSlice from "./slices/showResponse"


export const store = configureStore({
    reducer: {
        heroes: heroesSlice,
        hero: heroSlice,
        modal: modalSlice,
        getInfo: getInfoSlice,
        response: responseSlice
    }
})

export default store

