import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [banks, setBanks] = useState([]);

  useEffect(() => {
    // Make a JSONP request to fetch bank data
    const script = document.createElement('script');
    script.src = 'https://dev.obtenmas.com/catom/api/challenge/banks?callback=handleJSONPResponse';
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Handle the JSONP response by setting the state with the bank data
  window.handleJSONPResponse = (data) => {
    setBanks(data);
  };

  return (
    <div className="container">
      <h1>List of Banks</h1>
      <ul>
        {banks.map((bank) => (
          <li key={bank.bankName}>
            <h2>{bank.bankName}</h2>
            <p>{bank.description}</p>
            <a href={bank.url}>Learn more</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
