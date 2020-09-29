var Friends = {

  friendList: [],
  $chats: $('#chats'),

  initialize: function() {
    this.$chats.on('click', '.username', this.toggleStatus);
  },

  toggleStatus: function(username) {
    //this.friendList.push(username);
  }

};