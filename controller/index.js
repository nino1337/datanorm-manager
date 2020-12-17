exports.getDatanorm = (req, res) => {
  res.status(200).send("requested datanorm");
};

exports.createDatanorm = (req, res) => {
  console.log(req.body);
  res.sendStatus(201);
};

exports.deleteDatanorm = (req, res) => {
  res.status(200).send("deleted datanorm");
};
