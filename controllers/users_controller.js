module.exports.profile = function(req,res){
    return res.render('user_profile',{
        title:"profile"
    })
}
module.exports.contact = function(req,res){
    return res.end('<h1>user contact </h1>');
}