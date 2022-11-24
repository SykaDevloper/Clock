const secondsHand = document.querySelector(".hand.seconds");
const minutesHand = document.querySelector(".hand.minutes");
const hourHand = document.querySelector(".hand.hours");

const setRotation = (element, rotationPercentage) => {
  element.style.setProperty("--rotation", rotationPercentage * 360);
};
const setClock = () => {
  const currentDate = new Date();

  const secondsPercentage = currentDate.getSeconds() / 60;
  const minutesPercentage = (secondsPercentage + currentDate.getMinutes()) / 60;
  const hourPercentage = (minutesPercentage + currentDate.getHours()) / 12;

  setRotation(hourHand, hourPercentage);
  setRotation(minutesHand, minutesPercentage);
  setRotation(secondsHand, secondsPercentage);
};

setClock();

setInterval(setClock, 1000);
