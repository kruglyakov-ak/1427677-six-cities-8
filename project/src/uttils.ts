const getRatingStarsWidth = (rating: number): number => (20 * Math.round(rating));
const getRandomNumberInRange = (min = 0, max = 1, numberSymbolsAfterComma = 0): number => {
  const lower = Math.min(Math.abs(min), Math.abs(max));
  const upper = Math.max(Math.abs(min), Math.abs(max));
  const randomNumber = Math.random() * (upper - lower) + lower;
  return +randomNumber.toFixed(numberSymbolsAfterComma);
};

export { getRatingStarsWidth, getRandomNumberInRange };
