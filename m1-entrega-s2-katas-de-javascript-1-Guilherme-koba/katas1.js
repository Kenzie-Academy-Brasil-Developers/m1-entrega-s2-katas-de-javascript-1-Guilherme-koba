 function oneThroughTwenty() {
  let meuRetorno;
  for (let i = 1; i<= 20; i++) {
    console.log(i)
  }
  return meuRetorno;
 }
 console.log(oneThroughTwenty());
 
//call function oneThroughTwenty

function evensToTwenty() {
  let meuRet;
  for (let i = 1; i<= 20; i++) {
    if(i%2===0)
    console.log(i)
  }
  return meuRet;
}
console.log(evensToTwenty());
//call function evensToTwenty

function oddsToTwenty() {
  let meuResuImp;
  for (let i = 1; i<= 20; i++) {
    if(i%2===1)
    console.log(i)
  }
  return meuResuImp;
}
console.log(oddsToTwenty())
//call function oddsToTwenty

function multiplesOfFive() {
   
  let meuResuCinco;
  for (let i = 1; i<= 100; i++) {
    if(i%5===0)
    console.log(i)
  }
  return meuResuCinco;
}
console.log(multiplesOfFive())
//call function multiplesOfFive

function squareNumbers() {
  let meuResuSqua;
  for (let i = 1; i<= 100; i++) {
    if( Math.sqrt(i)%1===0)
    console.log(i)
  }
  return meuResuSqua;
}
console.log(squareNumbers()) 

//call function squareNumbers

function countingBackwards() {
  let meuRetp;
  for (let i = 20; i>= 1; i--) {
    if(i%2===0)
    console.log(i)
  }
  return meuRetp;
}
console.log(countingBackwards())
//call function countingBackwards

function evenNumbersBackwards() {
  let meuRetorn;
  for (let i = 20; i>= 1; i--) {
    console.log(i)
  }
  return meuRetorn;
}
console.log(evenNumbersBackwards())
//call function evenNumbersBackwards

function oddNumbersBackwards() {
  let meuResuImp1;
  for (let i = 20; i>= 1; i--) {
    if(i%2===1)
    console.log(i)
  }
  return meuResuImp1;
}
console.log( oddNumbersBackwards())

//call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
     
  let meuResuCinco;
  for (let i = 100; i>= 11; i--) {
    if(i%5===0)
    console.log(i)
  }
  return meuResuCinco;
}
console.log(multiplesOfFiveBackwards())

//call function multiplesOfFiveBackwards

function squareNumbersBackwards() {
  let meuResuSqua1;
  for (let i = 100; i>= 1; i--) {
    if( Math.sqrt(i)%1===0)
    console.log(i)
  }
  return meuResuSqua1;
}
console.log(squareNumbersBackwards())

//call function squareNumbersBackwards
//feito
