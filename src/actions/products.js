import axios from 'axios';
export const NEW_PRODUCTS_TYPE = 'FETCH_PRODUCTS';

const PRODUCTS_URL = 'http://private-5815fe-recommendationsknip.apiary-mock.com/products';

export const fetchProducts = () => {
  const request = axios.get(PRODUCTS_URL);

  return {
    type: NEW_PRODUCTS_TYPE,
    payload: request,
  };
};
