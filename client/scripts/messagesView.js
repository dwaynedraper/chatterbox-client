var MessagesView = {

  initialize: function() {
    //this.$chats.on('click', this.renderMessage);
  },

  renderMessage: function(message) {
    $('#chats').append(MessageView.render(message));
  }

};