// "Are You Old Enough?" program
var age = 10;
if (age >= 65) {
    console.log("You get your income from your pension");
} else if (age < 65 && age >= 18) {
    console.log("Each month you get a salary");
} else if (age < 18) {
    console.log("You get an allowance");
} else {
    console.log("The value of the age variable is not numerical");
}


// "Days of the week" program
var day = "Sunday";
switch(day) {
    case 'Monday':
        console.log('Go to work then go home and study');
        break;
    case 'Tuesday':
        console.log('Go to work then go home and study');
        break;
    case 'Wednesday':
        console.log('Go to work then go home and study');
        break;
    case 'Thursday':
        console.log('Go to work then go home and study');
        break;
    case 'Friday':
        console.log('Go to work then go home and study');
        break;
    case 'Saturday':
        console.log('Stay home and study');
        break;
    case 'Sunday':
        console.log('Stay home and study');
        break;
    default:
        console.log('The value of the day is invalid');
        break;
}