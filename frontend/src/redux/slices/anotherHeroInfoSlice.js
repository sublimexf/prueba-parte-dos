import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import Api from "../../api"


const initialState = {
    publishers: [],
    genders: [],
    alignments: []
}

export const FetchPublishers = createAsyncThunk('Publisher/fetchPublisher', async () => {
    return await Api.getPublishers()
})

export const FetchGenders = createAsyncThunk('Gender/fetchGender', async () => {
    return await Api.getGenders()
})

export const FetchAlignments = createAsyncThunk('Alignment/fetchAlignment', async () => {
    return await Api.getAlignments()
})


export const getInfoSlice = createSlice({
    name: 'getInfo',
    initialState,
    extraReducers: builder => {
        builder.addCase(FetchPublishers.fulfilled, (state, action) => {
            state.publishers = action.payload
        })
        builder.addCase(FetchGenders.fulfilled, (state, action) => {
            state.genders = action.payload
        })
        builder.addCase(FetchAlignments.fulfilled, (state, action) => {
            state.alignments = action.payload
        })
    },
    reducers: {}
})

export default getInfoSlice.reducer