const axiosError = require('./axiosError');

const consoleError = (error) => {
  const axiosErr = axiosError(error);

  if (axiosErr) {
    console.error(axiosErr);
    return;
  }

  console.error(error);
};

module.exports = consoleError;
