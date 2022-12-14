import 'intl';
import 'intl/locale-data/jsonp/en';
export const Currency = (value: any) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
