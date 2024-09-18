export const formatNumber = num => {
  const max = 90000;
  if (num > 90000) return max.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
