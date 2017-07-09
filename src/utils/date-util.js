
function getValidDateForApi(year, month, day) {
  const SEPARATOR = '-';
  const fullMonth = getTwoDigitValue(month + 1);
  const fullDay = getTwoDigitValue(day);
  return year + SEPARATOR + fullMonth + SEPARATOR + fullDay;
}

function getValidDateForApiFromDateObject(date) {
  const SEPARATOR = '-';
  const fullMonth = getTwoDigitValue(date.getMonth() + 1);
  const fullDay = getTwoDigitValue(date.getDate());
  return date.getUTCFullYear() + SEPARATOR + fullMonth + SEPARATOR + fullDay;
}

function getTwoDigitValue(value) {
  return value > 9 ? value : '0' + value;
}

function getTodayDate() {
  const d = new Date();
  return getValidDateForApi(d.getUTCFullYear(), d.getMonth(), d.getDate());
}

function getDateForToolbarDisplay(date) {
  return date.getMonth() + 1 + '/' + date.getDate();
}

export default {
  getValidDateForApiFromDateObject,
}
