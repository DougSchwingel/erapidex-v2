document.addEventListener('DOMContentLoaded', function () {
    const ctx1 = document.getElementById('myChart1');
    const ctx2 = document.getElementById('myChart2');
    const ctx3 = document.getElementById('myChart3');

    new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['01/23', '02/23', '03/23', '04/23', '05/23', '06/23', '07/23', '08/23', '09/23', '10/23'],
            datasets: [{
                label: 'Faturamento bruto em Reais',
                data: [5000000, 7500000, 1300000, 2100000, 6100000, 3300000, 1800000, 2400000, 1000000, 1200000],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            layout: {
                padding: 10
            },
            plugins: {
                title: {
                    font: {
                        size: 24
                    },
                    display: true,
                    text: 'Custom Chart Title'
                },
                legend: {
                    display: false,
                    labels: {
                        font: {
                            size: 16
                        }
                    }
                }
            }
        }
    });

    new Chart(ctx2, {
        data: {
            datasets: [{
                type: 'bar',
                label: 'Diesel',
                data: [50000, 75000, 13000, 21000, 61000, 33000, 18000, 24000, 10000, 12000]
            }, {
                type: 'bar',
                label: 'Arla32',
                data: [3500, 4700, 1100, 1600, 3500, 2600, 1200, 1700, 700, 900],
            }],
            labels: ['01/23', '02/23', '03/23', '04/23', '05/23', '06/23', '07/23', '08/23', '09/23', '10/23']
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },

            plugins: {
                title: {
                    font: {
                        size: 24
                    },
                    display: true,
                    text: 'Custom Chart Title'
                },
                legend: {
                    display: true,
                    labels: {
                        font: {
                            size: 10
                        }
                    }
                }
            }
        }
    });

    new Chart(ctx3, {
        type: 'bar',
        data: {
            datasets: [{
                type: 'bar',
                label: 'Base 1',
                data: [10000, 7000, -3000, 8000, 11000, 18000, 9000, 18000, 4000, 7000]
            }, {
                type: 'bar',
                label: 'Base 2',
                data: [1200, 2000, 700, 1000, 1900, 1050, 900, 450, -1500, -500],
            }, {
                type: 'bar',
                label: 'Base 3',
                data: [3200, 1905, 4750, 1600, -1400, 2100, -3200, 14000, 1300, 1200],
            }, {
                type: 'bar',
                label: 'Base 4',
                data: [4000, -2000, -1500, 6000, 1400, 3400, 2000, 1800, 1700, 9500],
            }, {
                type: 'bar',
                label: 'Base 5',
                data: [12000, 8000, 7500, -2000, 2500, 1000, 1800, -550, 1000, -700],
            }],
            labels: ['01/23', '02/23', '03/23', '04/23', '05/23', '06/23', '07/23', '08/23', '09/23', '10/23']
        },
        options: {
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true
                }
            },
            layout: {
                padding: 14
            },
            plugins: {
                title: {
                    font: {
                        size: 24
                    },
                    display: true,
                    text: 'Custom Chart Title'
                },
                responsive: true,
                legend: {
                    display: true,
                    labels: {
                        font: {
                            size: 16
                        }
                    }
                }
            }
        }
    });
});
