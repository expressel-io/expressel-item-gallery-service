// Since we dont want to go to the network in our test,
// We create this mock file.
// This will contain the 'request' function that is called in the test.
// NOTE: be careful about naming conventions - they need to match
const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' },
};

export default function request(url) {
  return new Promise((resolve, reject) => {
    const userID = parseInt(url.substr('/users/'.length), 10);
    process.nextTick(() => {
      if (users[userID]) {
        resolve(users[userID]);
      } else {
        reject(new Error(`User with ${userID} not found`));
      }
    });
  });
}
