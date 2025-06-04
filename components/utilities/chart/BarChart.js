'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

// Registrasi komponen chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Data & options chart
const options = {
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    title: { display: true, text: 'Contoh Bar Chart' }
  }
};

const labels = ['Januari', 'Februari', 'Maret', 'April', 'Mei'];

const data = {
  labels,
  datasets: [
    {
      label: 'Pendapatan',
      data: [120, 190, 300, 250, 220],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    }
  ],
};

export default function BarChart({ options = options, data = data }) {
  return <Bar options={options} data={data} />;
}
