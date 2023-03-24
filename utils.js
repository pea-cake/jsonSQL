function getObjectType(obj) {
  return Object.prototype.toString.call(obj);
}
function isDate(obj) {
  return getObjectType(obj) === '[object Date]';
}
function isString(obj) {
  return getObjectType(obj) === '[object String]';
}
function isDateString(obj) {
  var res = false;
  if (isString(obj)) {
    var reg = /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/;
    res = reg.test(obj)
  }
  return res
}
function isNumber(obj) {
  return typeof obj === 'number'
}
function parseDateFromString(str) {
  return Date.parse(str)
}
module.exports = {
  getObjectType: getObjectType,
  isDate: isDate,
  isString: isString,
  isDateString: isDateString,
  parseDateFromString: parseDateFromString,
  isNumber: isNumber
}
