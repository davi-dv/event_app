import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect
} from 'react';
import * as S from './styles';
import creditCardSchema from './Schema';
import Input from '../../Input';
import {ValidationError} from 'yup';

interface IPropsForward {
  validateFields: () => any;
  value?: any;
  ref?: any;
}
export const FieldsCard = React.forwardRef<IPropsForward, HTMLElement>(
  (props, ref) => {
    const [name, setName] = useState<string>();
    const [nameError, setNameError] = useState<string>();
    const [validate, setValidate] = useState<string>();
    const [validateError, setValidateError] = useState<string>();
    const [number, setNumber] = useState<string>();
    const [numberError, setNumberError] = useState<string>();
    const [cvv, setCvv] = useState<string>();
    const [cvvError, setCvvError] = useState<string>();
    const [errorFields, setErrorFields] = useState<Boolean>();
    const clearFieldsError = () => {
      setNameError(undefined);
      setValidateError(undefined);
      setNumberError(undefined);
      setCvvError(undefined);
    };
    const clearFields = () => {
      setName('');
      setValidate('');
      setNumber('');
      setCvv('');
    };
    const validationFields = async () => {
      clearFieldsError();
      try {
        await creditCardSchema.validate(
          {name, validate, number, cvv},
          {abortEarly: false}
        );
        setErrorFields(false);
        clearFields();
      } catch (error) {
        if (error instanceof ValidationError) {
          setErrorFields(true);
          error.inner.forEach(error => {
            if (error.path === 'name') setNameError(error.message);
            if (error.path === 'cvv') setCvvError(error.message);
            if (error.path === 'number') setNumberError(error.message);
            if (error.path === 'validate') setValidateError(error.message);
          });
        }
        return error;
      }
    };

    useImperativeHandle(ref, () => ({
      validateFields() {
        validationFields();
        return errorFields;
      },
      getValueFields() {
        return {
          name,
          validate,
          cvv,
          number
        };
      }
    }));

    return (
      <S.ContainerFields>
        <Input
          placeholder="Nome Titular"
          autoCorrect={false}
          icon="user"
          value={name}
          autoCapitalize="none"
          error={nameError}
          onChangeText={text => setName(text)}
        />
        <Input
          placeholder="Validade"
          nameMaskInput={'datetime'}
          autoCorrect={false}
          value={validate}
          icon="calendar"
          error={validateError}
          onChangeText={text => setValidate(text)}
          autoCapitalize="none"
        />
        <Input
          placeholder="Número"
          autoCorrect={false}
          value={number}
          onChangeText={text => setNumber(text)}
          nameMaskInput={'credit-card'}
          icon="credit-card"
          error={numberError}
          autoCapitalize="none"
        />
        <Input
          nameMaskInput={'only-numbers'}
          placeholder="Cvv"
          autoCorrect={false}
          value={cvv}
          onChangeText={text => setCvv(text)}
          icon="credit-card"
          error={cvvError}
          autoCapitalize="none"
        />
      </S.ContainerFields>
    );
  }
);
