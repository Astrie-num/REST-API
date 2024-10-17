const express = require('express');
const app = express();
const itemRoutes = require('./routes/itemRoutes');
const dbConfig = require('./config/dbConfig');
const connection = require('./models/database');

connection.query('SELECT 1 + 1 AS result', (err, result) => {
    if(err){
        console.error("Error querying the database:", err);
        return;
    }
    // console.log('Connected to mysql db', result[0].result)
})


app.use(express.json());
app.use('/api', itemRoutes);

app.get('/',(req, res) => {
    if(req.url !== '/'){
        res.status(404).json({message : "Page Not Found"})
        return;
    }
    res.send("Hello World")
    
})


app.listen(dbConfig.port,() => {
    console.log(`Server running on port ${dbConfig.port}`);
})