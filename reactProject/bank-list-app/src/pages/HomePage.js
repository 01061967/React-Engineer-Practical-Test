import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import BankList from '../components/BankList';
import LoadingSpinner from '../components/LoadingSpinner';
import { fetchBanks } from '../store/actions/bankActions';

const HomePage = ({ fetchBanks, banks, loading }) => {
  useEffect(() => {
    fetchBanks();
  }, [fetchBanks]);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">Banks</h1>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <BankList banks={banks} />
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  banks: state.bank.banks,
  loading: state.bank.loading,
});

export default connect(mapStateToProps, { fetchBanks })(HomePage);
