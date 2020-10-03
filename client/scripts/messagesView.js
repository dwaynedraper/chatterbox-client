var MessagesView = {


  renderMessage: function(message) {
    message.username = message.username || 'no username';
    message.text = message.text || 'no message';
    let renderedMessage = MessageView.render(message);
    console.log(renderedMessage);
    $('#chats').append(MessageView.render(message));
  }

};