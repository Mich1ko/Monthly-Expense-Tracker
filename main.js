const budgetInput = document.getElementById('budgetInput');
const setBudgetBtn = document.getElementById('setBudgetBtn');
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
const expenseDescription = document.getElementById('expenseDescription');
const expenseCategory = document.getElementById('expenseCategory');
const expenseAmount = document.getElementById('expenseAmount');
const expenseDate = document.getElementById('expenseDate');
const addExpenseBtn = document.getElementById('addExpenseBtn');
const expensesContainer = document.getElementById('expensesContainerr');

let budget = 0;
let expenses = [];

if (expenseDate) {
    expenseDate.valueAsDate = new Date();
}
setBudgetBtn.addEventListener('click', function() {
    const value = parseFloat(budgetInput.value);
    if (value && value > 0) {
        budget = value;
        budgetDisplay.style.display = 'flex';
        expenseForm.style.display = 'block';
        progressBar.style.display = 'block';
        updateBudgetDisplay();
    } else {
        alert('Please enter a valid budget amount.');
    }
});

addExpenseBtn.addEventListener('click', function(event) {
    event.preventDefault(); // this stops from refreshing :)

    const description = expenseDescription.value.trim();
    const category = expenseCategory.value;
    const amount = parseFloat(expenseAmount.value);
    const date = expenseDate.value;

    if(!description) {
        alert('Please enter a valid description!');
        return;
    }

    if (!amount || amount <= 0) {
        alert('Please enter a date!');
        return;
    }

    if (!date) {
        alert('Please select a date!');
        return;
    }

    const expense = {
        id: Date.now(),
        description: description,
        category: category,
        amount: amount,
        date: date
    }
});