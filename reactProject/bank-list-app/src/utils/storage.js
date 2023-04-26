const STORAGE_KEY = 'bankList';

export const saveBankList = (bankList) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bankList));
};

export const getBankList = () => {
  const bankList = localStorage.getItem(STORAGE_KEY);
  return bankList ? JSON.parse(bankList) : null;
};
