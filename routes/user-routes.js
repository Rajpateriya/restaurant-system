const express = require("express")

const router = express.Router();

router.get('/person' , getAllUsers);
router.post('/person', createUsers);
router.put('/person/:id', updateUser);
router.delete('/person/:id', deleteUser);

module.exports = rotuer;