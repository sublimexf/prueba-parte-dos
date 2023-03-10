import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import Api from "../../api"


const initialState = {
    heroes: [],
    loading: 'idle'
}

export const FetchHeroes = createAsyncThunk('Heroes/fetchHeroes', async (data) => {
    if (data) {
        const url = data[0]
        const value = data[1]
        return await Api.getBy(url, value)
    }
    return await Api.getHeroes()
})

export const getHeroesSlice = createSlice({
    name: 'getHeroes',
    initialState,
    extraReducers: builder => {
        builder.addCase(FetchHeroes.pending, state => {
            state.loading = 'requested'
            state.heroes = []
        })
        builder.addCase(FetchHeroes.fulfilled, (state, action) => {
            state.loading = 'succeeded'
            state.heroes = action.payload
        })
        builder.addCase(FetchHeroes, state => {
            state.loading = 'failed'
        })
    },
    reducers: {

    }
})

export default getHeroesSlice.reducer;