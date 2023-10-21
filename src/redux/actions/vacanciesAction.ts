import { api, handleRequest } from '../api/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_BASE_ALL_VACANCIES_URL } from '../../utils/apiConstants';

export const getVacancies = createAsyncThunk<{
  rejectValue: string;
}>('ingredients/getIngredients', async (_, { rejectWithValue }) => {
  const request = api.get(API_BASE_ALL_VACANCIES_URL);
  return handleRequest(request, rejectWithValue);
});
