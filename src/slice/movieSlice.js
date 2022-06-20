import { createSlice } from '@reduxjs/toolkit'

const movieSlice = createSlice({
  name: 'movie',
  initialState: [],
  reducers: {
    movieAdded(state, action) {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      })
    },
    movieToggled(state, action) {
      const todo = state.find((movie) => movie.id === action.payload)
      movie.completed = !movie.completed
    },
  },
})

export const { movieAdded, movieToggled } = movieSlice.actions
export default movieSlice.reducer
