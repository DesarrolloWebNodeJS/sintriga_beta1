var secrets = require('../config/secrets');

module.exports = {
  mongods: {
    connector: 'mongodb',
    connectionTimeout: 10000,
    url: secrets.mongods
  }
  // ,
  // mail: {
  //   connector: 'mail',
  //   transport: {
  //     type: 'ses',
  //     accessKeyId: process.env.SES_ID,
  //     secretAccessKey: process.env.SES_SECRET
  //   }
  // }
};
