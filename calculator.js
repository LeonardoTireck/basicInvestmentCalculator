"use strict";
//data:
//initial amount
//annual contribution
//expected return
//duration
function calculateInvestment(data) {
    const { initialAmount, annualContribution, expectedReturn, duration } = data;
    if (initialAmount < 0) {
        return "Initial invesment must be at least zero.";
    }
    if (duration <= 0) {
        return "Duration must be at least 1 year.";
    }
    if (expectedReturn < 0) {
        return "Expected return must be at least zero.";
    }
    let total = initialAmount;
    let totalContributions = 0;
    let totalInterestEarned = 0;
    const annualResults = [];
    for (let i = 0; i < duration; i++) {
        total = total * (1 + expectedReturn); // decimals
        totalInterestEarned = total - totalContributions - initialAmount;
        totalContributions = totalContributions + annualContribution;
        total = total + annualContribution;
        annualResults.push({
            year: `Year ${i + 1}`,
            totalAmount: total,
            totalInterestEarned,
            totalContributions,
        });
    }
    return annualResults;
} //=> result[]
function printResults(results) {
    if (typeof results === "string") {
        console.log(results);
        return;
    }
    for (const yearEndResult of results) {
        console.log(yearEndResult.year);
        console.log(`Total: ${yearEndResult.totalAmount.toFixed(0)}`);
        console.log(`Total Contributions: ${yearEndResult.totalContributions.toFixed(0)}`);
        console.log(`Total Interest Earned: ${yearEndResult.totalInterestEarned.toFixed(0)}`);
        console.log("---------------------");
    }
}
const investmentData = {
    initialAmount: 2000,
    annualContribution: 2000,
    expectedReturn: 0.15,
    duration: 10,
};
const results = calculateInvestment(investmentData);
printResults(results);
