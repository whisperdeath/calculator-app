const express = require('express');
const app = express();

app.use(express.json());

// GitHub webhook endpoint
app.post('/github-webhook', (req, res) => {
    console.log("Webhook received!");
    console.log(req.body);

    res.status(200).send("Webhook received !");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});