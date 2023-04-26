import React, { useEffect, useState } from 'react';
import { BankContext } from './BankContext';

const BankProvider = ({ children }) => {
  const [bankList, setBankList] = useState([]);

  useEffect(() => {
    fetch('https://dev.obtenmas.com/catom/api/challenge/banks')
      .then((response) => response.json())
      .then((data) => setBankList(data));
  }, []);

  return (
    <BankContext.Provider value={bankList}>
      {children}
    </BankContext.Provider>
  );
};

export default BankProvider;
