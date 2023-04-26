import React from 'react';

const BankListItem = ({ bank }) => {
  return (
    <li>
      <h3>{bank.bankName}</h3>
      <p>{bank.description}</p>
      <p>Age: {bank.getAge()}</p>
      <a href={bank.url}>Visit website</a>
    </li>
  );
};

export default BankListItem;
