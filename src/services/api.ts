'use strict';

import axios from 'axios';
// import ApiResponseError from '../DTOs/apiResponseError';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiData from '../interfaces/IApiData';

const api = axios.create({
  baseURL: 'http://10.0.2.2:3005',
  headers: {
    'Content-Type': 'application/json'
  }
});
// async function setHeaders(res: AxiosResponse<any>) {
//   if (res.headers['access-token'] && res.headers['access-token'] !== '') {
//     const apiData: apiData = {
//       'access-token': res.headers['access-token'],
//       client: res.headers['client'],
//       expiry: res.headers['expiry'],
//       'token-type': res.headers['token-type'],
//       uid: res.headers['uid'],
//     };

//     api.defaults.headers = { ...api.defaults.headers, ...apiData };
//     await AsyncStorage.setItem('@api-data', JSON.stringify(apiData));
//   }
// };
// api.interceptors.request.use(
//   async req => {
//     req.headers = { ContentType: 'application/json' };

//     if (!req.url?.includes('user/signin')) {
//       const savedApiData = await AsyncStorage.getItem('@api-data');

//       if (!savedApiData) {
//         return req;
//       }

//       const apiData: apiData = JSON.parse(savedApiData);
//       req.headers = { ...req.headers, ...apiData };
//     }

//     return req;
//   }
// );

export default api;
