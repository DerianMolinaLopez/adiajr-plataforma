import dayjs from 'dayjs';

 const conversionFecha = (isoDate: string): string => {
  return dayjs(isoDate).format('DD/MM/YY');
};
export default conversionFecha;