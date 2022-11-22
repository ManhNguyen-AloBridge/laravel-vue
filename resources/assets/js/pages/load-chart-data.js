window.onload = function() {

    const ctx = document.getElementById('barChart');

    Chart.register(ChartDataLabels);
    Chart.defaults.set('plugins.datalabels', {
        color: '#000'
    });
    $.ajax({
            'url': '/load-chart-data',
            'method': 'GET'
        })
        .done((data) => {
            const myChart = new Chart(ctx, {
                plugins: [ChartDataLabels],
                data: {
                    labels: data.skillName,
                    datasets: [{
                        type: 'bar',
                        label: 'Users/Skill',
                        data: data.userPerSkill,
                        backgroundColor: [
                            'rgba(81, 153, 196, 0.8)'
                        ],
                        borderColor: [
                            'rgb(81, 153, 196)'
                        ],
                        borderWidth: 1,
                        datalabels: {
                            align: 'end',
                            anchor: 'end',
                            font: { weight: '400' },
                            color: '#444',
                        }
                    }],
                },
                options: {
                    responsive: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            suggestedMax: Math.max(...data.userPerSkill) + 1
                        }
                    },
                    plugins: {
                        datalabels: {
                            formatter: (value, ctx) => {
                                const total = data.userTotal
                                const percentage = value / total * 100
                                return percentage.toFixed(2) + "%";
                            },
                            color: '#fff',
                        }
                    }
                }
            });
        })
        .fail(() => {
            console.log("Could not load chart data");
        });
};
