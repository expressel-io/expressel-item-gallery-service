// This is our test file. We tell just to use the mock version on line 4
import * as user from '../server_functions_working/user';

jest.mock('../server_functions_working/request');


// The assertion for a promise must be returned.
it('works with promises', () => {
  expect.assertions(1);
  return user.getUserName(4).then(data => expect(data).toEqual('Mark'));
});
