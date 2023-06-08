console.log(false || 'name' === 'name');
console.log(true && '0' === '0');
console.log(true || 0 === true);
console.log(false && 100 === false);
// --------------------------------------------------
condition ? whenTrue : whenFalse;
если нужно вернуть тоько whenTrue:
condition && whenTrue
// --------------------------------------------------