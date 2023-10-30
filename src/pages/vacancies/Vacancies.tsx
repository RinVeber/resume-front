import { useEffect } from 'react';
import CardList from '../../components/CardList';
import { getVacanciesApi } from '../../redux/getVacancies/getVacancies';
import { useAppDispatch } from '../../redux/store';

export default function Vacancies() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getVacanciesApi());
  }, []);

  return <CardList />;
}
