import { createSlice } from "@reduxjs/toolkit"

const initialState = { show: "" }

export const responseSlice = createSlice({
    name: 'response',
    initialState,
    reducers: {
        showResponse: (state, action) => {
            state.show = action.payload
        }
    }
})

export const { showResponse } = responseSlice.actions
export default responseSlice.reducer