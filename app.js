
//for console.log.........................................................


//function bmiCalculator(weight, height){
// var  bmi = weight / (height * height);
//var bmiNO = Math.round(bmi);
//var result = `Your BMI calculator is ${bmiNO}`
// console.log(result);
//}

//bmiCalculator(65, 1.8);

//for alert................................................................

//var weight = parseFloat(prompt("Enter your weight"));
//var height= parseFloat(prompt("Enter your height"));

//function bmiCalculator() {
  //  var output = weight / (height * height);
   // var result = Math.round(output);
  // var BMIresult = "Your BMI Calculation is " + result;
  //  alert(BMIresult);

//}
//bmiCalculator(weight, height);

// assignment 21.......................................................................

//var bmical = document.getElementById("bmical")
//function bmiCalculator(weight, height) {
 // var bmi = weight / (height * height);
 // var bmiNO = Math.round(bmi);
 // var result;

 //  if(bmiNO < 18.5) {
// return  `Your BMI calculation is  ${bmiNO}, So you have a normal weight.`;
 //}  

 //  else if(bmiNO >= 18.5 && bmiNO <=24.9) {
  //return `Your BMI calculation is  ${bmiNO}, So you are overweight.`;
 //}

 //  else if(bmiNO > 24.9 ) {
 // return `Your BMI calculation is  ${bmiNO}, So you are underweight.`;

 //}

 //}

//var result = bmiCalculator(65, 1.8)
//bmical.innerHTML= result

//for console.log.................................................................................

 //function bmiCalculator(weight, height) {
  //var bmi = weight / (height * height);
  //var bmiNO = Math.round(bmi);
 // var result;

  // if(bmiNO < 18.5) {
 // console.log ( `Your BMI calculation is  ${bmiNO}, So you have a normal weight.`);
 //}  

 //  else if(bmiNO >= 18.5 && bmiNO <=24.9) {
 //   console.log  (`Your BMI calculation is  ${bmiNO}, So you are overweight.`);
 //}

 //  else if(bmiNO > 24.9 ) {
 //   console.log  (`Your BMI calculation is  ${bmiNO}, So you are underweight.`);

 //}

 //}

 //bmiCalculator(65, 1.8)


 var age = 12;
 var accompanied = true;
 var ageReturn;
 function rated (age, accompanied){
if(age >= 13){
  ageReturn = `Your age is ${age}, so you are allowed to see the movie`}
  else {
    ageReturn = `Your age is ${age}, so you are not allowed to see the movie`
  }
return ageReturn;

 }
 var result = rated(age, accompanied);
console.log(result)
