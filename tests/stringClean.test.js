const { stringClean } = require('../stringClean');

describe('testing stringClean function', function () {
  test('string with numeric characters', function () {
    const testCases = [
      { string: '0123456789', result: '' },
      { string: '000991111333335555567764444435111199', result: '' },
      { string: ' 0987654  312 345 ', result: '     ' },
      { string: '0 9a8b7c6$5""4``3$2_1', result: ' abc$""``$_' },
      { string: '123sadfgh#$%^&7890', result: 'sadfgh#$%^&' },
      { string: '5', result: '' },
    ];
    testCases.forEach((item) => {
      expect(stringClean(item.string)).toBe(item.result);
    });
  });
  test('string without numeric characters', function () {
    const testCases = [
      {
        string: `abcdefghijklmnopqrstuvwxyz~#$%^&!@*():;"'.,?`,
        result: `abcdefghijklmnopqrstuvwxyz~#$%^&!@*():;"'.,?`,
      },
      { string: ` xyz~#$%^&!@*():;"'.,? `, result: ` xyz~#$%^&!@*():;"'.,? ` },
      {
        string: 'mnopqrs tuv   wxyz~#$   %^&!',
        result: 'mnopqrs tuv   wxyz~#$   %^&!',
      },
      { string: 'G', result: 'G' },
      { string: '!', result: '!' },
      { string: '*', result: '*' },
    ];
    testCases.forEach((item) => {
      expect(stringClean(item.string)).toBe(item.result);
    });
  });
  test('empty string', function () {
    const testCases = [
      { string: '', result: '' },
      { string: ' ', result: ' ' },
      { string: '     ', result: '     ' },
    ];
    testCases.forEach((item) => {
      expect(stringClean(item.string)).toBe(item.result);
    });
  });
});
