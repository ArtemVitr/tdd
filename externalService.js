function getFactorialFromExternalService(n) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(factorial(n));
      }, 100);
    });
  }
  
  module.exports = getFactorialFromExternalService;