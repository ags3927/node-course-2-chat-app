const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', (res) => {

  it('should reject non-string values', () => {
    var str  = 123;
    expect(isRealString(str)).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var str = '   ';
    expect(isRealString(str)).toBe(false);
  });

  it('should allow strings with non-space characters', () => {
    var str = 'string';
    expect(isRealString(str)).toBe(true);
  })

});
