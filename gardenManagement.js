const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;

if (temperature > 80) {
  console.log(`Watering on`);
}
console.log(`Watering off`);

if (timeOfDay !== `morning`) {
  console.log(`Lights on`);
}
console.log(`Lights off`);

while (soilMoisture <= 40) {
  console.log(soilMoisture);
  soilMoisture = soilMoisture + 5;
}
