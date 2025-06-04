'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  SubTitle
} from 'chart.js';

import { Line } from 'react-chartjs-2';

// Registrasi komponen chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, SubTitle);

export default function LineChart({ notes, data, title }) {
  return <Line
    options={{
      responsive: true,
      plugins: {
        legend: { position: 'top' },
        title: { display: true, text: title },
        subtitle: {
          display: true,
          text: notes,
          color: 'blue',
          font: {
            size: 12,
            family: 'tahoma',
            weight: 'normal',
            style: 'italic'
          }
        }
      }
    }}
    data={data} />;
}
