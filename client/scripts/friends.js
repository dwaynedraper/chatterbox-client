var Friends = {

  friendList: [],
  $chats: $('#chats'),

  initialize: function() {
    this.$chats.on('click', '.username', this.toggleStatus);
  },

  toggleStatus: function(event) {
    let userName = event.currentTarget.innerText;
    console.log('userName: ', userName);
    //this.friendList.push(username);
    // this.$('#chats .username').html();
  }

};