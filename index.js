const makeNuclearButton = () => {
  let timeWithoutDesctruction = 0;
  const passedTime = () => timeWithoutDesctruction++;
  const totalPeaceTime = () => timeWithoutDesctruction;
  const launch = () => {
    timeWithoutDesctruction = -1;
    return "boom";
  };
  setInterval(passedTime, 1000);
  return {
    launch: launch,
    totalPeaceTime: totalPeaceTime
  };
};

const ohno = makeNuclearButton()
ohno.totalPeaceTime()
