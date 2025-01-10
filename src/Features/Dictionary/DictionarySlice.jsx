import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dictionaryWord:
  [
  
      { word: "React", meaning: "A JavaScript library for building user interfaces." },
  
      { word: "Component", meaning: "A reusable building block in React." },
  
      { word: "State", meaning: "An object that stores data for a component." }
  
  ]
  
}

export const dictionarySlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
})


export default dictionarySlice.reducer