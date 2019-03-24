module.exports.checkAppVersion = (SECURITY) => {
  return (req, res) => {
    res.status(200).send({
      appVersion: SECURITY.appVersion
    });
  };
};
