'use client';
import React from 'react';
import styled from 'styled-components';
import { Coin } from '../../app/explore/CoinList';

const WatchlistContainer = styled.div`
  border-radius: 10px;
  padding: 16px; /* Ensure adequate padding */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: #fff; /* Ensure background color */
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 8px 12px; /* Increased padding for better readability */
  font-weight: bold;
  font-size: 14px; /* Slightly increased font size */
  color: #333;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background: #f9f9f9;
  }
`;

const TableCell = styled.td`
  word-wrap: break-word;
  white-space: normal;
  overflow-wrap: break-word;
  font-size: 14px;
  color: #333;
  padding: 8px; /* Added padding for better readability */
`;

const TokenCell = styled(TableCell)`
  display: flex;
  align-items: center;
`;

const TokenIcon = styled.img`
  width: 16px; /* Adjusted icon size */
  height: 16px;
  margin-right: 4px; /* Increased margin for better spacing */
`;

const ViewMore = styled.a`
  color: #0070f3;
  cursor: pointer;
  text-decoration: none;
  font-size: 14px;
`;

type WatchListCoins = {
  id: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;

}
interface WatchListProps {
  coins: WatchListCoins[];
}
const Watchlist: React.FC<WatchListProps> = ({ coins }) => {
  return (
    <WatchlistContainer>
      <Title>
        <h2>Watchlist</h2>
        <ViewMore href="#">View more coins</ViewMore>
      </Title>
      <Table>
        <thead>
          <tr>
            <TableHeader>Token</TableHeader>
            <TableHeader>Last Price</TableHeader>
            <TableHeader>Changes</TableHeader>
            <TableHeader>Market Cap</TableHeader>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, index) => (
            <TableRow key={index}>
              <TokenCell>
                <TokenIcon src={coin.image} alt={`${coin.name} icon`} />
                {coin.name}
              </TokenCell>
              <TableCell>{coin.current_price}</TableCell>
              <TableCell style={{ color: coin.price_change_percentage_24h > 0 ? '#16c784' : '#ea3943' }}>
                {coin.price_change_percentage_24h.toFixed(2)}%
              </TableCell>
              <TableCell>{coin.market_cap.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </WatchlistContainer>
  );
};

export default Watchlist;
