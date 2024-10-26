'use client'
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend}
from "chart.js"

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label: 'Banks',
                data: [
                    1200, 6000, 20
                ],
                backgroundColor: ['#cb49b5', '#a72391',
                    '#7d1d6d']
            }
        ],
        labels: ['Bank 1', 'Bank 2', 'Bank 3']
    }
  return (
    <Doughnut data={data}
    options={{
        cutout: '60%',
        plugins: {
            legend: {
                display: false
            }
        }
    }} />
  )
}

export default DoughnutChart