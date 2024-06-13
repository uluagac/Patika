function circleArea(r) {
    return (Math.PI * (r ** 2)).toFixed(2);
}

function circleCircumference(r) {
    return (2 * Math.PI * r).toFixed(2);
}

module.exports = {
    circleArea,
    circleCircumference
}