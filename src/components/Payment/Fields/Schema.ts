import * as Yup from 'yup';

const options = {
  number: Yup.string().label('numero cartão').max(20).required(),
  cvv: Yup.string().label('cvv').min(3).max(3).required(),
  name: Yup.string().label('nome no cartão').required(),
  validate: Yup.string().label('validade do cartão').min(5).max(12).required()
};
const creditCardSchema = Yup.object().shape(options);
export default creditCardSchema;
