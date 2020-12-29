module.exports.home = function(req,res){
    return res.render('home',{
        title:"home"
    });
}
module.exports.practice = function(req,res){
    return res.end('<h1>you are at practice page </h1>');
}