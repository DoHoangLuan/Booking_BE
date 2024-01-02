import * as Yup from 'yup';

const registerStaffValidation = Yup.object().shape({
  email: Yup.string().email('email không hợp lệ').required(),
  password: Yup.string().min(6).required(),
  username: Yup.string().required(),
  role: Yup.string().required,
});

export default registerStaffValidation;
