import axios from 'axios';
import Bank from './models/bank';

const BASE_URL = 'https://dev.obtenmas.com/catom/api/challenge';

// Fetch all banks from API
export const fetchBanks = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/banks`);
    const banksData = response.data;
    const banks = banksData.map((bankData) => new Bank(bankData));
    return banks;
  } catch (error) {
    console.error('Error fetching banks:', error);
    return null;
  }
};
