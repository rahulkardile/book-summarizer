// lib/store.ts
import { configureStore } from '@reduxjs/toolkit';
import navToggle from './features/navSlice';

export const store = configureStore({
  reducer: {
    theme: navToggle,
  },
});

// Types for hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
