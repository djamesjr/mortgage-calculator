
let purchasePrice = Number(prompt("Purchase Price?"));
let downPayment = Number(prompt("Down Payment?"));
let lengthOfLoan = Number(prompt("Lenght of Loan?(In Years)"));
let intrestRate = Number(prompt("Intrest Rate?"));

function thousands_separators(num)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }

console.log(thousands_separators(1000));

function calculator()
{
// Loan Amount Formula  
let L=(purchasePrice-downPayment);
// alert(L);

// Number of Mortgage Payments Formula
let N=(lengthOfLoan*12);
// alert(N);

// Intrest Rate Formula
let C=(intrestRate/100/12);
// alert(C);

// Intrest Rate to Mortgage Payment Power Formula
let POW=Math.pow((1+C),N);
// alert (POW);

// First Half of Equation
let firstPart=(L*C*POW);

// Second Half of Equation
let secondPart=(POW-1);

// Insurance and Property Tax 
let insurance=(2036/12);
let tax=(1120/12);

// Entire Formula
let entireFormula=(firstPart/secondPart+insurance+tax)
entireFormula=entireFormula.toFixed();
alert(`Your monthly payment will be ${entireFormula} (INCLUDING taxes and insurance)`);
}

calculator();