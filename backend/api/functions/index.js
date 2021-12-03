const User = require("../../models/user")
const jwtDecoder = require("jwt-decode");
const bcrypt = require("bcrypt");
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

const updateUserProfile = async(token,body) =>{
    try {
        const id = jwtDecoder(token).id
        const {name,surname,profile_pic,email,password} = body
        
        const passwordSalt = 10;
        bcrypt.hash(password, passwordSalt, async function (err, hashedPassword) {
            
            return await User.findOneAndUpdate({_id: id},{
                name:name,
                surname:surname,
                profile_pic:profile_pic,
                email:email,
                password: hashedPassword
            },{
                returnOriginal: false
            }).catch(
                (err) => {
                console.log("Error: ", err);
                }
            );
        })
    

    } catch (error) {
        console.log(error)     
    }
}




module.exports = {
    getUserByIdFromToken,
    updateUserProfile
}