import moment from 'moment';
console.log(3);

const YMDHms = 'YYYY-MM-DD HH:mm:ss';
/* 
  @value 传入值，moment可以接受的值
 */
export function formatDate(value, format = YMDHms, emptyPlaceholder = '') {
  if(!value) {
    return emptyPlaceholder;
  }

  const newVal = moment(value)
  if(!newVal.isValid()){ 
    return emptyPlaceholder;
  }

  return newVal.format(format ? format : YMDHms);
}

export function objectToArray(object, mapFn) {
  return Object.keys(object || {}).map(key => mapFn(key, object[key]));
};

export default { }
