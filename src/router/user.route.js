const express = require('express');
const userController = require('../user/user.controller');
const router = express.Router();



router.post('/', (req, res) => {  
  userController.addUser(req,res); 
});


router.put('/:id', (req, res) => {
  userController.updateUser(req,res); 
});


router.get('/', (req, res) => {
  userController.getAllUsers(req,res); 
});


router.get('/:id', (req, res) => {
  userController.getUserById(req,res); 
});

router.delete('/:id', (req, res) => {
  userController.deleteUser(req,res); 
});



module.exports = router;
