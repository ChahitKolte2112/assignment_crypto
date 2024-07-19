import React from 'react';
import Link from 'next/link';
import { types } from 'util';

export type Coin = {
    id: string;
    name: string;
    symbol: string;
    image: string;
    market_cap: number;
    circulating_supply: number;
    current_price: number;
    high_24h: number;
    low_24h: number;
    market_cap_change_percentage_24h: number;
    price_change_percentage_24h: number;
    ath: number;
    ath_change_percentage: number;
    ath_date: string;
    atl: number;
    atl_change_percentage: number;
    atl_date: string;
    fully_diluted_valuation: number;
    last_updated: string;
    market_cap_rank: number;
    max_supply: number;
    total_supply: number;
    total_volume: number;
}

interface CoinListProps {
    coins: Coin[];
    activeFilter: string;
    setActiveFilter: (filter: string) => void;
}

const CoinList: React.FC<CoinListProps> = ({ coins, activeFilter, setActiveFilter }) => {
    console.log(coins);
    return (
        <>
            <div className="flex justify-start space-x-4 mb-4">
                <button
                    className={`px-4 py-2 rounded-md ${activeFilter === 'all' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`}
                    onClick={() => setActiveFilter('all')}
                >
                    All Coins
                </button>
                <button
                    className={`px-4 py-2 rounded-md ${activeFilter === 'watchlist' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`}
                    onClick={() => setActiveFilter('watchlist')}
                >
                    Watchlist
                </button>
                <button
                    className={`px-4 py-2 rounded-md ${activeFilter === 'gainers' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`}
                    onClick={() => setActiveFilter('gainers')}
                >
                    Gainers
                </button>
                <button
                    className={`px-4 py-2 rounded-md ${activeFilter === 'losers' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`}
                    onClick={() => setActiveFilter('losers')}
                >
                    Losers
                </button>
                <button
                    className={`px-4 py-2 rounded-md ${activeFilter === 'recently_sold' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`}
                    onClick={() => setActiveFilter('recently_sold')}
                >
                    Recently Sold
                </button>
            </div>
            <div className="w-full bg-white rounded-sm shadow-md overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Market Cap</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Circulating Supply</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">High</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Low</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">% Change</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {coins.map((coin) => (
                            <tr key={coin.id}>
                                <td className="px-4 py-4 whitespace-nowrap">
                                    <Link href={`/product/${coin.id}`} className="flex items-center">
                                        <img src={coin.image} alt={coin.name} className="w-6 h-6 mr-2" />
                                        <span className="font-medium text-gray-600">{coin.name}</span>
                                    </Link>
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-gray-500">${coin.market_cap.toLocaleString()}</td>
                                <td className="px-4 py-4 whitespace-nowrap text-gray-500">{coin.circulating_supply.toLocaleString()}</td>
                                <td className="px-4 py-4 whitespace-nowrap text-gray-500">${coin.current_price}</td>
                                <td className="px-4 py-4 whitespace-nowrap text-gray-500">${coin.high_24h}</td>
                                <td className="px-4 py-4 whitespace-nowrap text-gray-500">${coin.low_24h}</td>
                                <td className={`px-4 py-4 whitespace-nowrap ${coin.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                    {coin.price_change_percentage_24h.toFixed(2)}%
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default CoinList;
