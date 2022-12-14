import IEvent from "../interfaces/IEvent";
import moment from "moment";
import {Buffer} from 'buffer';

export const formatEvents = (items: Array<IEvent>) => {
  return items.map(evt => {
    evt.data = moment(evt.data).format('DD/MM/YYYY');
    if (typeof evt?.imagem?.data === 'object') {
      let img = Buffer.from(evt?.imagem?.data);
      evt.imagem = img.toString('utf-8').includes('base64')
        ? img.toString('utf8')
        : null;
    }
    return evt;
  });
};