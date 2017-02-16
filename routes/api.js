var express = require('express');
var router = express.Router();
var UserModel = require('../models/user.model.js');
var MessageModel = require('../models/message.model.js');

router.post('/user', function(request, response) {
    var user = new UserModel(request.body);
    user.save(function (err, resource) {
        if (err) {
            response.send(err).status(501);
        } else {
            response.json(resource).status(201);
        }
    })
});

router.get('/users', function(request, response) {
    UserModel.find({}, function(err, resources) {
        if (err) {
            response.send(err).status(404);
        } else {
            response.send(resources).status(200);
        }
    });
});

router.delete('/users/:id', function(request, response) {
    var id = request.params.id;
    UserModel.remove({ _id: id }, function(err, resource) {
        if (err) {
            return response.send(err);
        } else {
            response.send(resource);
        }
    })
});

router.get('/users/:email', function(request, response) {
    var email = request.params.email;
    UserModel.findOne({'email': email}, function(err, res) {
        if (err) {
            return response.send(err);
        } else {
            var user = res;
            response.json(user);
        }
    });
});

router.post('/user/updateStatus', function(request, response) {
    var id = request.body.id;
    var newStatus = request.body.status;
    UserModel.update({ _id: id }, { $set: { status: newStatus }}, function(err, resource) {
        if (err) {
            return response.send(err).status(501);
        } else {
             response.send(resource).status(200);
        }
    });
});

router.get('/messages', function (request, response) {
     MessageModel.find({}, function(err, resources) {
        if (err) {
            response.send(err).status(404);
        } else {
            response.send(resources).status(200);
        }
    });
});

router.post('/message', function(request, response) {
    var message = new MessageModel(request.body);
    message.save(function (err, resource) {
        if (err) {
            response.send(err).status(501);
        } else {
            response.json(resource).status(201);
        }
    })
});

router.delete('/messages/:id', function(request, response) {
    var id = request.params.id;
    MessageModel.remove({ _id: id }, function(err, resource) {
        if (err) {
            return response.send(err);
        } else {
            response.send(resource);
        }
    })
});

router.delete('/messages', function(request, response) {
    MessageModel.remove({}, function(err, resource) {
        if (err) {
            return response.send(err);
        } else {
            response.send(resource);
        }
    })
});

module.exports = router;