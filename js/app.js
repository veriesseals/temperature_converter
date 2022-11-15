function tempConverter(tempNum) {
    tempNum = parseFloat(tempNum);
    document.getElementById('outputFahrenheit').innerHTML = (tempNum * 1.8) +32;
    document.getElementById('outputKelvin').innerHTML = (tempNum + 273.15);
    document.getElementById('outputRankine').innerHTML = (tempNum * 9/5 + 491.67);
    document.getElementById('outputNewton').innerHTML = (tempNum * 0.33000);
}

