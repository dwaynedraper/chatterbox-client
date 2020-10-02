var MessagesView = {

  initialize: function() {
    //this.$chats.on('click', this.renderMessage);
  },

  renderMessage: function(message) {
    message.username = message.username || 'no username';
    message.text = message.text || 'no message';
    $('#chats').append(MessageView.render(message));
  }

};