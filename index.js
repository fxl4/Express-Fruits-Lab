const fiveRequest = [
    "1",
    "2",
    "3",
    "4",
    "5"
];

const fruits = [
    "banana",
    "grape",
    "cherry",
    "blueberry",
    "apple",
    "strawberry",
    "raspberry",
    "pineapple",
    "pear",
    "plum"
];

const veggies = [
    "spinach",
    "broccoli",
    "cauliflower",
    "asparagus",
    "celery",
    "onion",
    "beet",
    "brussel sprout",
    "artichoke",
    "cabbage"
];

// Import required modules
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// Create an instance of the express router
const router = express.Router();

// Route handler.Define the route with the get method
app.get('/', (req, res) => {
    res.send('This server is active!');
});

app.get('/hello', (req, res) => {
    console.log('hello world!');
    res.send('hello world!');
});

app.get('/five', (req, res) => {
    console.log(`return an array of the numbers from 1-5`);
    res.send(`${fiveRequest}`);
});

app.get('/greet:userName', (req, res) => {
    userName = "FXL4";
    console.log(`return a greeting with the supplied name`);
    res.send(`Why hello there, ${userName}!`);
});

app.get('/fruits', (req, res) => {
    res.send(`${fruits}`)
});

app.get('/fruits/:name', (req, res) => {
    // List my array of fruits
    const fruits = [
        "banana",
        "grape",
        "cherry",
        "blueberry",
        "apple",
        "strawberry",
        "raspberry",
        "pineapple",
        "pear",
        "plum"
    ];
    // Switch statement that responds based on the match from my array
    switch (req.params.name) {
        case "banana":
            res.send(`${fruits[0]}`);
            break;
        case "grape":
            res.send(`${fruits[1]}`);
            break;
        case "cherry":
            res.send(`${fruits[2]}`)   
            break;
        case "blueberry":
            res.send(`${fruits[3]}`);
            break;
        case "apple":
            res.send(`${fruits[4]}`);
            break;
        case "strawberry":
            res.send(`${fruits[5]}`);
            break;
        case "raspberry":
            res.send(`${fruits[6]}`);
            break;
        case "pineapple":
            res.send(`${fruits[7]}`);
            break;
        case "pear":
            res.send(`${fruits[8]}`);
            break;
        case "plum":
            res.send(`${fruits[9]}`);
        default:
            res.send("Please make a valid selection.");
            break;
    }
});

app.get('/veggies', (req, res) => {
    res.send(`${veggies}`)
});

app.get('/veggies/:name', (req, res) => {
    //your code here
    // HINT - you can use a higher-order array method
});

app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))

// Export the router
module.exports = router;