function getCurrentYear() {
  const date = new Date(); // Create a new Date object
  return date.getFullYear(); // Return the current year
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };

  return budget; // Returning the budget object with current year-specific keys
}
