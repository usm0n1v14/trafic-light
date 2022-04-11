const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const green = document.querySelector(".green");

const traficLight = () => {
  setTimeout(() => {
    red.style.backgroundColor = "red";
    yellow.style.backgroundColor = "#EFEFEF";
  }, 2000);

  setTimeout(() => {
    red.style.backgroundColor = "#EFEFEF";
    yellow.style.backgroundColor = "yellow";
  }, 12000);

  setTimeout(() => {
    yellow.style.backgroundColor = "#EFEFEF";
    green.style.backgroundColor = "green";
  }, 14000);

  setTimeout(() => {
    green.style.backgroundColor = "#EFEFEF";
    yellow.style.backgroundColor = "yellow";
  }, 24000);
};

const runTraficLigth = () => {
  setInterval(() => {
    traficLight();
  }, 24000);
};

traficLight();
runTraficLigth();
