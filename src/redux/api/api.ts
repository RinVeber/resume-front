import axios, { AxiosError, AxiosResponse } from 'axios';
import { API_BASE_URL } from '../../utils/apiConstants';

type AxiosKnownErrorType = {
  message: string,
}

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


export const handleRequest = async (
  reqFun: Promise<AxiosResponse>,
  reject: (value: string) => string | unknown
) => {
  try {
    const { data } = await reqFun;
    return data;
  } catch (e) {
    const error = e as AxiosError<AxiosKnownErrorType>;
    const errorMessage: string = error.response?.data.message || String(error);
    return reject(errorMessage);
  }
};
