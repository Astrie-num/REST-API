const express = require('express');
const app = express();
const itemRoutes = require('./routes/itemRoutes');
const dbConfig = require('./config/dbConfig');
const config = require('./config/config');


app.use(express.json());
app.use('/api', itemRoutes);


app.listen(dbConfig.PORT,() => {
    console.log(`Server running on port ${config.PORT}`);
})