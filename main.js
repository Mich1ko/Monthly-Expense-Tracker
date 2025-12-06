let budget = 0;
let expenses = [];

const expenseDescription = document.getElementById('expenceDescription');
const expenseCategory = document.getElementById('expenseCategory');
const expenseAmount = document.getElementById('expenseAmount');
const expenseDate = document.getElementById('expenseDate');
const addExpenseBtn = document.getElementById('addExpenseBtn');

expenseDate.valueAsDate = new Date();

addExpenseBtn.addEventListener('click', function() {

    const description = expenseDescription.value.trim();
    const category = expenseCategory.value;
    const amount = parseFloat(expenseAmount.value);

    //Variable: Check if all fields are filled
    if (!description) {
        alert('Please enter a description!');
        return;
    }

    if (!date) {
        alert('Please select a date!');
        return;
    }

    const expense = {
        id: Date.now(), // Unique ID using timestamp
        description: description,
        category: category,
        amount: amount,
        date: date
    };

    // Add to expenses array
    expenses.push(expense);

    //Clear the form
    expenseDescription.value = '';
    expenseAmount.value = '';
    expenseDate.valueAsDate = new Date();

    updateBudgetDisplay(); // Update budget display
});

// UPDATE BUDGET DISPLAY - Calculate and show totals
function updateBudgetDisplay() {
    let totalSpent = 0;
    for (let i = 0; i < expenses.length; i++) {
        totalSpent += expenses[i].amount;
    }

    // Calculate remaining budget
    const remaining = budget - totalSpent;

    // Calculate percentages
    const pecentage = (totalSpent / budget) * 100;

    // Update budget amounts
    totalBudgetEl.textContent = '₱' + budget.toFixed(2);
     totalSpentEl.textContent = '₱' + totalSpent.toFixed(2);

}

