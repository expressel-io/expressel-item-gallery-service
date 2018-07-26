// This module is supposed to fetch user data from an API
// and return the user name
// We expect this to return a promise
import serverRequest from './server_request';

export function getMacBookData() {
  return serverRequest('/app/home').then(macBookProData => macBookProData);
}

export function getDummyData() {
  return serverRequest('app/product/50').then(dummyData => dummyData);
}
