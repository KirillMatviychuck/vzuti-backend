const Shoe = require('../models/shoe')

const handleError = (res, error) => res.status(500).json({ error })


const getAllShoes = (req, res) => {
    Shoe
        .find()
        .then((shoes) => {
            res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
            res
                .status(200)
                .json(shoes)
        })
        .catch((err) => handleError(res, err))
}
const getOneShoesPair = (req, res) => {
    Shoe
        .findById(req.params.id)
        .then((shoe) => {
            res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
            res
                .status(200)
                .json(shoe)
        })
        .catch((err) => handleError(res, err))
}
const deleteShoesPair = (req, res) => {
    Shoe
        .findByIdAndDelete(req.params.id)
        .then((result) => {
            res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
            res
                .status(200)
                .json(result)
        })
        .catch((err) => handleError(res, err))
}
const createShoesPair = (req, res) => {
    const shoe = new Shoe(req.body)

    shoe
        .save()
        .then(result => {
            res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
            res
                .status(201)
                .json(result)
        })
        .catch((err) => handleError(res, err))
}
const updateShoesPair = (req, res) => {
    Shoe
        .findByIdAndUpdate(req.params.id, req.body)
        .then(result => {
            res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
            res
                .status(200)
                .json(result)
        })
        .catch((err) => handleError(res, err))
}
module.exports = {
    getAllShoes,
    getOneShoesPair,
    deleteShoesPair,
    createShoesPair,
    updateShoesPair
}