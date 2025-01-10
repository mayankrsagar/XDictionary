import { configureStore } from '@reduxjs/toolkit';

import dictionaryReducer from '../Features/Dictionary/DictionarySlice';

export const store = configureStore({
  reducer: {
    dictionary:dictionaryReducer,
  },
})