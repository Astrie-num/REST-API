const connection = require('./database')

const getAllItems = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM items',(err, results) => {
            if(err){
                console.error("Error fetching items into from database:", err);
                return reject(err);
            }
            resolve(results);
        });
    });
}


const getItemById = (id) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM items where id = ?',[id],(err, results) => {
            if(err){
                console.error("Error inserting item into the database:", err);
                return reject(err);
            }
            resolve(results);
        });

    });

}

const createItem = (author, name) => {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO items(author, name) VALUES (?, ?)', [author, name], (err, results) => {
            if (err) {
                console.error("Error inserting item into the database:", err);
                return reject(err); 
            }
            resolve({ id: results.insertId, author, name });
        });
    });
};


const updateItem = (id, author, name) => {
    return new Promise((resolve, reject) => {
        connection.query('UPDATE items set author = ?, name = ? WHERE id = ?',[name, author, id], (err, results) => {
            if(err){
                return reject(err);
            }
            resolve({id, author, name});
        });
    });
}


const deleteItem = (id) => {
    return new Promise((resolve, reject) => {
       connection.query('DELETE FROM items WHERE id = ?', [id], (err, results) => {
        if(err){
            reject(err);
        }
        resolve(results.affectedRows > 0);
       });
    });
}


const deleteAllItems = () => {
    return new Promise((resolve, reject) => {
        connection.query('DELETE * FROM items', (err, results) => {
            if(err){
                reject(err);
            }
            resolve(results.affectedRows > 0);
        });
    });
}


module.exports = {
    getAllItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem,
    deleteAllItems
}