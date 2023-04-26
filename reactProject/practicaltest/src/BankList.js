import React, { useContext } from 'react';
import { BankContext } from './BankContext';

const BankList = () => {
  const bankList = useContext(BankContext);

  return (
    <div>
      <h1>List of Banks</h1>
      <ul>
        {bankList.map((bank) => (
          <li key={bank.bankName}>
            <h2>{bank.bankName}</h2>
            <p>{bank.description}</p>
            <p>{bank.age} years old</p>
            <a href={bank.url}>Visit Website</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BankList;
