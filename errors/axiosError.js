const axiosError = (error) => {
  if (!error.isAxiosError) return;

  return {
    type: 'AxiosError',
    message: error.response?.data?.detail || error.message,
    status: error.response?.status,
    url: error.config?.url,
    method: error.config?.method,
  };
};

module.exports = axiosError;
