const {circleArea, circleCircumference} = require('./circle.js');

let radius = process.argv[2];
let area = circleArea(radius);
let circumference = circleCircumference(radius);

console.log(`Dairenin Yarıçapı 5`);
console.log(`Dairenin Alanı: ${area}`);
console.log(`Dairenin Çevresi ${circumference}`)