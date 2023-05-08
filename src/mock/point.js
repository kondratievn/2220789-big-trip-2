import { getRandomInteger } from "../utils";
import dayjs from "dayjs";
import { TYPES, DESTINATIONS } from './consts.js'
import { OFFERS_ARRAY } from './offers.js';

const generateType = () => {
  const randomPoint = getRandomInteger(0, TYPES.length - 1);

  return TYPES[randomPoint];
};

const generatePrice = () => getRandomInteger(10,2000);

export const createPoint = () => {

  const start = dayjs().add(getRandomInteger(-1, 0),'day').add(getRandomInteger(-11, 0),'hour').add(getRandomInteger(-30, 0), 'minute');
  const end = dayjs().add(getRandomInteger(0, 1),'day').add(getRandomInteger(0, 11),'hour').add(getRandomInteger(0, 30), 'minute');

  return {
    basePrice: generatePrice(),
    dateFrom: start,
    dateTo: end,
    destination: getRandomInteger(1, DESTINATIONS.length),
    isFavorite: Boolean(getRandomInteger(0,1)),
    offers: [...new Set(Array.from({length: getRandomInteger(0, OFFERS_ARRAY.length) }, () => getRandomInteger(1, OFFERS_ARRAY.length - 1)))],
    type: generateType(),
  };
};