import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
// import { vacanciesReducer } from './slice/vacanciesSlice';
import { resumeReducer } from './slice/resumeSlice';
import { vacanciesReducer } from './getVacancies/getVacancies';
import { vacanciesIdReducer } from './getVacanciesId/getVacanciesId';
import { vacanciesPostReducer } from './postVacancies/postVacancies';


const store = configureStore({
  reducer: {
    vacanciesPost: vacanciesPostReducer,
    vacanciesId: vacanciesIdReducer,
    vacancies: vacanciesReducer,
    resume: resumeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
