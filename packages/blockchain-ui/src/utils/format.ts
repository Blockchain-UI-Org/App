import numbro from 'numbro';

// Check whether value can be converted to a usable number
export const isNumeric = (obj: any) => {
  return !Number.isNaN(parseFloat(obj)) && Number.isFinite(Number(obj));
};

export const formatNumber = (
  number: number | null,
  decimal = 2,
  average = true,
  threshold = 0,
  dropTailingNumber = false
) => {
  const value = number && isNumeric(number) ? number : 0;
  if (value > 0 && value < threshold) {
    return `<${threshold}`;
  }
  const basicFormat = {
    thousandSeparated: true,
    mantissa: decimal,
    optionalMantissa: true,
    roundingFunction: dropTailingNumber ? Math.floor : Math.round,
  };
  const format =
    Math.floor(value).toString().length > 6 ? { ...basicFormat, average } : basicFormat;
  return numbro(value).format(format).toUpperCase();
};
