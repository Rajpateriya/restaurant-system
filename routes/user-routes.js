const express = require("express")

const router = express.Router();
const { getAllUsers,deleteUser } =require( "../controllers/user-controller");

router.get('/person' , getAllUsers);
// router.post('/person', createUsers);
// router.put('/person/:id', updateUser);
router.delete('/person/:id', deleteUser);

module.exports = router;