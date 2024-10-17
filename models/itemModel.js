const itemDB = require('./itemDB')

// Get all items
const getItems = async() => {
    return await itemDB.getAllItems();
}
    
// Get item by id
const getItemById = async (id) => {
    const items = await itemDB.getItemById(id);
    return items[0];
}

// Create an item
const createItem = async (author, name) => {
    return await itemDB.createItem(author, name);

}

// Updating an item
const updateItem = async (id, author, name) => {
    return await itemDB.updateItem(id, author, name);
};

// Delete item
const deleteItem = async (id) => {
    return await itemDB.deleteItem(id);

};

const deleteAllItems = async () => {
    return await itemDB.deleteAllItems();
}



// Export the model

module.exports = {
    getItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem,
    deleteAllItems
}