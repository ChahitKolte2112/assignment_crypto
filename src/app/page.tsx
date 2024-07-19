'use client';
import React, { useEffect } from 'react';
import Watchlist from '@/components/common/Watchlist';
import GlobalMarketCapChart from '../components/homepage/GlobalMarketCapChart';
import PublicCompaniesHoldings from '../components/homepage/PublicCompaniesHoldings';
import Loader from '@/components/common/Loader';
const data = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    image: 'https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400',
    current_price: 63910,
    price_change_percentage_24h: 5.2,
    market_cap: 1200000000,
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    image: 'https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628',
    current_price: 3395.5,
    price_change_percentage_24h: 3.1,
    market_cap: 500000000,
  },
  {
    id: 'tether',
    name: 'Tether',
    image: 'https://coin-images.coingecko.com/coins/images/325/large/Tether.png?1696501661',
    current_price: 0.999947,
    price_change_percentage_24h: 0.0,
    market_cap: 60000000,
  },
  {
    id: 'binancecoin',
    name: 'BNB',
    image: 'https://coin-images.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970',
    current_price: 569.87,
    price_change_percentage_24h: 2.8,
    market_cap: 80000000,
  },
  {
    id: 'solana',
    name: 'Solana',
    image: 'https://coin-images.coingecko.com/coins/images/4128/large/solana.png?1718769756',
    current_price: 161.69,
    price_change_percentage_24h: 4.5,
    market_cap: 30000000,
  },
  {
    id: 'usd-coin',
    name: 'USDC',
    image: 'https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694',
    current_price: 1.001,
    price_change_percentage_24h: 0.1,
    market_cap: 40000000,
  },
  {
    id: 'staked-ether',
    name: 'Lido Staked Ether',
    image: 'https://coin-images.coingecko.com/coins/images/13442/large/steth_logo.png?1696513206',
    current_price: 3394.85,
    price_change_percentage_24h: 3.2,
    market_cap: 45000000,
  },
  {
    id: 'ripple',
    name: 'XRP',
    image: 'https://coin-images.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442',
    current_price: 0.545641,
    price_change_percentage_24h: 1.7,
    market_cap: 50000000,
  },
  {
    id: 'the-open-network',
    name: 'Toncoin',
    image: 'https://coin-images.coingecko.com/coins/images/17980/large/ton_symbol.png?1696517498',
    current_price: 7.3,
    price_change_percentage_24h: 2.3,
    market_cap: 35000000,
  },

];

export default function HomePage() {
  const [loader, setLoader] = React.useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);


  }, []);

  return (<>
    {loader === true ? <div className="flex justify-center items-center h-screen">
      <Loader /></div> :
      <div className="container mx-auto">
        <main className="p-4 flex flex-col lg:flex-row">
          <div className="w-full lg:w-[80%] mb-8 lg:mb-0 lg:mr-8 flex flex-col space-y-8">
            <GlobalMarketCapChart />
            <Watchlist coins={data} />
          </div>
          <div className="w-full lg:w-[28%] space-y-8">
            <Watchlist coins={data} />
            <Watchlist coins={data} />
          </div>
        </main>
      </div>}
  </>
  );
}