import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    // Method to return the income formatted in dollars
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    // Method to return the income formatted in euros
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
