const ItemModel = require('../models/itemModel');


const getItemsController = async (req, res) => {
    try{
    const items = await ItemModel.getItems();

    if (!items || items.length === 0) {
        return res.status(404).json({ message: "Items Not Found" });
    }
    
    console.log("All items present:");
    res.json(items);
    console.log(items);

    }
    catch(error){
        console.error("Error fetching items: ", error);
        res.status(500).json({message : "Internal Server Error"});
    }

};

const getItemController = async (req, res) => {
    try {
        const item = await ItemModel.getItemById(parseInt(req.params.id));
        if (!item) {
            return res.status(404).json({ message: "Item Not Found" });
        }
        console.log("Item with id: ", parseInt(req.params.id));
        res.json(item);
        console.log(item); 

    } catch (error) {
        console.error("Error fetching item:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

const createItemController = async (req, res) => {
    const { author, name } = req.body; 
    const newItem = await ItemModel.createItem(author, name);
    res.status(201).json(newItem);
    console.log(req.body);
 
}


const updateItemController = async (req, res) => {
    const id = parseInt(req.params.id);
    const {author, name} = req.body;

    if (!author || !name) {
        return res.status(400).json({ message: "Author and Name are required" });
    }

    try {

    const updatedItem = await ItemModel.updateItem(id, author, name);
    if(!updatedItem){
        res.status(404).json({message : "Item Not Found"});
    }
    res.json(updatedItem);
    }

    catch (error) {
        console.error("Error updating item:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};



const deleteItemController = async (req, res) => {
    const deletedItem = await ItemModel.deleteItem(parseInt(req.params.id));
    if(!deletedItem){
        res.status(404).json({message : 'Item Not Found'});
    }
    res.json(deletedItem);
}


const deleteAllItemsController = async (req, res) => {
    const deletedItems = await ItemModel.deleteAllItems();
    if(!deletedItems){
        res.status(404).json({message : 'Item Not Found'});
    }
    res.json(deletedItems);
}

module.exports = {
    getItemsController,
    getItemController,
    createItemController,
    updateItemController,
    deleteItemController,
    deleteAllItemsController
};