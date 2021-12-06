import { configureStore } from '@reduxjs/toolkit';
import homeSlice from './components/homeSlice';

export const store = configureStore({
    reducer: {
        home: homeSlice
    },
});