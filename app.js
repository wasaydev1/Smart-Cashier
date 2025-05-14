let form = document.getElementById("expense-form");
let title = document.getElementById("title");
let amount = document.getElementById("amount");
let totalExpenses = document.getElementById("total-expenses");
let expenseList = document.getElementById("expense-list");
let parentCount = document.getElementById("parentCount");
let totalPrice = document.getElementById("total-price");

let countIncrement = [0];
let expensesProduct = [];
let finalTotal = [];

let deleteExpense = (id) => {
  expensesProduct.splice(id, 1);

  expenseList.innerHTML = "";

  expensesProduct.map((data, idx) => {
    expenseList.innerHTML += `
          <li>
            <span>${data.input1} :<span class="amount">${data.input2}Rs</span></span>
            <button onclick="deleteExpense(${idx})">Delete</button>
          </li>
    `;
  });

  totalPrice.innerHTML = "";

  finalTotal.splice(id, 1);

  let total = finalTotal.reduce((sum, val) => sum + Number(val), 0);
  totalPrice.innerHTML = `
  Total Price : <span id="total-price">${total}</span>
  `;

  console.log(finalTotal);

  let decre = --countIncrement;
  parentCount.innerHTML = `
  Total Expenses: <span id="total-expenses">${decre}</span>
  `;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let input1 = e.target.title.value.trim();
  let input2 = e.target.amount.value.trim();
  let show = { input1, input2 };

  expensesProduct.push(show);
  finalTotal.push(show.input2);

  let total = finalTotal.reduce((sum, val) => sum + Number(val), 0);
  totalPrice.innerHTML = `
  Total Price : <span id="total-price">${total}</span>
  `;
  console.log(finalTotal);

  expenseList.innerHTML = "";

  expensesProduct.map((data, idx) => {
    expenseList.innerHTML += `
    <li>
    <span>${data.input1} :<span class="amount">${data.input2}.Rs</span></span>
    <button onclick="deleteExpense(${idx})">Delete</button>
    </li>
    `;
  });
  function count() {
    let incre = ++countIncrement;

    parentCount.innerHTML = `
    Total Expenses: <span id="total-expenses">${incre}</span>
    `;
  }
  count();

  form.reset();
});
