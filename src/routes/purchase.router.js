const { getAll, create } = require('../controllers/puarchase.controllers');
const express = require('express');

const routerPurchase = express.Router();

routerPurchase.route('/')
    .get(getAll)
    .post(create);

    routerPurchase.route('/:id')
    

module.exports =  routerPurchase;