let budget = 0;
let expenses = [];

const expenseDescription = document.getElementById('expenceDescription');
const expenseCategory = document.getElementById('expenseCategory');
const expenseAmount = document.getElementById('expenseAmount');
const expenseDate = document.getElementById('expenseDate');
const addExpenseBtn = document.getElementById('addExpenseBtn');

expenseDate.valueAsDate = new Date();