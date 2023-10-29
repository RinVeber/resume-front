import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';

import { api, handleRequest } from '../api/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_BASE_ALL_RESUME_URL } from '../../utils/apiConstants';

export const getResume = createAsyncThunk(
  'resume/getResume',
  async (id, { rejectWithValue }) => {
    const request = api.get(API_BASE_ALL_RESUME_URL + `/${id}/`);
    return handleRequest(request, rejectWithValue);
  },
);

type ResumeStateType = {
  data: unknown;
  total: number;
  page: number;
  size: number;
  pages: number;
  status: 'init' | 'loading' | 'success' | 'error';
  error: string | undefined;
};

export type ResumeResponseType = {
  data: ResumeStateType;
  total: number;
  page: number;
  size: number;
  pages: number;
};

const initialState: ResumeStateType = {
  data: null,
  total: 0,
  page: 1,
  size: 1,
  pages: 0,
  status: 'init',
  error: undefined,
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<ResumeStateType>) => {
    builder
      .addCase(getResume.fulfilled, (state, action) => {
        state.status = 'success';

        // TODO: Как появится сваггер от беков, так опишем типы response от сервера
        state.data = action.payload;
      })
      .addCase(getResume.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getResume.rejected, (state) => {
        state.status = 'error';
        state.error = 'error';
      });
  },
});

export const { reducer: resumeReducer, actions: resumections } = resumeSlice;
