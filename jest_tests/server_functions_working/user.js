// This module is supposed to fetch user data from an API
// and return the user name
// We expect this to return a promise
import request from './request';

export function getUserName(userID) {
  return request(`/users/${userID}`).then(user => user.name);
}
