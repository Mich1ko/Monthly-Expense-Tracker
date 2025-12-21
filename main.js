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
const remainingLabelEL = document.getElementById('remainingLabel');
const progressFill = document.getElementById('progressFill');

//Selecting the expense input elements
const expenseDescription = document.getElementById('expenseDescription');
const expenseCategory = document.getElementById('expenseCategory');
const expenseAmount = document.getElementById('expenseAmount');
const expenseDate = document.getElementById('expenseDate');
const addExpenseBtn = document.getElementById('addExpenseBtn');
const expensesContainer = document.getElementById('expensesContainer');

let budget = 0;
let expenses = [];



const savedExpenses = localStorage.getItem('expenses');
const savedBudget = localStorage.getItem('budget');

if (savedBudget !== null) {
    budget = parseFloat(savedBudget);
    budgetDisplay.style.display = 'flex';
    expenseForm.style.display = 'block';
    progressBar.style.display = 'block';
    updateBudgetDisplay();
}

if (savedExpenses !== null) {
    expenses = JSON.parse(savedExpenses);
    displayExpenses();
}


if (expenseDate) {
    expenseDate.valueAsDate = new Date();
}
setBudgetBtn.addEventListener('click', function() {
    const value = parseFloat(budgetInput.value);
    if (value && value > 0) {
        budget = value;
        localStorage.setItem('budget', budget.toString());

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
    };

    localStorage.setItem('expenses', JSON.stringify(expenses));

    expenses.push(expense);
    expenseDescription.value = '';
    expenseAmount.value = '';
    expenseDate.valueAsDate = new Date ();
    updateBudgetDisplay();
});

function updateBudgetDisplay() {
    let totalSpent = 0;
    for (let i = 0; i < expenses.length; i++) {
        totalSpent += expenses[i].amount;
    }

    const remaining = budget - totalSpent;
    const percentage = (totalSpent / budget) * 100; // <-- the formula for getting the percentage.
    // update budget display
    totalBudgetEl.textContent = '₱' + budget.toFixed(2);
    // update total spent
    totalSpentEl.textContent = '₱' + totalSpent.toFixed(2);
    progressFill.style.width = Math.min(percentage, 100) + '%';
    progressFill.textContent = percentage.toFixed(1) + '%';
    
    if (remaining < 0) {
        const overAmount = Math.abs(remaining);
        remainingLabelEL.textContent = 'Over budget';
        remainingEl.textContent = '₱' + overAmount.toFixed(2);
        remainingEl.style.color = '#ff4c4c'; // change color to red
        progressFill.style.background = 'linear-gradient(90deg, #ff6b6b 0%, #ff5252 100%)';

     } else {
        remainingLabelEL.textContent = 'Remaining';
        remainingEl.textContent = '₱' + remaining.toFixed(2);
        remainingEl.style.color = '#4caf50'; // change color to green
        progressFill.style.background = 'linear-gradient(90deg, #4caf50 0%, #81c784 100%)';
        }



        // display expense list 
        displayExpenses();
    }

    function formatDate(dateString) {
    const date = new Date(dateString);

    return date.toLocaleDateString('en-PH', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
    }

    

    function displayExpenses() {
        // check if no expenses
        if (expenses.length === 0) {
            expensesList.style.display = 'none';
            return;
        }

        // showing the expenses list section
        expensesList.style.display = 'block';
        // sorting expenses by date

        const sortedExpenses = [...expenses].sort((a, b) =>
            new Date(b.date) - new Date(a.date)
        );

        // creates html for all expenses
        expensesContainer.innerHTML = sortedExpenses.map(expense => `
            
            <div class="expense-item">
            <div class="expense-info">
                <div class="expense-category">${expense.category}</div>
                <div class="expense-description">${expense.description}</div>
                <div class="expense-date">${formatDate(expense.date)}</div>
                </div>
                <div class="expense-amount">₱${expense.amount.toFixed(2)}</div>
                <button class="delete-btn" onclick="deleteExpense(${expense.id})"</div>
                </div>
                `).join('');
    }

    // creating delete expense function
    function deleteExpense(id) {
        expenses = expenses.filter(expense => expense.id !== id); // keeps all expenses except the one we want to delete
        localStorage.setItem('expenses', JSON.stringify(expenses));
        updateBudgetDisplay(); // to recalculate totals and refresh the list 


}