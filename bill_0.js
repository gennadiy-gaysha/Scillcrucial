// function splitTheBill(moneySplitted) {
//   const amountPerPerson =
//     (moneySplitted.A + moneySplitted.B + moneySplitted.C) / 3;

//   const moneyOwed = {
//     ...moneySplitted,
//     A: moneySplitted.A - amountPerPerson,
//     B: moneySplitted.B - amountPerPerson,
//     C: moneySplitted.C - amountPerPerson,
//   };
//   return moneyOwed;
// }

// console.log(
//   splitTheBill({
//     A: 40,
//     B: 25,
//     C: 10,
//   })
// );

exports.splitTheBill = function splitTheBill(moneySplitted) {
  let count = 0;
  if (Object.keys(moneySplitted).length === 0) {
    return 'there should be at least one member to split the bill';
  }
  for (let key in moneySplitted) {
    if (typeof moneySplitted[key] !== 'number') {
      return 'all the key values should be numbers';
    }
    if (moneySplitted[key] < 0) {
      return 'key value should be positive number or 0, but not negative number';
    }
    if (isNaN(moneySplitted[key])) {
      return 'key value should be a positive number or 0, and not be equal to NaN';
    }

    count += moneySplitted[key];
  }
  const amountPerPerson = count / Object.keys(moneySplitted).length;

  for (let val of Object.keys(moneySplitted)) {
    if (amountPerPerson % 1 === 0) moneySplitted[val] -= amountPerPerson;
    else
      moneySplitted[val] =
        (moneySplitted[val] - amountPerPerson).toFixed(2) / 1;
  }
  return moneySplitted;
};
console.log(
  this.splitTheBill({
    A: 1.2345,
    B: 2.3456,
  })
);
