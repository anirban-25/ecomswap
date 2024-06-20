"use client";
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const AnalyticsChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Page Views',
        data: [],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
          console.log("hey")
          const response = await fetch('/api/analytics-data');
          const data = await response.json();
          console.log(response)
        // Assuming data is an array of objects with 'date' and 'pageViews' keys
        const labels = data.map(item => item.date);
        const pageViews = data.map(item => item.pageViews);

        setChartData({
          labels,
          datasets: [
            {
              label: 'Page Views',
              data: pageViews,
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching analytics data:', error);
      }
    };

    fetchData();
  }, []);

  return chartData.labels.length > 0 ? <Bar data={chartData} /> : <p>Loading...</p>;
};

export default AnalyticsChart;
