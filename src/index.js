const express = require('express');
const cors = require('cors');
const router = require('./routes/router');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', router)

app.listen(4024, () => {
    console.log("Server is running!");
})