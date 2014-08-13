'use strict';


var IndexModel = require('../models/index');


module.exports = function (router) {

    var model = new IndexModel();


    router.get('/', function (req, res) {
        
        res.json(model);
        
    });

    router.get('/foo', function (req, res) {
        res.json({foo: 'bar'});
    });

};
