module.exports.home = function(req,res){
    return res.end('<h1>express is up and running </h1>');
}
module.exports.practice = function(req,res){
    return res.end('<h1>you are at practice page </h1>');
}