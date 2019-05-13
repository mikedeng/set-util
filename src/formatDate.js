import moment from 'moment';

const YMDHms = 'YYYY-MM-DD HH:mm:ss';
export default (value, format = YMDHms, emptyPlaceholder = '') => {
  if(!value) {
    return emptyPlaceholder;
  }

  const newVal = moment(value)
  if(!newVal.isValid()){ 
    return emptyPlaceholder;
  }

  return newVal.format(format);
}