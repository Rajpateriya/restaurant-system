const getAllUsers =async(req,res)=>{
    try {
        const response = await Person.find();
        res.status(200).json({response})
    } catch (error) {
        console.log(error);
        res.status(400).json({message:'Internal server error'});
    }
}

const deleteUser = async(req,res)=>{
    try {
        const personId = req.params.id;
        const person = await Person.findByIdAndDelete()
    } catch (error) {
        console.log(error);
        res.status(400).json({message:'Internal server error'});
    }
}

module.exports={getAllUsers,deleteUser}