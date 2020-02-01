var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', (res) => {
    it('should generate the correct message object', () => {
      var from = 'AGS';
      var text = 'Wassup nigs'
      var res = generateMessage(from, text);
      expect(res.from).toBe(from);
      expect(res.text).toBe(text);
      expect(typeof res.createdAt).toBe('number');
    })
});
