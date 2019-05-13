import moment from 'moment';

const YMDHms = 'YYYY-MM-DD HH:mm:ss';
export function formatDate(value, format = YMDHms, emptyPlaceholder = '') {
  if(!value) {
    return emptyPlaceholder;
  }

  const newVal = moment(value)
  if(!newVal.isValid()){ 
    return emptyPlaceholder;
  }

  return newVal.format(format);
}

export function objectToArray(object, mapFn) {
  return Object.keys(object || {}).map(key => mapFn(key, object[key]));
};

export default { }