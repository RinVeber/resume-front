import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { ResumeResponseType } from './resumeSlice';
import { api, handleRequest } from '../api/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_BASE_ALL_VACANCIES_URL } from '../../utils/apiConstants';

type VacanciesGroupStateType = {
    data: VacanciesResponseType | null;
    total: number;
    page: number;
    size: number;
    pages: number;
    status: 'init' | 'loading' | 'success' | 'error';
    error: string | undefined;
  };

export type VacanciesResponseType = {
    id: number
    tags: [
        {
            name: string
        }
    ]
    skills: [
        {
            name: string
        }
    ]
    company_name: string
    company_info: string
    location: string
    pub_date: string
    name: string
    experience: string
    description: string
    responsibilities: string
    form: string
    reject_letter: string
    additional_info: string
    is_active: boolean
    company: number

    response: ResumeResponseType[],
    favourites: ResumeResponseType[],
    invitations: ResumeResponseType[],
};

const initialState: VacanciesGroupStateType = {
  data: null,
  total: 0,
  page: 1,
  size: 1,
  pages: 0,
  status: 'init',
  error: undefined,
};

export const getVacanciesGroup = createAsyncThunk('vacanciesGroup/getVacanciesGroup', async (id:(number | undefined), { rejectWithValue }) => {
    const request = api.get(`${API_BASE_ALL_VACANCIES_URL}${id}/groups/`);
    return handleRequest(request, rejectWithValue);
  });

const vacanciesGroupSlice = createSlice({
  name: 'vacanciesGroup',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<VacanciesGroupStateType>) => {
    builder
      .addCase(getVacanciesGroup.fulfilled, (state, action) => {
        state.status = 'success';
        state.data = action.payload;
      })
      .addCase(getVacanciesGroup.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getVacanciesGroup.rejected, (state) => {
        state.status = 'error';
        state.error = 'error';
      });
  },
});

export const { reducer: vacanciesGroupReducer, actions: vacanciesGroupActions } =
  vacanciesGroupSlice;
