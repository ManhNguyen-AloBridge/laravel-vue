import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const blue = '#143268';
const grey = '#dce1e8';

export default class BarChart {
	chart;
	context;
	datasets = [];
	remainDatasets = [];
	labels = [];
	backgroundColors = [];
	showRemain = false;
	chartElementClickCallback = () => {};

	constructor(id) {
		const canvasElement = document.getElementById(id);
		this.context = canvasElement.getContext('2d');
	}

	render({ datasets, labels, remainDatasets, showRemain }) {
		this.datasets = datasets;
		this.labels = labels;
		this.remainDatasets = remainDatasets;
		this.showRemain = showRemain;
		if (this.chart) {
			this._updateChart();
		} else {
			this._renderChart();
		}
	}

	_renderChart() {
		const that = this;
		this.chart = new Chart(this.context, {
			data: {
				labels: this.labels,
				datasets: [
					{
						label: '人',
						data: this.datasets,
						backgroundColor: [blue],
						maxBarThickness: 20,
						borderRadius: 2,
						datalabels: {
							labels: {
								value: {
									display: false,
								},
							},
						},
					},
					{
						label: '人',
						data: this.remainDatasets,
						backgroundColor: grey,
						maxBarThickness: 20,
						borderRadius: 2,
						datalabels: {
							labels: {
								title: {
									color: blue,
									align: 'end',
									anchor: 'end',
									font: {
										size: 14,
										weight: 'bold',
									},
									formatter(value, context) {
										const firstDataset =
											context.chart.data.datasets[0].data;
										const firstValue =
											firstDataset[context.dataIndex] ??
											0;
										if (value + firstValue == 0) return '';
										return ` ${firstValue}${
											that.showRemain ? '' : '人'
										}`;
									},
								},
								value: {
									color: grey,
									align: 'end',
									anchor: 'end',
									font: {
										size: 14,
										weight: 'bold',
									},
									formatter(value, context) {
										const firstDataset =
											context.chart.data.datasets[0].data;
										const firstValue =
											firstDataset[context.dataIndex] ??
											0;
										if (
											value + firstValue == 0 ||
											!that.showRemain
										) {
											return '';
										}

										return ` ${firstValue}/${
											value + firstValue
										}人`;
									},
								},
							},
						},
					},
				],
			},
			plugins: [ChartDataLabels],
			type: 'bar',
			backgroundColor: [blue],
			options: {
				maintainAspectRatio: false,
				aspectRatio: 2.5,
				events: ['click'],
				onClick: async function (chartEvent, activeElement, chart) {
					let activeIndex = -1;
					if (activeElement.length == 0) {
						chart.data.datasets[0].backgroundColor = [blue];
					} else {
						activeIndex = activeElement[0].index;
						const backgroundColors = Array.from(
							{ length: that.labels.length },
							(_, i) => grey
						);
						backgroundColors[activeIndex] = blue;
						chart.data.datasets[0].backgroundColor =
							backgroundColors;
					}
					await that.chartElementClickCallback(activeIndex);
					chart.update();
				},
				indexAxis: 'y',
				layout: {
					padding: {
						right: 50,
					},
				},
				plugins: {
					legend: {
						align: 'end',
						labels: {
							usePointStyle: true,
							display: false,
							font: {
								size: 0,
							},
							filter: function (item) {
								return !item.text.includes('人');
							},
						},
						title: {
							display: true,
							text: `(人)`,
							position: 'end',
							color: '#d9d9d9',
							font: {
								size: 10,
								weight: 'medium',
							},
						},
					},
					tooltip: {
						enabled: false,
					},
				},
				scales: {
					x: {
						stacked: true,
						ticks: {
							precision: 0,
						},
					},
					y: {
						stacked: true,
						grid: {
							color: function (context) {
								if (
									context.index == 0 ||
									context.type === 'scale'
								) {
									return '#ededed';
								}
							},
						},
						ticks: {
							precision: 0,
							beginAtZero: true,
						},
					},
				},
			},
		});
	}

	_updateChart() {
		this.chart.data.labels = this.labels;
		this.chart.data.datasets[0].data = this.datasets;
		this.chart.data.datasets[1].data = this.remainDatasets;
		this.chart.data.datasets[0].backgroundColor = [blue];
		this.chart.update();
	}

	update() {
		this.chart.update();
	}

	bindChartElementClickEvent(callback) {
		this.chartElementClickCallback = callback;
	}

	resetFocus() {
		this.chart.data.datasets[0].backgroundColor = [blue];
		this.chart.update();
	}
}
