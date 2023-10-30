import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchVacanciesId } from './getVacanciesIdAPI';

interface IVacanciesData {
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
    salary: number,
    currency: string,
}

interface IVacanciesState {
    data: IVacanciesData | undefined;
}

export const getVacanciesIdApi = createAsyncThunk(
    '@@vacanciesId/vacanciesId',
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

const initialState: IVacanciesState = {
    data: undefined,
};

const vacanciesIdSlice = createSlice({
    name: '@@vacanciesId',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getVacanciesIdApi.fulfilled, (state, action) => {
            state.data = action.payload;
        });
    },
});

export const vacanciesIdReducer = vacanciesIdSlice.reducer;

export const vacanciesIdSelect = (state: { vacanciesId: IVacanciesState }) => state.vacanciesId.data;
;
