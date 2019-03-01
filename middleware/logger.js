const moment = require('moment');

<<<<<<< HEAD
// req and res are objects
=======
// Date.now()
// moment()

// req, res are objects
>>>>>>> c24f5416adae537c618cfe70e39c44409c66d033
// next is a callback function
const logger = (req, res, next) => {
  console.log(`${req.url} was requested at ${moment()}`);
  next();
};

<<<<<<< HEAD
module.exports = logger;
=======
module.exports = logger;
>>>>>>> c24f5416adae537c618cfe70e39c44409c66d033
