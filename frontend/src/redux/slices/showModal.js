import { createSlice } from "@reduxjs/toolkit"

const initialState = { show: false }

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        toggleShow: (state, action) => {
            state.show = !state.show
        }
    }
})

export const { toggleShow } = modalSlice.actions
export default modalSlice.reducer