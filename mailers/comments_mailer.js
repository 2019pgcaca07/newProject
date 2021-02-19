const nodeMailer = require('../config/nodemailer');



//this is a another way of expoting a method
exports.newComment = (comment) =>{
    console.log('inside newComment mailer',comment);

    nodeMailer.transporter.sendMail({
        from:'ranjeetkccc12@gmail.com',
        to:comment.user.email,
        subject:"New Comment Published",
        html:'<h1>yup,your comment is now published</h1>'
    },(err,info) =>{
        if(err){
            console.log('error in sending mail',err);
            return;
        }
        console.log('message sent',info);
        return;
    });

} 