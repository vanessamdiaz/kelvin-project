// create a variable named kelvin that will stay constant
const kelvin = 293;
// create a variable named celsius that subtracts 273 from kelvin
var celsius = kelvin - 273;
// create a variable named fahrenheit that uses this equation to calculate
var fahrenheit = celsius * (9/5) + 32;
// use the floor method to round down the fahrenheit temperature
var temperature = Math.floor(fahrenheit);
temperature = (`The temperature is ${temperature} degrees Farenheit.`);
console.log(temperature)
// When kelvin is 0, the temperature is -460 degrees Farenheit.

// create a variable named newton that uses this equation to calculate
var newton = celsius * (33/100);
// use the floor method to round down the newton temperature
var newTemperature = Math.floor(newton);
newTemperature = (`The temperature is ${newTemperature} degrees Newton.`);
console.log(newTemperature);
