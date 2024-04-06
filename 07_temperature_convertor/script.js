let c=document.getElementById("celsius");
let f=document.getElementById("fahrenheit");
let k=document.getElementById("kelvin");
// let b=document.getElementById("btn");
// let o=document.getElementById("output");


function calTemp(event) {
    const currentVal = parseFloat(event.target.value); // Parsing the value as float

    switch (event.target.name) {
        case "celsius":
            f.value = (currentVal * 1.8 + 32).toFixed(2); // Celsius to Fahrenheit
            k.value = (currentVal + 273.15).toFixed(2); // Celsius to Kelvin
            break;

        case "fahrenheit":
            c.value = ((currentVal - 32) / 1.8).toFixed(2); // Fahrenheit to Celsius
            k.value = (((currentVal - 32) / 1.8) + 273.15).toFixed(2); // Fahrenheit to Kelvin
            break;

        case "kelvin":
            c.value = (currentVal - 273.15).toFixed(2); // Kelvin to Celsius
            f.value = ((currentVal - 273.15) * 1.8 + 32).toFixed(2); // Kelvin to Fahrenheit
            break;
    }
}

