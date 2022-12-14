import {Float} from 'react-native/Libraries/Types/CodegenTypes';

export const generateParcels = (value: any) => {
  let parcelas = [];
  for (let index = 1; index <= 10; index++) {
    parcelas.push({
      label: String(index) + ' x ' + (value / index).toFixed(2),
      value: String(index) + ' x ' + (value / index).toFixed(2)
    });
  }
  return parcelas;
};
