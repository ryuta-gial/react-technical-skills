import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CounterState = {
  counterNumber: number;
};

let initialState: CounterState = {
  counterNumber: 0,
};

const counterSlice = createSlice({
  name: 'Counter',
  initialState: initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.counterNumber = state.counterNumber + action.payload;
    },
    decrement(state, action: PayloadAction<number>) {
      state.counterNumber = state.counterNumber - action.payload;
    },
    logout: (state) => {},
  },
});

export const { increment, decrement, logout } = counterSlice.actions;
export const selectCount = (state: CounterState) => state.counterNumber;
export default counterSlice.reducer;
