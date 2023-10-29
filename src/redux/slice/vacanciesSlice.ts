import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
// import { getVacancies } from '../actions/vacanciesAction';

type VacanciesStateType = {
  data: unknown;
  total: number;
  page: number;
  size: number;
  pages: number;
  status: 'init' | 'loading' | 'success' | 'error';
  error: string | undefined;
};

import { api, handleRequest } from '../api/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_BASE_ALL_VACANCIES_URL } from '../../utils/apiConstants';

export const getVacancies = createAsyncThunk('vacancies/getVacancies', async (_, { rejectWithValue }) => {
  const request = api.get(API_BASE_ALL_VACANCIES_URL);
  return handleRequest(request, rejectWithValue);
});


export type VacanciesResponseType = {
  data: VacanciesStateType;
  total: number;
  page: number;
  size: number;
  pages: number;
};

const initialState: VacanciesStateType = {
  data: null,
  total: 0,
  page: 1,
  size: 1,
  pages: 0,
  status: 'init',
  error: undefined,
};

const vacanciesSlice = createSlice({
  name: 'vacancies',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<VacanciesStateType>) => {
    builder
      .addCase(getVacancies.fulfilled, (state, action) => {
        state.status = 'success';

        // TODO: Как появится сваггер от беков, так опишем типы response от сервера
        state.data = action.payload.data;
      })
      .addCase(getVacancies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getVacancies.rejected, (state) => {
        state.status = 'error';
        state.error = 'error';
      });
  },
});

export const { reducer: vacanciesReducer, actions: vacanciesActions } =
  vacanciesSlice;
