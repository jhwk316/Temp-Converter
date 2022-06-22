function convertToFahrenheit(cels){
    let F = (document.getElementById('degC').value *1.8) + 32;
    document.getElementById('toF').innerHTML = Math.round(F * 10) / 10 + ' °F';
}

function convertToCelsius(fahr){
    let C = (document.getElementById('degF').value - 32) / 1.8;
    document.getElementById('toC').innerHTML = Math.round(C *10) / 10 + ' °C';
}