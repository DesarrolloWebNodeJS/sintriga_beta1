const cookieParser = require('cookie-parser');

const cookieSecret = process.env.COOKIE_SECRET;


module.exports = function cookiesMiddleware() {
  return cookieParser(cookieSecret);
};

console.log('====================================');
console.log('+ MIDDLEWARE: [CookieParser]');
console.log('====================================');
