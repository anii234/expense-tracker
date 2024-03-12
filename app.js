// app.js
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
const port = process.env.PORT || 3000;

// Use EJS as the view engine
app.set('view engine', 'ejs');

// Middleware for parsing incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// In-memory database for storing expenses
const expenses = [];

// Render the home page with the list of expenses
app.get('/', (req, res) => {
  res.render('index', { expenses });
});

// Handle the form submission to add a new expense
app.post('/addExpense', (req, res) => {
  const { description, amount } = req.body;
  const newExpense = { description, amount };
  expenses.push(newExpense);
  res.redirect('/');
});

// Handle the request to delete an expense
app.get('/deleteExpense/:index', (req, res) => {
  const index = req.params.index;
  expenses.splice(index, 1);
  res.redirect('/');
});

// Start the server
app.listen(port, () => {
  console.log(`Expense Tracker App is running on port ${port}`);
});

