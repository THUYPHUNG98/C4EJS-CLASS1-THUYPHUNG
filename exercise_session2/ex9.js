let weight = Number(prompt('Your weight in kg?'));
let height = Number(prompt('Your height in cm?'))/100;
let BMI = ((weight)/(height*height)).toFixed(1);
alert(`Your BMI is ${BMI}`);
if(BMI < 16) {
    alert('You are severely underweight');
} else if(BMI < 18.5) {
    alert('You are underweight');
} else if(BMI < 25) {
    alert('You are normal');
} else if(BMI < 30) {
    alert('You are over weight');
} else {
    alert('You are obese');
}