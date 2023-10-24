import * as yup from 'yup';

export type FormAuth = {
  password: string;
  email: string;
};

export const authForm: yup.ObjectSchema<FormAuth> = yup.object({
  email: yup
    .string()
    .email('Укажите почту в формате you@yandex.ru')
    .required('Это поле обязательное'),
  password: yup
    .string()
    .min(3, 'Минимум 3 символа')
    .required('Это поле обязательное'),
});
