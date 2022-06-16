exports.formatMoney = function formatMoney(amount) {
  if (typeof amount !== 'number') return 'amount should be a number';
  if (isNaN(amount)) return 'amount should not be equal to NaN';
  if (amount >= Number.MAX_VALUE) return 'amount is too large';
  if (amount <= -Number.MAX_VALUE) return 'amount is too small';
  if (amount < 0) return `-$${Math.abs(amount).toFixed(2)}`;
  return `$${amount.toFixed(2)}`;
};
