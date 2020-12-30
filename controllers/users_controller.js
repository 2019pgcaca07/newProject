module.exports.profile = function(req,res){
    return res.render('user_profile',{
        title:"profile"
    })
}
module.exports.contact = function(req,res){
    return res.end('<h1>user contact </h1>');
},
//render the signup page
module.exports.signUp = function(req,res){
    return res.render('users_sign_up',{
        title:"Codiel|Sign Up"
    });
},
//render the signin page
module.exports.signIn = function(req,res){
    return res.render('users_sign_in',{
        title:"Codiel|Sign In"
    });
}

