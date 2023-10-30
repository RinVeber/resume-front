import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchVacanciesId } from './getVacanciesIdAPI';

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

export const getVacanciesIdApi = createAsyncThunk(
    '@@vacancies/vacancies',
    async (
        arg: {id: number},
        { fulfillWithValue, rejectWithValue },
    ) => {
        try {
            const { id } = arg;
            const response = await fetchVacanciesId(id);
            return fulfillWithValue(response);
        } catch (error: unknown) {
            return rejectWithValue(error);
        }
    },
);

const initialState: IСategoriesState = {
    data: [],
};

const vacanciesIdSlice = createSlice({
    name: '@@vacancies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getVacanciesIdApi.fulfilled, (state, action) => {
            state.data = action.payload;
        });
    },
});

export const vacanciesIdReducer = vacanciesIdSlice.reducer;

export const vacanciesIdSelect = (state: { vacancies: IСategoriesState }) => state.vacancies.data;
;
