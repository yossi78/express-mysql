const express = require('express');
const { getAllUsers, addUser, updateUser ,deleteUser} = require('../user/user.controller');
const router = express.Router();



router.post('/', (req, res) => {
  addUser(req,res); 
});


router.put('/:id', (req, res) => {
  updateUser(req,res); 
});


router.get('/', (req, res) => {
  getAllUsers(req,res); 
});


router.delete('/:id', (req, res) => {
  deleteUser(req,res); 
});











  module.exports = router;
