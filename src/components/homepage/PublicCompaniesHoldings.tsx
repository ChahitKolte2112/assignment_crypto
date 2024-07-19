import React from 'react';

const publicCompanies = [
  { name: 'Company A', bitcoin: 1000, ethereum: 500 },
  { name: 'Company B', bitcoin: 800, ethereum: 300 },
  { name: 'Company C', bitcoin: 1200, ethereum: 600 },
];

const PublicCompaniesHoldings = () => {
  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-2xl font-bold mb-4">Public Companies Holdings</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Company</th>
            <th className="py-2">Bitcoin</th>
            <th className="py-2">Ethereum</th>
          </tr>
        </thead>
        <tbody>
          {publicCompanies.map((company, index) => (
            <tr key={index}>
              <td className="py-2 text-center">{company.name}</td>
              <td className="py-2 text-center">{company.bitcoin} BTC</td>
              <td className="py-2 text-center">{company.ethereum} ETH</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PublicCompaniesHoldings;
