const User = require("../../models/user")
const Quiz = require("../../models/quiz");
const jwtDecoder = require("jwt-decode");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const createAuthToken = (id) => {
    
    return jwt.sign(
        { id: id},
        process.env.JWT_SECRET,
        {}
      );
}


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

const updateQuiz = async(body) => {
    const {id,materie_id,capitol_id,intrebari} = body

    return await Quiz.findOneAndUpdate({_id: id},{
        materie_id,
        capitol_id,
        intrebari
    },{
        returnOriginal: false
    }).catch(
        (err) => {
        console.log("Error: ", err);
        }
    );
}

const uploadFile = async(files,path,extension) => {
    try{
       
    if (!files) {
        return null
      } else {
        switch (extension) {
           
            case 'png':
                let file = files.file;
                file.mv('.' + path);
                return true
                
            
            default: 
                files[''].mv('.' + path);
                return true
                
        }
         
      }
    } catch (err) {
      console.log(err)
      return false;
    }
}


module.exports = {
    getUserByIdFromToken,
    updateUserProfile,
    updateQuiz,
    createAuthToken,
    uploadFile
}