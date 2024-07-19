'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CoinList from './CoinList';
import Pagination from './Pagination';
import { Coin } from '../explore/CoinList';
import Watchlist from '../../components/common/Watchlist';
import Loader from '../../components/common/Loader';
const ExplorePage = () => {
    const [cryptoData, setCryptoData] = useState<Coin[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [activeFilter, setActiveFilter] = useState('all');
    const itemsPerPage = 20;
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
            .then(response => {
                setLoader(false);
                setCryptoData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const filterData = () => {
        if (activeFilter === 'all') {
            return cryptoData;
        }
        if (activeFilter === 'gainers') {
            return cryptoData.filter(coin => coin.price_change_percentage_24h > 0);
        }
        if (activeFilter === 'losers') {
            return cryptoData.filter(coin => coin.price_change_percentage_24h < 0);
        }
        if (activeFilter === 'recently_sold') {
            // Assuming recently_sold is defined by coins with a high volume in the last 24 hours
            return cryptoData.filter(coin => coin.total_volume > 1000000);
        }
        if (activeFilter === 'watchlist') {
            // Assuming you have a way to identify the watchlist coins, for example, from local storage or a different API
            const watchlistIds = ['bitcoin', 'ethereum']; // Example watchlist
            return cryptoData.filter(coin => watchlistIds.includes(coin.id));
        }
        return cryptoData;
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filterData().slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (<>
        {loader === true ? <div className="flex justify-center items-center h-screen">
            <Loader />
        </div> :
            <div className="flex mt-3">
                <div className="flex flex-col h-screen">
                    <div className="container mx-auto px-2 py-2 flex-1">
                        <CoinList coins={currentItems} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
                        <div className="mt-8">
                            <Pagination
                                itemsPerPage={itemsPerPage}
                                totalItems={filterData().length}
                                paginate={paginate}
                                currentPage={currentPage}
                            />
                        </div>
                    </div>

                </div>

                <div className="lg:w-[28%] space-y-8 mt-8">
                    <Watchlist coins={currentItems} />
                    <Watchlist coins={currentItems} />
                </div>

            </div>}
    </>
    );
};

export default ExplorePage;
