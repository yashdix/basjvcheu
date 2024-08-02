const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Root endpoint for testing
app.get('/', (req, res) => {
    res.send('Hello, welcome to the REST API!');
});

// POST endpoint
app.post('/submit', (req, res) => {
    const { data } = req.body;

    if (!Array.isArray(data)) {
        return res.status(400).json({ status: 'Error', message: 'Invalid request body' });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));

    const highestAlphabet = alphabets.reduce((highest, current) => {
        return current.toLowerCase() > highest.toLowerCase() ? current : highest;
    }, alphabets[0]);

    const response = {
        is_success: true,
        user_id: "john_doe_17091999",
        email: "john@xyz.com",
        roll_number: "ABCD123",
        numbers,
        alphabets,
        highest_alphabet: highestAlphabet ? [highestAlphabet] : []
    };

    res.json(response);
});

// GET endpoint
app.get('/operation_code', (req, res) => {
    const operationCode = {
        operation_code: 'OP123456'
    };

    res.json(operationCode);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
