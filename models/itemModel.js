let items = [
    {
        id:1, author:"mwizi john", name:"To kill a mocking bird",
        id:2, author:"harry steve", name:"Atomnic Habits"
    }
];

// Get all items
const getItems = () => {
    return items;
}
    
// Get item by id
const getItemById = (id) => {
    items.find(item => item.id == id);
}

// Create an item
const createItem = (author, name) => {
    const newItem = {id: items.length + 1, author, name};
    items.push(newItem);
    return newItem;

}

// Updating an item
const updateItem = (id, author, name) => {
    const item = getItemById(id);
    if(item){
        item.author = author;
        item.name = name;
        return item;
    }
    return null;
};

// Delete item
const deleteItem = (id) => {
    const index = items.findIndex(item => item.id = id);
    if(index !== -1){
        const deletedIndex = items.splice(index,1);
        return deleteItem[0];
    }
    return null;
}


// Export the model

module.exports = {
    getItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem
}