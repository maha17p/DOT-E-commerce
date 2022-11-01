const notFound = (req,res) => res.status(404).json({msg:"Router doesn't exist"});


module.exports = notFound;