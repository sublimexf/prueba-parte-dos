import { createSlice } from "@reduxjs/toolkit"

const initialState = { hero: {} }

export const heroSlice = createSlice({
    name: 'hero',
    initialState,
    reducers: {
        setHero: (state, action) => {
            state.hero = action.payload
        },
        updateHValue: (state, action) => {
            state.hero = action.payload
        },
        cleanHero: (state, action) => {
            state.hero = {}
        }
    }
})

export const { setHero, updateHValue, cleanHero } = heroSlice.actions
export default heroSlice.reducer