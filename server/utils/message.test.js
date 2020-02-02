var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', (res) => {
  it('should generate the correct message object', () => {
    var from = 'AGS';
    var text = 'Wassup nigs';
    var res = generateMessage(from, text);
    expect(res.from).toBe(from);
    expect(res.text).toBe(text);
    expect(typeof res.createdAt).toBe('number');
  });
});

describe('generateLocationMessage', (res) => {
  it('should generate correct location object', () => {
    var from = 'Admin';
    var latitude = 1;
    var longitude = 1;
    var res = generateLocationMessage(from, latitude, longitude);
    expect(res.from).toBe(from);
    expect(res.url).toBe('https://www.google.com/maps?q=1,1');
    expect(typeof res.createdAt).toBe('number');
  });
});
