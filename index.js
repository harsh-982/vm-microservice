const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Simple REST API' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
