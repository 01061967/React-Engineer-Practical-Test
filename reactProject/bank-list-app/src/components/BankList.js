import React from 'react';
import BankListItem from './BankListItem';
import LoadingSpinner from './LoadingSpinner';

const BankList = ({ banks, isLoading }) => {
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!banks || banks.length === 0) {
    return <p>No banks found.</p>;
  }

  return (
    <ul>
      {banks.map((bank) => (
        <BankListItem key={bank.bankName} bank={bank} />
      ))}
    </ul>
  );
};

export default BankList;
