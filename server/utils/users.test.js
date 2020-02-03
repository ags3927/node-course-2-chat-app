const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'mahir',
      room: 'football'
    }, {
      id: '2',
      name: 'gourab',
      room: 'gaming'
    }, {
      id: '3',
      name: 'emran',
      room: 'football'
    }]
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'ags',
      room: 'vodoxen'
    };
    var resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it('should return names for football room', () => {
    var userList = users.getUserList('football');
    expect(userList).toEqual(['mahir', 'emran']);
  });

  it('should return names for gaming room', () => {
    var userList = users.getUserList('gaming');
    expect(userList).toEqual(['gourab']);
  });

  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);
    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    var userId = '4';
    var user = users.removeUser(userId);
    expect(user).toBe();
  });

  it('should find user', () => {
    var userId = '1';
    var user = users.getUser(userId);
    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    var userId = '4';
    var user = users.getUser(userId);
    expect(user).toBe(undefined);
  });

});
