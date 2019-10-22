module.exports = {
    auth:{
        secretString:"this_must_be_stringest_password",
        expiresIn: {expiresIn: "1h"}
    },
    google:{
        callbackUrl:'/user/dashboard',
        clientID:'815755726078-qlobj8hlhoobeji86l65hmigog63e8q1.apps.googleusercontent.com',
        clientSecret: 'kJfleA-uvLAx0_8nAMK2dTib'
    },
    multer:{
        destinationUrl: "backend/image"
    }
}