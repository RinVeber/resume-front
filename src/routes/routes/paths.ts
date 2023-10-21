export const paths = {
  main: '/',
  create: '/create', // страничка с созданием вакансий
  vacancies: '/vacancies', // страничка с отображанием "моих" вакансий
  respond: '/respond', // страничка с откликами на вакансии
  resume: '/resume', // резюме
  notFound: '/*',
} as const;

export type ApplicationRoute = typeof paths;
