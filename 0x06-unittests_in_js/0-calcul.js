const calculateNumber = (a, b) => {
  const aOfRound = Math.round(a);
  const bOfRound = Math.round(b);

  return aOfRound + bOfRound;
};

module.exports = calculateNumber;
