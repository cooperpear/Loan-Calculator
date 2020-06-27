//Listen for submission by user. If submitted, run function calculateResults
document.getElementById('loan-form').addEventListener('submit', calculateResults);

//Calculate Results
function calculateResults(e) {
    //UI variables assign to const declarations
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    //assign calculations to const declaration
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    //Compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);
    //IF monthly is a FINITE number, THEN assign the value of monthlyPayment to a fixed variable (2 decimal places)
    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        //assign total payment value (2 decimal places)
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        //assign total interst value
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
    } else {

    }



    e.preventDefault();
}
