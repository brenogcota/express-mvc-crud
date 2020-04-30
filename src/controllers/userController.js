const userModel = require('../models/User');


module.exports = {
    index: function(req, res) {
        userModel.index(req.con, function(err, rows) {
            res.render('users', { users: rows})
        })

    },

    create: function(req, res) {
        res.render('users')
    },

    store: function(req, res) {
        userModel.create(req.con, req.body, function(err){
            if(err) console.log(err)
            res.redirect('/')
        })
    },

    edit: function(req, res) {
        res.render('users')
    },

    update: function(req, res) {
        userModel.update(req.con, req.body, req.params.id, function(err){
            res.redirect('users')
        })
    },

    destroy: function(req, res) {
        userModel.destroy(req.con, req.params.id, function(err) {
            res.redirect('users')
        })
    }

}