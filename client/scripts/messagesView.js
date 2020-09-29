var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    //this.$chats.on('click', this.renderMessage);
  },

  renderMessage: function(message) {
    this.$chats.append(MessageView.render(message)); // WILD GUESS FOR NOW
  }

};