class ChatEngine {
  constructor(chatBoxId, userEmail) {
    this.chatBox = $(`#${chatBoxId}`);
    this.userEmail = userEmail;

    //initiating a connection on which port i've run the socket server
    //here io is global variable that is available from script of cdnjs which is in home.ejs
    this.socket = io.connect("http://localhost:5000");

    if (this.userEmail) {
      this.connectionHandler();
    }
  }

  connectionHandler() {
    let self = this;


    this.socket.on("connect", function () {
      console.log("connection established using sockets...!");


      self.socket.emit('join_room', {
        user_email: self.userEmail,
        chatroom: 'codeial'
    });

    self.socket.on('user_joined', function(data){
        console.log('a user joined!', data);
    })

    });
  }
}


