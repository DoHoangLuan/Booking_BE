import * as Yup from 'yup';

const loginValidation = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().min(6).required(),
});

export default loginValidation;
