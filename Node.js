const crypto = require('crypto');
console.log('Crypto module methods:');
console.log(Object.getOwnPropertyNames(crypto));
const randomID = crypto.randomBytes(16).toString('hex');
console.log(`Random ID: ${randomID}`);
