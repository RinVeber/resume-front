import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchVacanciesPost } from './postVacanciesAPI';

export interface IVacanciesData {
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
}

export const postVacanciesApi = createAsyncThunk(
    '@@vacanciesPost/vacanciesPost',
    async (
        arg: {data: object},
        { fulfillWithValue, rejectWithValue },
    ) => {
        try {
            const { data } = arg;
            const response = await fetchVacanciesPost(data);
            const json = await response.json();
            return fulfillWithValue(json);
        } catch (error: unknown) {
            return rejectWithValue(error);
        }
    },
);

const initialState = {
    data: {},
};

const vacanciesPostSlice = createSlice({
    name: '@@vacanciesPost',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(postVacanciesApi.fulfilled, (state, action) => {
            state.data = action.payload;
        });
    },
});

export const vacanciesPostReducer = vacanciesPostSlice.reducer;
;
