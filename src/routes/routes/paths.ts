export const paths = {
  main: '/',
  create: '/create', // страничка с созданием вакансий
  vacancies: '/vacancies', // страничка с отображанием "моих" вакансий
  respond: '/vacancies/respond', // страничка с откликами на вакансии
  resume: '/resume', // резюме
  search: '/search', // поиск кандидатов
  notFound: '/*',
  auth: '/auth'
} as const;

export type ApplicationRoute = typeof paths;
