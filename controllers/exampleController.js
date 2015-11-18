'use strict';

var exampleController = {
    get : function exampleGet(req, res) {
        res.status(200).json({
            example : "Example!"
        });
    },
    post : function examplePost(req, res) {
        if(req.body) {
            // echo
            res.status(200).json(req.body);
        } else {
            // nothing to echo; incorrect request
            res.sendStatus(400);
        }
    },
    patch : function examplePatch(req, res) {
        // not allowed!
        res.sendStatus(405);
    },
    'delete' : function exampleDelete(req, res) {
        // not allowed!
        res.sendStatus(405);
    }
};

module.exports = exampleController;
