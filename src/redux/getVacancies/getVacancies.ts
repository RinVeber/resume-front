import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchVacancies } from './getVacanciesAPI';

interface IСategoriesData {
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

interface IСategoriesState {
    data: IСategoriesData[];
}

export const getVacanciesApi = createAsyncThunk(
    '@@vacancies/vacancies',
    async (
        _,
        { fulfillWithValue, rejectWithValue },
    ) => {
        try {
            const response = await fetchVacancies();
            return fulfillWithValue(response);
        } catch (error: unknown) {
            return rejectWithValue(error);
        }
    },
);

const initialState: IСategoriesState = {
    data: [],
};

const vacanciesSlice = createSlice({
    name: '@@vacancies',
    initialState,
    reducers: {
		clearState: () => initialState,
	},
    extraReducers: (builder) => {
        builder.addCase(getVacanciesApi.fulfilled, (state, action) => {
            state.data = action.payload;
        });
    },
});

export const vacanciesReducer = vacanciesSlice.reducer;

export const vacanciesSelect = (state: { vacancies: IСategoriesState }) => state.vacancies.data;

export const { clearState } = vacanciesSlice.actions;
