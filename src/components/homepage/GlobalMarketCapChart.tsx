"use client";
import dynamic from 'next/dynamic';
import 'chart.js/auto';
const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {
    ssr: false,
});
const data = {
    labels: ['1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM'],
    datasets: [
        {
            label: 'BTC',
            data: [3000, 3100, 3200, 3300, 3400, 3500, 3600],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
        },
        {
            label: 'ETH',
            data: [2000, 2100, 2200, 2300, 2400, 2500, 2600],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
        },
        {
            label: 'LTC',
            data: [1000, 1100, 1200, 1300, 1400, 1500, 1600],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
        },
    ],
};
const GlobalMarketCapChart = () => {
    return (
        <div style={{ display: "flex ", justifyContent: "center", width: '70vw', height: '60vh', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>

            <Line data={data} style={{ width: "100%", height: "100%" }} />
        </div>

    );
};
export default GlobalMarketCapChart;