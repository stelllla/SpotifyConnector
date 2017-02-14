var express = require('express');
var router = express.Router();
var Model = require('../models/model.js');

router.post('/user', function(request, response) {
    var user = new Model(request.body);
    user.save(function (err, resource) {
        if (err) {
            response.send(err).status(501);
        } else {
            response.json(resource).status(201);
        }
    })
});

router.get('/users', function(request, response) {
    Model.find({}, function(err, resources) {
        if (err) {
            response.send(err).status(404);
        } else {
            response.send(resources).status(200);
        }
    });
});

router.delete('/users/:id', function(request, response) {
    var id = request.params.id;
    Model.remove({ _id: id }, function(err, resource) {
        if (err) {
            return response.send(err);
        } else {
            response.send(resource);
        }
    })
});

router.get('/users/:email', function(request, response) {
    console.log('getting a user by email');
    var email = request.params.email;
    Model.findOne({'email': email}, function(err, res) {
        if (err) {
            return response.send(err);
        } else {
            var user = res;
            response.json(user);
        }
    });
});

module.exports = router;