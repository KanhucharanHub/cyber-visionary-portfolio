
import { configureStore } from '@reduxjs/toolkit';
import portfolioReducer from './portfolioSlice';
import themeReducer from './themeSlice';

export const store = configureStore({
  reducer: {
    portfolio: portfolioReducer,
    theme: themeReducer,
  },
});
