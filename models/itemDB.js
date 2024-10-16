const db = require('db');

const getAllItems = () => {
    return new Promise((resolve, reject) => {
        db.query = ('SELECT * FROM items',(err, results) => {
            if(err){
                return reject(err);
            }
            resolve(results);
        });
    });
}


const getItemById = (id) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM items where id = ?',[id],(err, results) => {
            if(err){
                return reject(err);
            }
            resolve(results);
        });

    });

}

const createItem = (author, name) => {
    return new Promise ((resolve, reject) => {
        db.query('INSERT INTO items(author, name) VALUES (?)',[author, name], (err, results) => {
            if(err){
                return reject(err);
            }
            resolve({id:results.insertId, author, name});
        })
    })
}


const updateItem = (id, author, name) => {
    return new Promise((resolve, reject) => {
        db.query('UPDATE items set author = ?, name = ?',[name, author, id], (err, results) => {
            if(err){
                return reject(err);
            }
            resolve({id, author, name});
        });
    });
}


const deleteItem = (id) => {
    return new Promise((resolve, reject) => {
       db.query('DELETE FROM items WHERE id = ?', [id], (err, results) => {
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
    deleteItem
}