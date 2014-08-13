'use strict';
module.exports = function () {
    return function (req, res, next) {
        res.json({error: 'File not found', name: req.url});
    }
}
