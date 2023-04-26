import { GET_BANKS, GET_BANK_DETAIL } from '../actions/types';

export const getBanks = () => {
  return {
    type: GET_BANKS,
  };
};

export const getBankDetail = (id) => {
  return {
    type: GET_BANK_DETAIL,
    payload: id,
  };
};
