import * as yup from 'yup';

const signUpSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup
    .string()
    .required('E-mail obrigatório')
    .email('Digite um e-mail válido'),
  password: yup
    .string()
    .min(6, 'Deve ter no mínimo 6 caracteres')
    .required('Password obrigatório'),
  confirmPassword: yup
    .string()
    .min(6, 'Deve ter no mínimo 6 caracteres')
    .required('Confirmação obrigatória')
});

export default signUpSchema;
