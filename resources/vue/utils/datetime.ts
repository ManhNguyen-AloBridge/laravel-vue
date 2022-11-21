import dayjs from 'dayjs';

export const DATE_FORMAT = 'YYYY/MM/DD';
export const TIME_FORMAT = 'H:i';
export const DATE_TIME_FORMAT = 'YYYY/MM/DD H:i';

function date(dateTime: string) {
  return format(dateTime, DATE_FORMAT);
}

function time(dateTime: string) {
  return format(dateTime, TIME_FORMAT);
}

function dateTime(dateTime: string) {
  return format(dateTime, DATE_TIME_FORMAT);
}

function format(dateTime: string, format: string) {
  return dateTime ? dayjs(dateTime).format(format) : '';
}

export default {
  DATE_FORMAT,
  TIME_FORMAT,
  DATE_TIME_FORMAT,
  date,
  time,
  dateTime,
  format,
};
