// export class TypeOfError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = 'TypeOfError';
//   }
// }
// export class TypeOfError1 extends Error {
//   constructor(message) {
//     super(message);
//     this.name = 'TypeOfError1';
//   }
// }
// export class TypeOfError2 extends Error {
//   constructor(message) {
//     super(message);
//     this.name = 'TypeOfError2';
//   }
// }

function TypeOfError(message) {
  this.name = 'TypeOfError';
  this.message = message;
  this.stack = new Error().stack;
}
TypeOfError.prototype = new Error();
module.exports = { TypeOfError };

// exports = { TypeOfError, TypeOfError1, TypeOfError2 };
