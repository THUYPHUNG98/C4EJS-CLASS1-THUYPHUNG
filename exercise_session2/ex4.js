let age = prompt('How old are you?');
while(age <= 0) {
    age = prompt('Your age must be greater than 0, enter again!'); 
}
if(age < 14) {
    alert("You're not old enough to view this content");
} else {
    alert('Enjoy!');
}