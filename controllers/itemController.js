const ItemModel = require('../models/itemModel');


const getItemsController = (req, res) => {
    const items = ItemModel.getItems();
    res.json(items);

}


const getItemController = (req, res) => {
    const item = ItemModel.getItemById(parseInt(req.params.id));
    if(!item){
        return res.status(404).json({message : "Item Not Found"});
    }
    res.json(item);
}


const createItemController = (req, res) => {
    const newItem = ItemModel.createItem(parseInt(req.params.author, req.params.name));
    res.status(201).json(newItem);
}


const updateItemController = (req, res) => {
    const updatedItem = ItemModel.updateItem(parseInt(req.params.id), req.params.author, req.params.name);
    if(!updatedItem){
        res.status(404).json({message : "Item Not Found"});
    }
    res.json(updatedItem);
}



const deleteItemController = (req, res) => {
    const deletedItem = ItemModel.deleteItem(parseInt(req.params.id));
    if(!deletedItem){
        res.status(404).json({message : 'Item Not Found'});
    }
    res.json(deletedItem);
}



module.exports = {
    getItemsController,
    getItemController,
    createItemController,
    updateItemController,
    deleteItemController
};