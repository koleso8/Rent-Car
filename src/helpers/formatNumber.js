export const formatNumber = num => {
  if (num > 90000) return 90000;
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
