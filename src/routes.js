const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');

router.get('/', userController.index);
router.get('/create', userController.create);
router.post('/users', userController.store);
router.put('/:id/edit', userController.update);
router.delete('/:id', userController.destroy);

module.exports = router;
