import { combineReducers, configureStore } from '@reduxjs/toolkit';
import sapperReducer from './sapperSlice';


const rootReducer = combineReducers({ sapper: sapperReducer});

export const store = configureStore({
	reducer: rootReducer
	
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
