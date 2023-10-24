import * as yup from 'yup';

export type FormAuth = {
  password: string;
  email: string;
};

export const authForm: yup.ObjectSchema<FormAuth> = yup.object({
  email: yup.string().required('Укажите почту в формате you@yandex.ru'),
  password: yup.string().min(1).required('Пароль не введен'),

});
