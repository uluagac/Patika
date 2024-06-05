const PI = 3.14159265359;
let radius = Number(process.argv.slice(2));
function calculateArea(radi) {
    let circleArea = PI * (radius ** 2);
    console.log(`Yarıçapı ${radius} olan dairenin alanı: ${circleArea.toFixed(2)}`)
}
calculateArea();