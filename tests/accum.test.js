const { accum } = require('../accum');

describe('testing accum function', function () {
  test('testing with different types of characters', function () {
    const testCase = [
      { string: 'QWERTY', result: 'Q-Ww-Eee-Rrrr-Ttttt-Yyyyyy' },
      { string: 'qwerty', result: 'Q-Ww-Eee-Rrrr-Ttttt-Yyyyyy' },
      {
        string: 'OADFjhHopP',
        result:
          'O-Aa-Ddd-Ffff-Jjjjj-Hhhhhh-Hhhhhhh-Oooooooo-Ppppppppp-Pppppppppp',
      },
      {
        string: 'sdfTYhjkl',
        result: 'S-Dd-Fff-Tttt-Yyyyy-Hhhhhh-Jjjjjjj-Kkkkkkkk-Lllllllll',
      },
      { string: 'G', result: 'G' },
      { string: 'j', result: 'J' },
      { string: 'BC', result: 'B-Cc' },
      { string: 'nm', result: 'N-Mm' },
      {
        string: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        result:
          'A-Bb-Ccc-Dddd-Eeeee-Ffffff-Ggggggg-Hhhhhhhh-Iiiiiiiii-Jjjjjjjjjj-Kkkkkkkkkkk-Llllllllllll-Mmmmmmmmmmmmm-Nnnnnnnnnnnnnn-Ooooooooooooooo-Pppppppppppppppp-Qqqqqqqqqqqqqqqqq-Rrrrrrrrrrrrrrrrrr-Sssssssssssssssssss-Tttttttttttttttttttt-Uuuuuuuuuuuuuuuuuuuuu-Vvvvvvvvvvvvvvvvvvvvvv-Wwwwwwwwwwwwwwwwwwwwwww-Xxxxxxxxxxxxxxxxxxxxxxxx-Yyyyyyyyyyyyyyyyyyyyyyyyy-Zzzzzzzzzzzzzzzzzzzzzzzzzz',
      },
      {
        string: 'abcdefghijklmnopqrstuvwxyz',
        result:
          'A-Bb-Ccc-Dddd-Eeeee-Ffffff-Ggggggg-Hhhhhhhh-Iiiiiiiii-Jjjjjjjjjj-Kkkkkkkkkkk-Llllllllllll-Mmmmmmmmmmmmm-Nnnnnnnnnnnnnn-Ooooooooooooooo-Pppppppppppppppp-Qqqqqqqqqqqqqqqqq-Rrrrrrrrrrrrrrrrrr-Sssssssssssssssssss-Tttttttttttttttttttt-Uuuuuuuuuuuuuuuuuuuuu-Vvvvvvvvvvvvvvvvvvvvvv-Wwwwwwwwwwwwwwwwwwwwwww-Xxxxxxxxxxxxxxxxxxxxxxxx-Yyyyyyyyyyyyyyyyyyyyyyyyy-Zzzzzzzzzzzzzzzzzzzzzzzzzz',
      },
    ];
  });
});
