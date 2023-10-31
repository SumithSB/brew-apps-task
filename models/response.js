responses = {};

responses.model1 = (result, status) => {
  return {
    result: result,
    status: status,
  };
};


responses.model2 = (result) => {
  return {
    data: result,
    total: 3
  };
};


module.exports = responses;
