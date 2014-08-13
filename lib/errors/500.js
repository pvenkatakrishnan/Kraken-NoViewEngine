'use strict';
module.exports = function () {
    return function (err, req, res, next) {
        console.info(err);
        res.json({error: err.message});
    }
}