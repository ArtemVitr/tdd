const getFactorialFromExternalService = require('./externalService');

async function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    const result = await getFactorialFromExternalService(n - 1);
    return n * result;
  }
}

module.exports = factorial;