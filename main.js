const budgetInput = document.getElementById('budgetInput');
const selectBudgetBtn = document.getElementById('selectBudgetBtn');
const budgetDisplay = document.getElementById('budgetDisplay');
const expenseForm = document.getElementById('expenseForm');
const expensesList = document.getElementById('expensesList');
const progressBar = document.getElementById('progressBar');

//Selecting the budget display elements
const totalBudgetEl = document.getElementById('totalBudget');
const totalSpentEl = document.getElementById('totalSpent');
const remainingEl = document.getElementById('remaining');
const remainingLabelEL = document.getElementById('remaingLabel');
const progressFill = document.getElementById('progressFill');

//Selecting the expense input elements
const expenseDiscription = document.getElementById('expenseDiscription');
const expenseCategory = document.getElementById('expenseCategory');
const expenseAmount = document.getElementById('expenseAmount');
const expenseDate = document.getElementById('expenseDate');
const addExpenseBtn = document.getElementById('addExpenseBtn');
const expensesContainer = document.getElementById('expensesContainerr');

let budget = 0;
let expenses = [];

expenseDate.valueAsDate = new Date();
