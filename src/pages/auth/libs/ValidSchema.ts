import * as yup from 'yup';

export type FormAuth = {
  password: string;
  email: string;
};

export const authForm: yup.ObjectSchema<FormAuth> = yup.object({
  email: yup
    .string()
    .email('Укажите почту в формате you@yandex.ru')
    .required('Это поле обязательное для заполнение'),
  password: yup
    .string()
    .min(3, 'Минимум 3 символа').max(15, 'Максимум 15 символов')
    .required('Введите пароль'),
});
