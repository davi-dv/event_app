import Api from '../services/api';
import {useQuery} from 'react-query';

const Requests = {
  post: async (url: string, sendData: any) => {
    const request = async () => {
      try {
        const {data} = await Api.post(url, sendData);
        return data;
      } catch (error) {
        console.log(error);
      }
    };
    return request();
    // const res = {
    //   rq: await useQuery<any>(cacheNameKey, request),
    //   data: await request()
    // }
  },
  put: async (url: string, sendData: any) => {
    const request = async () => {
      try {
        const {data} = await Api.put(url, sendData);
        return data;
      } catch (error) {
        console.log(error);
      }
    };
    return request();
    // const res = {
    //   rq: await useQuery<any>(cacheNameKey, request),
    //   data: await request()
    // }
  },
  get: async (url: string, cacheNameKey: string) => {
    const request = async () => {
      try {
        const {data} = await Api.get(url);
        return data;
      } catch (error) {
        console.log(error);
      }
    };
    return await request();
    // const res = {
    //   rq: await useQuery<any>(cacheNameKey, request),
    //   data: await request()
    // }
  }
};
export default Requests;
