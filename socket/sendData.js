var sendData = (lat, lng) => {
  return {
    lat,
    lng,
    created_at: new Date().getTime()
  };
};

module.exports = {
  sendData
};
