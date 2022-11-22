/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************************************!*\
  !*** ./resources/assets/js/pages/load-chart-data.js ***!
  \******************************************************/
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
window.onload = function () {
  var ctx = document.getElementById('barChart');
  Chart.register(ChartDataLabels);
  Chart.defaults.set('plugins.datalabels', {
    color: '#000'
  });
  $.ajax({
    'url': '/load-chart-data',
    'method': 'GET'
  }).done(function (data) {
    var myChart = new Chart(ctx, {
      plugins: [ChartDataLabels],
      data: {
        labels: data.skillName,
        datasets: [{
          type: 'bar',
          label: 'Users/Skill',
          data: data.userPerSkill,
          backgroundColor: ['rgba(81, 153, 196, 0.8)'],
          borderColor: ['rgb(81, 153, 196)'],
          borderWidth: 1,
          datalabels: {
            align: 'end',
            anchor: 'end',
            font: {
              weight: '400'
            },
            color: '#444'
          }
        }]
      },
      options: {
        responsive: false,
        scales: {
          y: {
            beginAtZero: true,
            suggestedMax: Math.max.apply(Math, _toConsumableArray(data.userPerSkill)) + 1
          }
        },
        plugins: {
          datalabels: {
            formatter: function formatter(value, ctx) {
              var total = data.userTotal;
              var percentage = value / total * 100;
              return percentage.toFixed(2) + "%";
            },
            color: '#fff'
          }
        }
      }
    });
  }).fail(function () {
    console.log("Could not load chart data");
  });
};
/******/ })()
;