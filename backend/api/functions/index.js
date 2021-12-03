const User = require("../../models/user")
const jwtDecoder = require("jwt-decode");

const getUserByIdFromToken = async(token) =>{
    try {
        const id = jwtDecoder(token).id
        
        return await User.findById(id).catch(
            (err) => {
              console.log("Error: ", err);
            }
          );
        
    } catch (error) {
        console.log(error)     
    }
}




module.exports = {
    getUserByIdFromToken
}