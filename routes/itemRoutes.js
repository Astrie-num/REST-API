const express = require('express');
const router = express.Router();
const ItemController = require('../controllers/itemController');



router.get('/items', ItemController.getItemsController);
router.get('/items:id', ItemController.getItemController);
router.post('/items', ItemController.createItemController);
router.put('/items:id', ItemController.updateItemController);
router.delete('/items:id', ItemController.deleteItemController);


module.exports = router;