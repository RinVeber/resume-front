import { API_BASE_ALL_VACANCIES_URL } from '../../utils/apiConstants';

const checkRes = (res: Response) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(res);
  }
};

const fetchData = (url: string) => {
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    //   Authorization: `Bearer ${token}`,
    },
  }).then((res) => checkRes(res));
};

export const fetchVacanciesId = (id: number) => {
  return fetchData(
    `${API_BASE_ALL_VACANCIES_URL}/${id}/`,
  );
};