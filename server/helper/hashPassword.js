const bcrypt = require('bcrypt');
const saltRounds = 10;
const hashPassword = async( plainPassword ) => {
    try {
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(plainPassword,salt);
        return hash
    } catch (error) {
        console.log(error);
    }
};

const hashValidator = async (plainPassword, hashPassword) => {
    try{
        const result = await bcrypt.compare(plainPassword,hashPassword)
        return result;
    }
    catch(error){
        console.log(error);
    }
}


module.exports = {
    hashPassword,
    hashValidator
}