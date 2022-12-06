import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from 'store';
import dataDaily from './apiDataDaily.json';
const apiUrl = 'https://api.covid19api.com/total/country';

//https://covid19api.com/#subscribe
type DATADAILY = typeof dataDaily;

type covidState = {
  daily: DATADAILY;
  country: string;
};

const initialState: covidState = {
  daily: dataDaily,
  country: 'Japan',
};

export const fetchAsyncGetDaily = createAsyncThunk(
  'covid/getDaily',
  async (country: string) => {
    const { data } = await axios.get<DATADAILY>(`${apiUrl}/${country}`);
    return { data: data, country: country };
  }
);

const covidSlice = createSlice({
  name: 'covid',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGetDaily.fulfilled, (state, action) => {
      return {
        ...state,
        daily: action.payload.data,
        country: action.payload.country,
      };
    });
  },
});

export const selectDaily = (state: RootState) => state.Covid.daily;
export const selectCountry = (state: RootState) => state.Covid.country;

export default covidSlice.reducer;
