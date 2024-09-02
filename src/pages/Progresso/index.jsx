import React from 'react';
import Header from '../../componentes/Header';
import './Progresso.css';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

export default function Progresso() {
    const data = {
        labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4', 'Semana 5', 'Semana 6', 'Semana 7', 'Semana 8', 'Semana 9', 'Semana 10'],
        datasets: [
            {
                label: 'Peso',
                data: [100, 98, 97, 96, 95, 96, 95, 95, 93, 92],
                borderColor: '#ffffff',
                backgroundColor: 'yellow',
                pointBackgroundColor: 'green',
                borderWidth: 2,
                tension: 0.3,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: false,
                min: 80,
                max: 100,
                grid: {
                    color: '#2E3A4B',
                },
            },
            x: {
                grid: {
                    color: '#2E3A4B',
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return (
        <div>
            <Header type={'PERFIL'} />
            <div className="container-progresso">
                <div className="header-progresso">
                    <h2>Meu progresso</h2>
                    <div className="linha-header"></div>
                </div>
                <div className="progresso-container">
                    <div className="peso-inicial">
                        <span className="label">Peso inicial</span>
                        <br />
                        <span className="peso">100 Kg</span>
                    </div>
                    <div className="peso-alvo">
                        <span className="label">Peso alvo</span>
                        <br />
                        <span className="peso">80 Kg</span>
                    </div>
                    <Line data={data} options={options} />
                </div>
            </div>
        </div>
    );
}
