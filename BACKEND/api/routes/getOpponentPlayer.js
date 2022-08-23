module.exports = (req, res) => {
  const { userId } = req.body;
  const playerDetail = {
    name: "Dp shetty",
    points: 1000,
  };
  const playerFound = true;

  for (let i = 0; i < 500000070; i++) {}
  res.send({ playerDetail, playerFound });
};
