import { API_BASE_ALL_VACANCIES_URL } from '../../utils/apiConstants';

const checkRes = (res: Response) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(res);
  }
};

const fetchData = (url: string, data: object) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    //   Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  }).then((res) => checkRes(res));
};

export const fetchVacanciesPost = (data: object) => {
  return fetchData(
    `${API_BASE_ALL_VACANCIES_URL}`,
    data
  );
};