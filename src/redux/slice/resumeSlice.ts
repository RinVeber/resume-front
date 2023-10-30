import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';

import { api, handleRequest } from '../api/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_BASE_ALL_RESUME_URL } from '../../utils/apiConstants';

export const getResume = createAsyncThunk(
  'resume/getResume',
  async (id :(string | undefined), { rejectWithValue }) => {
    const request = api.get(API_BASE_ALL_RESUME_URL + `/${id}/`);
    return handleRequest(request, rejectWithValue);
  },
);

type ResumeStateType = {
  data: ResumeResponseType | null;
  cv: string | null;
  total: number;
  page: number;
  size: number;
  pages: number;
  status: 'init' | 'loading' | 'success' | 'error';
  error: string | undefined;
};

export type ResumeResponseType = {
  id: number;
  skills: [
    {
      name: string;
    },
  ];
  first_name: string,
  last_name: string,
  activities: number;
  birthdate: string;
  brief: string;
  photo: string;
  telegram: string;
  phone: string;
  location: string;
  cv: string;
  portfolio: string;
  education: string;
  education_year: number;
  course: string;
  course_year: number;
  seeking_for: boolean;
  position: string;
  level: string;
  experience: string;
  format: string;
  salary: number;
  user: number;
};

const initialState: ResumeStateType = {
  data: null,
  cv: null,
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
