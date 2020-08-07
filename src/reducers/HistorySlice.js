import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    data: [],
    status: 'idle',
    error: null
}

export const fetchHistory = createAsyncThunk('history/fetchHistory', async () => {
    const response = await axios.get(
        'https://run.mocky.io/v3/e2f08553-f21e-4c08-8386-2d51d03a019c'
    )
    return response.data;

})

export const historySlice = createSlice({
    name: 'history', 
    initialState,
    reducers: {
        historyAdded: (state, action) => { state.data.push(action.payload) },
        historyReset: state => {state.data = initialState}
    },
    extraReducers:{
        [fetchHistory.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchHistory.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.data = state.data.concat(action.payload)
        },
        [fetchHistory.rejected]: (state, action) => {
            state.status = 'error',
            state.error = action.error.message
        }
    }
})

export default historySlice.reducer;
export const { historyAdded, historyReset } = historySlice.actions;