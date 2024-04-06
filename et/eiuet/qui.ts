type IncomeRecord = {
  [key: string]: number;
};

const monthlyIncomes: IncomeRecord = {
  // ... (other properties with their respective incomes)
};

const getPropertyIncome = (incomes: IncomeRecord, property: string): number | undefined => {
  return incomes[property];
};

// Usage
const prop3: string = 'propertyName'; // Replace 'propertyName' with the actual property name
const income = getPropertyIncome(monthlyIncomes, prop3);

if (income !== undefined) {
  console.log(income);
} else {
  console.log(`Income for property ${prop3} is not defined.`);
}
