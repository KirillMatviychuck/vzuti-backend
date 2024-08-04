const express = require('express');
const {
    getAllShoes,
    getOneShoesPair,
    deleteShoesPair,
    createShoesPair,
    updateShoesPair
} = require('../controllers/shoes-controller')

const router = express.Router()

router.get('/shoes', getAllShoes)
router.get('/shoes/:id', getOneShoesPair)
router.delete('/shoes/:id', deleteShoesPair)
router.post('/shoes', createShoesPair)
router.patch('/shoes/:id', updateShoesPair)

module.exports = router;