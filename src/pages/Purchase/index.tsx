import {useRoute, RouteProp, useNavigation} from '@react-navigation/native';
import IEvent from '../../interfaces/IEvent';
import * as S from './styles';
import {Currency} from '../../utils/Currency';
import React, {useEffect, useRef, useState} from 'react';
import PaymentDropdown from '../../components/Payment/index';
import {FieldsCard} from '../../components/Payment/Fields/index';
import {Alert, Text} from 'react-native';
import Requests from '../../hooks/useApi';
import {generateParcels} from '../../utils/generateParcels';
import {useAuth} from '../../contexts/auth';
import {object} from 'yup';
interface SelectedItem {
  label: string;
  value: string;
}
const formPayments = [
  {label: 'pix', value: 'pix'},
  {label: 'cartao de crédito', value: 'crédito'},
  {label: 'cartao de débito', value: 'débito'},
  {label: 'dinheiro', value: 'dinheiro'}
];
export const Purchase = () => {
  const navigation = useNavigation();
  const childRef = useRef();
  const {loggedUser} = useAuth();
  const route = useRoute<RouteProp>();
  const [userData, setLoggedUserData] = useState<Object>();
  const [formPayment, setSelectedFormPayment] = useState<Object>();
  const [typePayment, setSelectedTypePayment] = useState<Object>();
  const HandlePurchase = async () => {
    let valueFields;
    let isInvalidFields;

    if (formPayment === 'crédito' || formPayment === 'débito') {
      isInvalidFields = await childRef?.current.validateFields();
      valueFields = await childRef?.current.getValueFields();

      if (
        Object.values(valueFields).includes(undefined) ||
        Object.values(valueFields).includes('')
      ) {
        Alert.alert('Preencha os campos obrigatórios');
        return;
      }
    }
    const findTicketId = await Requests.get(
      `/ticket/single/${parseInt(route.params.id)}`,
      'ticket'
    );
    if (findTicketId) {
      let dataPurchase = {
        nome: loggedUser?.name,
        email: loggedUser?.email,
        endereco: loggedUser?.email,
        id_ingresso: findTicketId[0]?.id,
        id_usuario: loggedUser?.id,
        id_evento: route.params.id,
        valor: route.params.valor,
        codingresso: new Date(),
        quantidade: 1,
        formaPagamento: formPayment,
        tipoPagamento: typePayment,
        nomeTitular: valueFields?.name,
        numeroCartao: valueFields?.number,
        cvv: parseInt(valueFields?.cvv),
        validade: valueFields?.validade
      };
      if (formPayment !== 'crédito' || formPayment !== 'débito') {
        dataPurchase.tipoPagamento = formPayment;
        delete dataPurchase.nomeTitular;
        delete dataPurchase.numeroCartao;
        delete dataPurchase.cvv;
        delete dataPurchase.validade;
        delete dataPurchase.formaPagamento;
      }
      // console.log(dataPurchase);
      const createdPurchase = await Requests.post(
        '/purchase/create',
        dataPurchase
      );
      if (createdPurchase?.codingresso) {
        Alert.alert('Compra efetuada com sucesso');
        navigation.navigate('Ingressos');
      } else {
        Alert.alert('Opps! algo de errado!');
      }
    }
  };
  useEffect(() => {
    setLoggedUserData(loggedUser);
  }, []);
  console.log(userData);
  return (
    <S.MainContainer>
      <S.ContainerCardInformationsEvent>
        <S.ContainerImagem>
          <S.Imagem source={{uri: `${route.params?.imagem}`, scale: 1}} />
        </S.ContainerImagem>
        <S.ContainerInformationsOrder>
          <S.Date>Acontece em: {route.params?.data}</S.Date>
          <S.Price>Total: {Currency(route.params?.valor)}</S.Price>
        </S.ContainerInformationsOrder>
      </S.ContainerCardInformationsEvent>
      <S.ContainerTitlePayment>
        <S.titleFormPayment>Tipo de pagamento:</S.titleFormPayment>
      </S.ContainerTitlePayment>
      <PaymentDropdown
        data={formPayments}
        onSelect={item => setSelectedFormPayment(item)}
      />
      {formPayment === 'crédito' && (
        <FieldsCard
          ref={childRef}
          value={route.params?.valor}
          onSelect={setSelectedTypePayment}
        />
      )}
      {formPayment === 'débito' && (
        <FieldsCard
          ref={childRef}
          value={route.params?.valor}
          onSelect={setSelectedTypePayment}
        />
      )}
      {formPayment === 'débito' && (
        <PaymentDropdown
          data={generateParcels(route.params?.valor)}
          onSelect={item => setSelectedTypePayment(item)}
        />
      )}
      {formPayment === 'crédito' && (
        <PaymentDropdown
          data={generateParcels(route.params?.valor)}
          onSelect={item => setSelectedTypePayment(item)}
        />
      )}
      {formPayment && (
        <S.ButtonContainer>
          <S.Touchable onPress={() => HandlePurchase()}>
            <S.BuyTitle>Finalizar Compra</S.BuyTitle>
          </S.Touchable>
        </S.ButtonContainer>
      )}
    </S.MainContainer>
  );
};
