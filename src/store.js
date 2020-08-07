import { configureStore } from '@reduxjs/toolkit';
import HistoryReducer from './reducers/HistorySlice'

export default configureStore({
    reducer: {
        history: HistoryReducer
    }
})