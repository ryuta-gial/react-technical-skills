import React from 'react';
import styles from './Chart.module.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { selectDaily } from 'slices/covidSlice';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Chart: React.FC = () => {
  const daily = useSelector(selectDaily);
  const dates = daily.map(({ Date }) => Date);

  const lineChart = daily[0] && (
    <Line
      data={{
        labels: dates.map((date) => new Date(date).toDateString()),
        datasets: [
          {
            data: daily.map((data) => data.Confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            showLine: false,
          },
          {
            data: daily.map((data) => data.Recovered),
            label: 'Recovered',
            borderColor: 'green',
            showLine: false,
          },
          {
            data: daily.map((data) => data.Deaths),
            label: 'Deaths',
            borderColor: '#ff3370',
            showLine: false,
          },
        ],
      }}
    />
  );

  return <div className={styles.container}>{lineChart}</div>;
};

export default Chart;
